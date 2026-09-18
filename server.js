require('dotenv').config();
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const {createClient}=require('@supabase/supabase-js');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const supabaseUrl=process.env.SUPABASE_URL;
const supabaseKey=process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
if(!supabaseUrl || !supabaseKey) throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY or SUPABASE_SERVICE_ROLE_KEY are required.');
const hasServiceRole=Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
const supabase=createClient(supabaseUrl,supabaseKey,{auth:{persistSession:false}});

function sanitizeUser(user){
  if(!user)return null;
  const {password, ...rest}=user;
  return rest;
}

async function getUsersTable(){
  const {data,error}=await supabase.from('profiles').select('*');
  if(error)throw new Error(error.message);
  return data || [];
}

async function upsertUserProfile(user){
  const {data,error}=await supabase.from('profiles').upsert({
    email:user.email,
    name:user.name,
    role:user.role
  },{onConflict:'email'}).select().single();
  if(error)throw new Error(error.message);
  return data;
}

async function getUserSettings(email){
  const {data,error}=await supabase.from('user_settings').select('*').eq('email',email).maybeSingle();
  if(error)throw new Error(error.message);
  return data && data.settings ? data.settings : {ai:true,live:true,certificates:true,notifications:true,reminders:true};
}

async function saveUserSettings(email,settings){
  const payload={email,settings};
  const {data,error}=await supabase.from('user_settings').upsert(payload,{onConflict:'email'}).select().single();
  if(error)throw new Error(error.message);
  return data?.settings || settings;
}

app.get('/api/health',async(req,res)=>{
  const {error}=await supabase.from('profiles').select('email').limit(1);
  if(error)return res.status(503).json({status:'error',service:'CAPACITY CONNECT',database:'supabase-error',message:error.message});
  res.json({status:'ok',service:'CAPACITY CONNECT',database:'supabase'});
});

app.post('/api/auth/register',async (req,res)=>{
  const {name,email,role='trainee',password=''}=req.body;
  if(!name || !email) return res.status(400).json({message:'Name and email are required'});
  if(!password || password.length<6) return res.status(400).json({message:'Password must be at least 6 characters'});
  const emailRedirectTo=`${req.protocol}://${req.get('host')}/login.html`;
  const {data:created,error}=hasServiceRole
    ? await supabase.auth.admin.createUser({email:email.toLowerCase(),password,email_confirm:true,user_metadata:{name,role}})
    : await supabase.auth.signUp({email:email.toLowerCase(),password,options:{data:{name,role},emailRedirectTo}});
  if(error) return res.status(409).json({message:error.message});
  const saved=await upsertUserProfile({name,email:email.toLowerCase(),role});
  res.status(201).json({message:created.session?'Registration successful':'Account created. Check your email to confirm your account before signing in.',user:sanitizeUser(saved),session:created.session});
});

app.post('/api/auth/login',async (req,res)=>{
  const {email,password}=req.body;
  const {data:auth,error}=await supabase.auth.signInWithPassword({email:String(email||'').toLowerCase(),password:String(password||'')});
  if(error || !auth.user) return res.status(401).json({message:error?.message || 'Invalid credentials'});
  const {data:profile}=await supabase.from('profiles').select('*').eq('email',auth.user.email).maybeSingle();
  const user=profile || {name:auth.user.user_metadata?.name || auth.user.email,email:auth.user.email,role:auth.user.user_metadata?.role || 'trainee'};
  res.json({message:'Login successful',user:sanitizeUser(user),session:auth.session});
});

app.get('/api/user/settings',async (req,res)=>{
  const email=String(req.query.email||'').toLowerCase();
  if(!email) return res.status(400).json({message:'Email is required'});
  const settings=await getUserSettings(email);
  res.json(settings);
});

app.post('/api/user/settings',async (req,res)=>{
  const {email,settings}=req.body;
  if(!email || !settings) return res.status(400).json({message:'Email and settings are required'});
  const saved=await saveUserSettings(String(email).toLowerCase(),settings);
  res.json({message:'Settings saved',settings:saved});
});

app.get('/api/auth/config',(req,res)=>res.json({url:supabaseUrl,key:process.env.SUPABASE_ANON_KEY || ''}));
app.post('/api/user/profile',async(req,res)=>{
  const {name,email,role='trainee'}=req.body;
  if(!name||!email)return res.status(400).json({message:'Name and email are required'});
  const profile=await upsertUserProfile({name,email:String(email).toLowerCase(),role});
  res.json({user:sanitizeUser(profile)});
});
app.get('/api/courses',(req,res)=>res.json({count:20,courses:['Full Stack Web Development','Python Programming','Java Programming','React.js','Node.js & Express','SQL & Database Engineering','Git & GitHub','Data Structures & Algorithms','Machine Learning with Python','Generative AI & Prompt Engineering','Cloud Fundamentals','Docker & Containers','Cybersecurity Foundations','TypeScript','Angular','DevOps CI/CD','Software Testing','UI/UX for Developers','System Design','Mobile App Development']}));
app.get('/api/admin/stats',(req,res)=>res.json({totalUsers:3,trainees:1,trainers:1,admins:1,courses:20,features:['user management','course moderation','analytics','certificates','access control','platform settings']}));

const PORT=process.env.PORT||5000;
if(process.env.MONGODB_URI){mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.error('MongoDB error',e.message));}
app.listen(PORT,()=>console.log(`CAPACITY CONNECT API running on ${PORT} (Supabase enabled)`));
