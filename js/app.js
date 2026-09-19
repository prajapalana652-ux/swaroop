const STATIC_HOST = location.hostname.endsWith('github.io');
const IS_FILE_MODE = location.protocol === 'file:';
const IS_LOCAL_DEV_SERVER = ['127.0.0.1', 'localhost'].includes(location.hostname) && !['5000', '5001'].includes(String(location.port || ''));
const API_BASE = IS_FILE_MODE || IS_LOCAL_DEV_SERVER ? 'http://localhost:5001/api' : '/api';

const LANGS = {
  en: {
    name: 'English',
    nav: { courses: 'Courses', projects: 'Projects', features: 'Features', login: 'Login' },
    hero: { eyebrow: 'AI-POWERED SOFTWARE LEARNING PLATFORM', title: 'Learn. Connect.<br><span>Build Your Future.</span>', subtitle: '20 software courses, real-world projects, YouTube lessons, assessments, certificates, trainer analytics, AI assistance and live conference rooms.', createAccount: 'Create account', signIn: 'Sign in' },
    feature: { ai: 'AI Assistant', aiText: 'Ask questions, get study guidance and project hints without leaving your learning workspace.', live: 'Live Conference', liveText: 'Start a Zoom-like room using Jitsi Meet links for classes, mentoring and team projects.', certificates: 'Project Certificates', certText: 'Finish modules, submit the problem statement project and generate a completion certificate.' },
    home: { coursesLabel: '20 Software Courses', projectLabel: 'Real-Time Project Tracks' },
    project: { fintech: 'Build authentication, REST APIs, analytics and role-based access.', aiSupport: 'Build a support chatbot, prompt workflows and evaluation dashboard.', ecommerce: 'Build catalog, cart, payments mock, admin controls and deployment pipeline.' },
    footer: { text: '© 2026 CAPACITY CONNECT · Learning platform demo' },
    auth: { welcome: 'Welcome back', fullName: 'Full name', email: 'Email', password: 'Password', trainee: 'Trainee / Student', trainer: 'Trainer', admin: 'Admin', createAccount: 'Create account', demoNote: 'Demo users are listed on the login screen.' },
    ui: { enrolled: 'Enrolled', modulesDone: 'Modules done', projects: 'Projects', certificates: 'Certificates', courseCatalog: 'Course catalog', announcements: 'Announcements', aiAssistant: 'AI Learning Assistant', speakingAssistant: 'AI Speaking Assistant', liveConference: 'Join live conference', publishCourse: 'Publish a course', publishedCourses: 'Published courses', addAnnouncement: 'Add announcement', publish: 'Publish', continueLearning: 'Continue learning', certificate: 'Certificate' }
  },
  te: {
    name: 'తెలుగు',
    nav: { courses: 'కోర్సులు', projects: 'ప్రాజెక్టులు', features: 'విశేషాలు', login: 'లాగిన్' },
    hero: { eyebrow: 'AI-పవర్‌డ్ సాఫ్ట్‌వేర్ అభ్యాస వేదిక', title: 'నేర్చుకోండి. కనెక్ట్ అవ్వండి.<br><span>మీ భవిష్యత్తును నిర్మించండి.</span>', subtitle: '20 సాఫ్ట్‌వేర్ కోర్సులు, వాస్తవ ప్రపంచ ప్రాజెక్టులు, YouTube పాఠాలు, అంచనాలు, సర్టిఫికేట్లు, ట్రైనర్ విశ్లేషణలు, AI సహాయం మరియు లైవ్ సమావేశ గదులు.', createAccount: 'ఖాతా సృష్టించండి', signIn: 'సైన్ ఇన్' },
    feature: { ai: 'AI సహాయకుడు', aiText: 'సమస్యలు అడగండి, అధ్యయన మార్గదర్శకత్వం మరియు ప్రాజెక్ట్ సూచనలు పొందండి.', live: 'లైవ్ సమావేశం', liveText: 'విద్యార్థులకు తరగతులు మరియు సమన్వయాలకు Jitsi మీట్ గదులను ఉపయోగించండి.', certificates: 'ప్రాజెక్ట్ సర్టిఫికేట్లు', certText: 'మాడ్యూళ్లు పూర్తిచేసి, ప్రాజెక్ట్ సమర్పించి, సర్టిఫికెట్ పొందండి.' },
    home: { coursesLabel: '20 సాఫ్ట్‌వేర్ కోర్సులు', projectLabel: 'వాస్తవ-ప్రాజెక్ట్ ట్రాక్లు' },
    project: { fintech: 'ఆథెంటికేషన్, REST APIలు, ఎనాలిటిక్స్ మరియు రోల్-బేస్డ్ యాక్సెస్ నిర్మించండి.', aiSupport: 'సహాయక చాట్‌బాట్, ప్రమ్ప్ట్ వర్క్‌ఫ్లోలు మరియు డాష్‌బోర్డ్ నిర్మించండి.', ecommerce: 'కోట్, కార్ట్, చెల్లింపు, అడ్మిన్ నియంత్రణలు మరియు డిప్లాయ్‌లను రూపొందించండి.' },
    footer: { text: '© 2026 CAPACITY CONNECT · అభ్యాస వేదిక ప్రదర్శన' },
    auth: { welcome: 'వెళ్లి వచ్చారు', fullName: 'పూర్తి పేరు', email: 'ఈమెయిల్', password: 'పాస్‌వర్డ్', trainee: 'శిక్షకుడు / విద్యార్థి', trainer: 'ట్రైనర్', admin: 'అడ్మిన్', createAccount: 'ఖాతా సృష్టించండి', demoNote: 'డెమో వినియోగదారులు లాగిన్ పేజీలో ఉంటారు.' },
    ui: { enrolled: 'చేరిన కోర్సులు', modulesDone: 'మాడ్యూళ్లు పూర్తి', projects: 'ప్రాజెక్టులు', certificates: 'సర్టిఫికేట్లు', courseCatalog: 'కోర్స్ కేటలాగ్', announcements: 'ప్రకటనలు', aiAssistant: 'AI అభ్యాస సహాయకుడు', speakingAssistant: 'AI మాటల అభ్యాస సహాయకుడు', liveConference: 'లైవ్ కాన్ఫరెన్స్', publishCourse: 'కోర్సు ప్రచురించండి', publishedCourses: 'ప్రచురించబడిన కోర్సులు', addAnnouncement: 'ప్రకటన జోడించండి', publish: 'ప్రచురించండి', continueLearning: 'కొనసాగించండి', certificate: 'సర్టిఫికెట్' }
  },
  hi: {
    name: 'हिन्दी',
    nav: { courses: 'कोर्स', projects: 'प्रोजेक्ट', features: 'विशेषताएँ', login: 'लॉगिन' },
    hero: { eyebrow: 'एआई-संचालित सॉफ्टवेयर लर्निंग प्लेटफॉर्म', title: 'सीखें. जुड़ें.<br><span>अपने भविष्य का निर्माण करें.</span>', subtitle: '20 सॉफ्टवेयर कोर्स, वास्तविक परियोजनाएँ, YouTube लेसन, मूल्यांकन, प्रमाणपत्र, ट्रेनर एनालिटिक्स, AI सहायक और लाइव कॉन्फ्रेंस.', createAccount: 'खाता बनाएं', signIn: 'साइन इन' },
    feature: { ai: 'AI सहायक', aiText: 'प्रश्न पूछें, अध्ययन मार्गदर्शन और प्रोजेक्ट सुझाव प्राप्त करें।', live: 'लाइव कॉन्फ्रेंस', liveText: 'क्लास, मेंटरिंग और टीम प्रोजेक्ट के लिए Jitsi Meet रूम शुरू करें।', certificates: 'प्रोजेक्ट प्रमाणपत्र', certText: 'मॉड्यूल पूरा करें, प्रोजेक्ट जमा करें और प्रमाणपत्र बनाएं।' },
    home: { coursesLabel: '20 सॉफ्टवेयर कोर्स', projectLabel: 'रियल-टाइम प्रोजेक्ट ट्रैक' },
    project: { fintech: 'प्रमाणीकरण, REST API, एनालिटिक्स और role-based एक्सेस बनाएं।', aiSupport: 'सपोर्ट चैटबॉट, प्रॉम्प्ट वर्कफ़्लो और डैशबोर्ड बनाएं।', ecommerce: 'कैटलॉग, कार्ट, भुगतान, एडमिन नियंत्रण और डिप्लॉयमेंट पाइपलाइन बनाएं।' },
    footer: { text: '© 2026 CAPACITY CONNECT · लर्निंग प्लेटफॉर्म डेमो' },
    auth: { welcome: 'स्वागत है', fullName: 'पूरा नाम', email: 'ईमेल', password: 'पासवर्ड', trainee: 'ट्रेनी / छात्र', trainer: 'ट्रेनर', admin: 'एडमिन', createAccount: 'खाता बनाएं', demoNote: 'डेमो उपयोगकर्ता लॉगिन पेज पर सूचीबद्ध हैं।' },
    ui: { enrolled: 'नामांकित', modulesDone: 'मॉड्यूल पूरा', projects: 'प्रोजेक्ट', certificates: 'प्रमाणपत्र', courseCatalog: 'कोर्स कैटलॉग', announcements: 'घोषणाएँ', aiAssistant: 'AI सीखने सहायक', speakingAssistant: 'AI बोलने का सहायक', liveConference: 'लाइव कॉन्फ्रेंस', publishCourse: 'कोर्स प्रकाशित करें', publishedCourses: 'प्रकाशित कोर्स', addAnnouncement: 'घोषणा जोड़ें', publish: 'प्रकाशित करें', continueLearning: 'सीखना जारी रखें', certificate: 'प्रमाणपत्र' }
  },
  ta: { name: 'தமிழ்', nav: { courses: 'பாடங்கள்', projects: 'திட்டங்கள்', features: 'அம்சங்கள்', login: 'உள்நுழை' }, hero: { eyebrow: 'AI-இயக்கப்பட்ட மென்பொருள் கற்றல் தளம்', title: 'கற்றுக்கொள்ளுங்கள். இணைந்திருங்கள்.<br><span>உங்கள் எதிர்காலத்தை உருவாக்குங்கள்.</span>', subtitle: '20 மென்பொருள் பாடங்கள், உண்மையான திட்டங்கள், YouTube பாடங்கள், மதிப்பீடுகள், சான்றிதழ்கள், பயிற்றுனர் பகுப்பாய்வு, AI உதவி மற்றும் நேரலை மாநாடுகள்.', createAccount: 'கணக்கு உருவாக்கு', signIn: 'சமர்ப்பிக்க' }, feature: { ai: 'AI உதவியாளர்', aiText: 'கேள்விகள் கேளுங்கள், கற்றல் வழிகாட்டுதலைப் பெறுங்கள்.', live: 'நேரலை மாநாடு', liveText: 'வகுப்பு மற்றும் குழுத் திட்டங்களுக்காக Jitsi Meet அறையை தொடங்குங்கள்.', certificates: 'திட்ட சான்றிதழ்கள்', certText: 'மாட்யூல்களை முடித்து, திட்டத்தை சமர்ப்பித்து, சான்றிதழ் பெறுங்கள்.' }, home: { coursesLabel: '20 மென்பொருள் பாடங்கள்', projectLabel: 'உண்மையான திட்டப் பாதைகள்' }, project: { fintech: 'அங்கீகாரம், REST API, பகுப்பாய்வு மற்றும் role-based அணுகலை உருவாக்குங்கள்.', aiSupport: 'ஆதரவு சாட்போட்டை உருவாக்குங்கள்.', ecommerce: 'கேடலாக், கார்ட், பணம் செலுத்துதல் மற்றும் நிர்வாகக் கட்டுப்பாடுகளை உருவாக்குங்கள்.' }, footer: { text: '© 2026 CAPACITY CONNECT · கற்றல் தளம்' }, auth: { welcome: 'வரவேற்கிறோம்', fullName: 'முழு பெயர்', email: 'மின்னஞ்சல்', password: 'கடவுச்சொல்', trainee: 'கற்றவர் / மாணவர்', trainer: 'பயிற்றுனர்', admin: 'நிர்வாகி', createAccount: 'கணக்கை உருவாக்கு', demoNote: 'டெமோ பயனர்கள் உள்நுழை பக்கத்தில் உள்ளனர்.' }, ui: { enrolled: 'பதிவு செய்யப்பட்டவை', modulesDone: 'மாட்யூல்கள் முடிந்தவை', projects: 'திட்டங்கள்', certificates: 'சான்றிதழ்கள்', courseCatalog: 'பாடக் கATALOG', announcements: 'அறிவிப்புகள்', aiAssistant: 'AI கற்றல் உதவியாளர்', speakingAssistant: 'AI பேச்சு உதவியாளர்', liveConference: 'நேரலை மாநாடு', publishCourse: 'பாடத்தை வெளியிடு', publishedCourses: 'வெளியிடப்பட்ட பாடங்கள்', addAnnouncement: 'அறிவிப்பைச் சேர்', publish: 'வெளியிடு', continueLearning: 'கற்றலைத் தொடரவும்', certificate: 'சான்றிதழ்' } },
  kn: { name: 'ಕನ್ನಡ', nav: { courses: 'ಕೋರ್ಸ್ಗಳು', projects: 'ಪ್ರಾಜೆಕ್ಟ್ಗಳು', features: 'ವೈಶಿಷ್ಟ್ಯಗಳು', login: 'ಲಾಗಿನ್' }, hero: { eyebrow: 'AI-ಚಾಲಿತ ಸಾಫ್ಟ್‌ವೇರ್ ಕಲಿಕಾ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್', title: 'ಕಲಿಯಿರಿ. ಸಂಪರ್ಕ ಹೊಂದಿರಿ.<br><span>ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸಿ.</span>', subtitle: '20 ಸಾಫ್ಟ್‌ವೇರ್ ಕೋರ್ಸ್ಗಳು, ನಿಜ ಜೀವನ ಪ್ರಾಜೆಕ್ಟ್ಗಳು, YouTube ಪಾಠಗಳು, ಮೌಲ್ಯಮಾಪನಗಳು, ಪ್ರಮಾಣಪತ್ರಗಳು, ಟ್ರೇನರ್‌ಗಳ ವಿಶ್ಲೇಷಣೆ, AI ಸಹಾಯ ಹಾಗೂ ಲೈವ್ ಕಾನ್ಫರೆನ್ಸ್‌ಗಳು.', createAccount: 'ಖಾತೆ ರಚಿಸಿ', signIn: 'ಸೈನ್ ಇನ್' }, feature: { ai: 'AI ಸಹಾಯಕ', aiText: 'ಪ್ರಶ್ನೆ ಕೇಳಿ, ಕಲಿಕಾ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ಒಳನೋಟ ಪಡೆದುಕೊಳ್ಳಿ.', live: 'ಲೈವ್ ಕಾನ್ಫರೆನ್ಸ್', liveText: 'ಕ್ಲಾಸ್, ಮೆಂಟರಿಂಗ್ ಮತ್ತು ತಂಡದ ಪ್ರಾಜೆಕ್ಟ್ಗಳಿಗೆ Jitsi Meet ಕೊಠಡಿ ಆರಂಭಿಸಿ.', certificates: 'ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಮಾಣಪತ್ರಗಳು', certText: 'ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಪೂರ್ಣ ಮಾಡಿ, ಪ್ರಾಜೆಕ್ಟ್ ಸಲ್ಲಿಸಿ ಮತ್ತು ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ.' }, home: { coursesLabel: '20 ಸಾಫ್ಟ್‌ವೇರ್ ಕೋರ್ಸ್ಗಳು', projectLabel: 'ರಿಯಲ್-ಟೈಮ್ ಪ್ರಾಜೆಕ್ಟ್ ಪಥಗಳು' }, project: { fintech: 'ಅಧಿಕೃತತೆ, REST APIಗಳು, ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ರೋಲ್-ಬೇಸ್ಡ್ ಪ್ರವೇಶವನ್ನು ರಚಿಸಿ.', aiSupport: 'ಸಹಾಯಕ ಚಾಟ್‌ಬಾಟ್, ಪ್ರಾಂಪ್ಟ್ ಕಾರ್ಯಪ್ರವಾಹ ಮತ್ತು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನಿರ್ಮಿಸಿ.', ecommerce: 'ಕ್ಯಾಟಲಾಗ್, ಕಾರ್ಟ್, ಪಾವತಿ, ಆಡ್ಮಿನ್ ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್‌ ಅನ್ನು ನಿರ್ಮಿಸಿ.' }, footer: { text: '© 2026 CAPACITY CONNECT · ಕಲಿಕಾ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಪ್ರದರ್ಶನ' }, auth: { welcome: 'ಸ್ವಾಗತ', fullName: 'ಪೂರ್ತಿ ಹೆಸರು', email: 'ಇಮೇಲ್', password: 'ಪಾಸ್ವರ್ಡ್', trainee: 'ಟ್ರೇನಿ / ವಿದ್ಯಾರ್ಥಿ', trainer: 'ಟ್ರೇನರ್', admin: 'ಅಡ್ಮಿನ್', createAccount: 'ಖಾತೆ ರಚಿಸಿ', demoNote: 'ಡೆಮೊ ಬಳಕೆದಾರರು ಲಾಗಿನ್ ಪೇಜಿಯಲ್ಲಿ ಇದ್ದಾರೆ.' }, ui: { enrolled: 'ಸೇರಿದವರು', modulesDone: 'ಮಾಡ್ಯೂಲ್‌ಗಳು ಪೂರ್ಣ', projects: 'ಪ್ರಾಜೆಕ್ಟ್ಗಳು', certificates: 'ಪ್ರಮಾಣಪತ್ರಗಳು', courseCatalog: 'ಕೋರ್ಸ್ ಕ್ಯಾಟಲಾಗ್', announcements: 'ಘೋಷಣೆಗಳು', aiAssistant: 'AI ಕಲಿಕಾ ಸಹಾಯಕ', speakingAssistant: 'AI ಮಾತು ಅಭ್ಯಾಸ ಸಹಾಯಕ', liveConference: 'ಲೈವ್ ಕಾನ್ಫರೆನ್ಸ್', publishCourse: 'ಕೋರ್ಸ್ ತಪ್ಪರಿಸಿ', publishedCourses: 'ಪ್ರಸಾರಗೊಂಡ ಕೋರ್ಸ್ಗಳು', addAnnouncement: 'ಘೋಷಣೆಯನ್ನು ಸೇರಿಸಿ', publish: 'ಪ್ರಕಟಿಸಿ', continueLearning: 'ಕಲಿಕೆಯನ್ನು ಮುಂದುವರೆಸಿ', certificate: 'ಪ್ರಮಾಣಪತ್ರ' } },
  ml: { name: 'മലയാളം', nav: { courses: 'കേഴ്‌സുകൾ', projects: 'പ്രോജക്റ്റുകൾ', features: 'വിശേഷതകൾ', login: 'ലോഗിൻ' }, hero: { eyebrow: 'AI-അവതരിപ്പിച്ച സോഫ്റ്റ്‌വെയർ പഠന പ്ലാറ്റ്‌ഫോർം', title: 'പഠിക്കുക. ബന്ധിപ്പിക്കുക.<br><span>നിങ്ങളുടെ ഭാവിയെ നിർമ്മിക്കുക.</span>', subtitle: '20 സോഫ്റ്റ്‌വെയർ കേഴ്‌സുകൾ, യഥാർത്ഥ പ്രോജക്റ്റുകൾ, YouTube ലെസണുകൾ, മൂല്യനിർണയം, സർട്ടിഫിക്കറ്റുകൾ, ട്രെയ്നർ അനലിറ്റിക്സ്, AI സഹായം, ലൈവ് കോൺഫറൻസ്.', createAccount: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക', signIn: 'സൈൻ ഇൻ' }, feature: { ai: 'AI സഹായി', aiText: 'ചോദ്യങ്ങൾ ചോദിച്ച് പഠന മാർഗ്ഗനിർദ്ദേശം നേടുക.', live: 'ലൈവ് കോൺഫറൻസ്', liveText: 'ക്ലാസ്, മെന്ററിംഗ്, ടീം പ്രോജക്റ്റുകൾക്ക് Jitsi Meet റൂം ആരംഭിക്കാം.', certificates: 'പ്രോജക്റ്റ് സർട്ടിഫിക്കറ്റുകൾ', certText: 'മോഡ്യൂളുകൾ പൂർത്തിയാക്കി, പ്രോജക്റ്റ് സമർപ്പിച്ച് സERTിഫിക്കേറ്റ് നേടുക.' }, home: { coursesLabel: '20 സോഫ്റ്റ്‌വെയർ കേഴ്‌സുകൾ', projectLabel: 'റിയൽ-ടൈം പ്രോജക്റ്റ് ട്രാക്കുകൾ' }, project: { fintech: 'Authentication, REST APIs, analytics, role-based access എന്നിവ നിർമ്മിക്കുക.', aiSupport: 'സപ്പോർട്ട് ചാറ്റ്ബോട്ട്, പ്രോമ്പ്റ്റ് വർക്ക്ഫ്ലോകൾ, ഡാഷ്ബോർഡ് നിർമ്മിക്കുക.', ecommerce: 'കാറ്റലോഗ്, കാർട്ട്, പേയ്‌മെന്റ്, അഡ്മിൻ നിയന്ത്രണങ്ങൾ, ഡിപ്ലോയ്‌മെന്റ് പൈപ്പ്ലൈൻ നിർമ്മിക്കുക.' }, footer: { text: '© 2026 CAPACITY CONNECT · പഠന പ്ലാറ്റ്ഫോം ഡെമോ' }, auth: { welcome: 'സ്വാഗതം', fullName: 'പൂർണമായ പേര്', email: 'ഇമെയിൽ', password: 'പാസ്വേഡ്', trainee: 'ട്രീണി / വിദ്യാർത്ഥി', trainer: 'ട്രെയ്നർ', admin: 'അഡ്മിൻ', createAccount: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക', demoNote: 'ഡെമോ ഉപയോക്താക്കൾ ലോഗിൻ പേജിൽ ലഭ്യമാണ്.' }, ui: { enrolled: 'എൻറോൾ ചെയ്തു', modulesDone: 'മോഡ്യൂളുകൾ പൂർത്തിയായി', projects: 'പ്രോജക്റ്റുകൾ', certificates: 'സർട്ടിഫിക്കറ്റുകൾ', courseCatalog: 'കേഴ്‌സ് കാറ്റലോഗ്', announcements: 'അറിയിപ്പുകൾ', aiAssistant: 'AI പഠന സഹായി', speakingAssistant: 'AI സംസാര പരിശീലന സഹായി', liveConference: 'ലൈവ് കോൺഫറൻസ്', publishCourse: 'കേഴ്‌സ് പ്രസിദ്ധീകരിക്കുക', publishedCourses: 'പ്രസിദ്ധീകരിച്ച കേഴ്‌സുകൾ', addAnnouncement: 'അറിയിപ്പ് ചേർക്കുക', publish: 'പ്രസിദ്ധീകരിക്കുക', continueLearning: 'പഠനം തുടരുക', certificate: 'സർട്ടിഫിക്കേറ്റ്' } },
  mr: { name: 'मराठी', nav: { courses: 'कोर्स', projects: 'प्रकल्प', features: 'विशेषता', login: 'लॉगिन' }, hero: { eyebrow: 'AI-चालित सॉफ्टवेअरसह शिकण्याची प्लॅटफॉर्म', title: 'शिका. जोडले जा.<br><span>तुमचा भविष्य तयार करा.</span>', subtitle: '20 सॉफ्टवेअर कोर्स, वास्तविक प्रकल्प, YouTube शिकवणी, मूल्यमापन, प्रमाणपत्र, ट्रेनर विश्लेषण, AI मदत आणि लाइव्ह कॉन्फरन्स.', createAccount: 'खाते तयार करा', signIn: 'साइन इन' }, feature: { ai: 'AI सहाय्यक', aiText: 'प्रश्न विचारा, शिकण्याची मार्गदर्शकता आणि प्रकल्प सूचना मिळवा.', live: 'लाइव्ह कॉन्फरन्स', liveText: 'क्लास, मेंटरिंग आणि टीम प्रकल्पासाठी Jitsi Meet रूम सुरू करा.', certificates: 'प्रकल्प प्रमाणपत्रे', certText: 'मॉड्यूल पूर्ण करा, प्रकल्प सबमिट करा आणि प्रमाणपत्र मिळवा.' }, home: { coursesLabel: '20 सॉफ्टवेअर कोर्स', projectLabel: 'रिअल-टाइम प्रकल्प ट्रॅक' }, project: { fintech: 'ऑथेंटिकेशन, REST API, विश्लेषण आणि role-based अ‍ॅक्सेस बनवा.', aiSupport: 'सपोर्ट चॅटबॉट, प्रॉम्प्ट वर्कफ्लो आणि डॅशबोर्ड बनवा.', ecommerce: 'कॅटलॉग, कार्ट, पेमेंट, अ‍ॅडमिन कंट्रोल आणि डिप्लॉयमेंट पाइपलाइन तयार करा.' }, footer: { text: '© 2026 CAPACITY CONNECT · लर्निंग प्लॅटफॉर्म डेमो' }, auth: { welcome: 'स्वागत', fullName: 'पूर्ण नाव', email: 'ईमेल', password: 'पासवर्ड', trainee: 'ट्रेनी / विद्यार्थी', trainer: 'ट्रेनर', admin: 'अ‍ॅडमिन', createAccount: 'खाते तयार करा', demoNote: 'डीमो वापरकर्ते लॉगिन पेजवर दिसतील.' }, ui: { enrolled: 'नोंदणी', modulesDone: 'मॉड्यूल पूर्ण', projects: 'प्रकल्प', certificates: 'प्रमाणपत्रे', courseCatalog: 'कोर्स कॅटलॉग', announcements: 'जाहिरात', aiAssistant: 'AI शिकण्यासहायक', speakingAssistant: 'AI बोलीतळ सहायक', liveConference: 'लाइव्ह कॉन्फरन्स', publishCourse: 'कोर्स प्रकाशित करा', publishedCourses: 'प्रकाशित कोर्स', addAnnouncement: 'जाहिरात जोडा', publish: 'प्रकाशित करा', continueLearning: 'शिकणे सुरू ठेवा', certificate: 'प्रमाणपत्र' } },
  bn: { name: 'বাংলা', nav: { courses: 'কোর্স', projects: 'প্রোজেক্ট', features: 'ফিচার', login: 'লগইন' }, hero: { eyebrow: 'AI-চালিত সফটওয়্যার লার্নিং প্ল্যাটফর্ম', title: 'শিখুন. যুক্ত হোন.<br><span>আপনার ভবিষ্যৎ গড়ুন.</span>', subtitle: '20টি সফটওয়্যার কোর্স, রিয়েল-ওয়ার্ল্ড প্রোজেক্ট, YouTube লেসন, মূল্যায়ন, সার্টিফিকেট, ট্রেনার অ্যানালিটিক্স, AI সহায়তা এবং লাইভ কনফারেন্স।', createAccount: 'অ্যাকাউন্ট তৈরি করুন', signIn: 'সাইন ইন' }, feature: { ai: 'AI সহকারী', aiText: 'প্রশ্ন জিজ্ঞাসা করুন, স্টাডি গাইডেন্স ও প্রোজেক্ট পরামর্শ পান।', live: 'লাইভ কনফারেন্স', liveText: 'ক্লাস, মেন্টরিং এবং টিম প্রোজেক্টের জন্য Jitsi Meet রুম চালু করুন।', certificates: 'প্রোজেক্ট সার্টিফিকেট', certText: 'মডিউল শেষ করুন, প্রোজেক্ট জমা দিন এবং সার্টিফিকেট পান।' }, home: { coursesLabel: '20টি সফটওয়্যার কোর্স', projectLabel: 'রিয়েল-টাইম প্রোজেক্ট ট্র্যাক' }, project: { fintech: 'অথেন্টিকেশন, REST API, অ্যানালিটিকস এবং role-based access তৈরি করুন।', aiSupport: 'সাপোর্ট চ্যাটবট, প্রম্পট ওয়ার্কফ্লো এবং ড্যাশবোর্ড তৈরি করুন।', ecommerce: 'ক্যাটালগ, কার্ট, পেমেন্ট, অ্যাডমিন কন্ট্রোল ও ডিপ্লয়মেন্ট পাইপলাইন তৈরি করুন।' }, footer: { text: '© 2026 CAPACITY CONNECT · লার্নিং প্ল্যাটফর্ম ডেমো' }, auth: { welcome: 'স্বাগতম', fullName: 'পূর্ণ নাম', email: 'ইমেইল', password: 'পাসওয়ার্ড', trainee: 'ট্রেইনি / ছাত্র', trainer: 'ট্রেনার', admin: 'অ্যাডমিন', createAccount: 'অ্যাকাউন্ট তৈরি করুন', demoNote: 'ডেমো ব্যবহারকারীরা লগইন পেজে তালিকাভুক্ত।' }, ui: { enrolled: 'নথিভুক্ত', modulesDone: 'মডিউল শেষ', projects: 'প্রোজেক্ট', certificates: 'সার্টিফিকেট', courseCatalog: 'কোর্স ক্যাটালগ', announcements: 'ঘোষণা', aiAssistant: 'AI শেখার সহকারী', speakingAssistant: 'AI কথোপকথন সহকারী', liveConference: 'লাইভ কনফারেন্স', publishCourse: 'কোর্স প্রকাশ করুন', publishedCourses: 'প্রকাশিত কোর্স', addAnnouncement: 'ঘোষণা যোগ করুন', publish: 'প্রকাশ করুন', continueLearning: 'শেখা চালিয়ে যান', certificate: 'সার্টিফিকেট' } }
};

function getCurrentLanguage() { return localStorage.getItem('cc_language') || 'en'; }
function setCurrentLanguage(lang) {
  const next = LANGS[lang] ? lang : 'en';
  localStorage.setItem('cc_language', next);
  document.documentElement.lang = next;
  applyTranslations();
  const selectors = [document.getElementById('langSelector'), document.getElementById('dashboardLang')];
  selectors.forEach((el) => { if (el) el.value = next; });
  if (document.getElementById('dash')) {
    const u = current();
    if (u && u.role === 'admin') renderAdmin();
    else if (u && u.role === 'trainer') renderTrainer();
    else if (u) renderTrainee();
  }
}

function t(key, fallback = '') {
  const lang = getCurrentLanguage();
  const parts = key.split('.');
  let cursor = LANGS[lang] || LANGS.en;
  for (const part of parts) {
    if (!cursor || typeof cursor !== 'object') return fallback || key;
    cursor = cursor[part];
  }
  return cursor || fallback || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (el.id === 'authSubmit') return;
    const text = t(el.dataset.i18n);
    if (text && text !== 'undefined') el.innerHTML = text;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const text = t(el.dataset.i18nPlaceholder);
    if (text && text !== 'undefined') el.placeholder = text;
  });
}

const defaultSettings = { ai: true, live: true, certificates: true, notifications: true, reminders: true };
const defaultCourseList = [
  { id: 1, title: 'Full Stack Web Development', category: 'Web', difficulty: 'Intermediate', duration: '6 Weeks', language: 'en', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80', description: 'Build full-stack apps with HTML, CSS, JavaScript, Node.js and REST APIs.' },
  { id: 2, title: 'Python Programming', category: 'Python', difficulty: 'Beginner', duration: '4 Weeks', language: 'en', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80', description: 'Learn Python fundamentals, OOP, files and API workflows.' },
  { id: 3, title: 'React.js', category: 'Frontend', difficulty: 'Intermediate', duration: '5 Weeks', language: 'en', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80', description: 'Create interactive UI with React components, hooks and routing.' },
  { id: 4, title: 'SQL & Database Engineering', category: 'Database', difficulty: 'Intermediate', duration: '4 Weeks', language: 'en', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80', description: 'Design database schemas, queries, indexes and reporting structures.' }
];
const defaultAssignments = [
  { id: 1, courseId: 1, title: 'Landing page build challenge', due: '2026-10-05', description: 'Design and build a responsive landing page with hero section, pricing tiles and CTA buttons.', status: 'pending' },
  { id: 2, courseId: 2, title: 'Python mini project', due: '2026-10-12', description: 'Create a small Python app that reads a CSV file and reports summary statistics.', status: 'pending' },
  { id: 3, courseId: 3, title: 'Component review task', due: '2026-10-20', description: 'Refactor a React page into reusable components and explain your design choices.', status: 'pending' }
];
const defaultRoadmap = [
  { id: 1, title: 'Week 1: Front-end foundations', milestone: 'Complete HTML and CSS basics', done: true },
  { id: 2, title: 'Week 2: JavaScript logic', milestone: 'Practice DOM, events, and functions', done: true },
  { id: 3, title: 'Week 3: Full-stack project', milestone: 'Build a small API + UI project', done: false },
  { id: 4, title: 'Week 4: Interview prep', milestone: 'Prepare 2 portfolio stories and mock answers', done: false }
];
const defaultResources = [
  { id: 1, title: 'Git cheat sheet', type: 'Quick reference', link: 'https://git-scm.com/doc' },
  { id: 2, title: 'JavaScript DOM guide', type: 'Tutorial', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
  { id: 3, title: 'REST API overview', type: 'Guide', link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST' }
];
const defaultExam = {
  id: 1,
  title: 'Skill Check Exam',
  description: 'Complete this quick assessment to review your learning progress.',
  questions: [
    { question: 'Which HTML element is used for the main page content?', choices: ['<main>', '<nav>', '<header>', '<footer>'], answer: '<main>' },
    { question: 'Which JavaScript keyword declares a block-scoped variable?', choices: ['const', 'var', 'function', 'let'], answer: 'const' },
    { question: 'Which tool is commonly used for version control?', choices: ['Git', 'Excel', 'Photoshop', 'Notepad'], answer: 'Git' }
  ]
};
const defaultQuizzes = [
  {
    id: 1,
    title: 'Web Fundamentals Quiz',
    description: 'Test your HTML, CSS and JavaScript basics.',
    questions: [
      { question: 'Which tag creates a top-level heading?', choices: ['<h1>', '<p>', '<div>', '<head>'], answer: '<h1>' },
      { question: 'Which CSS property changes text color?', choices: ['color', 'font-size', 'padding', 'display'], answer: 'color' },
      { question: 'Which JavaScript method selects an element by id?', choices: ['getElementById()', 'querySelectorAll()', 'createElement()', 'addEventListener()'], answer: 'getElementById()' }
    ]
  },
  {
    id: 2,
    title: 'Python Essentials Quiz',
    description: 'Check your Python fundamentals.',
    questions: [
      { question: 'Which keyword defines a function in Python?', choices: ['def', 'func', 'function', 'lambda'], answer: 'def' },
      { question: 'What does a list store?', choices: ['Ordered values', 'Only numbers', 'Only strings', 'Only objects'], answer: 'Ordered values' },
      { question: 'Which method converts a string to lowercase?', choices: ['lower()', 'toLower()', 'min()', 'split()'], answer: 'lower()' }
    ]
  }
];
const DEMO_USERS = [
  { name: 'Demo Student', email: 'student@capacityconnect.com', role: 'trainee', password: 'student123' },
  { name: 'Demo Trainer', email: 'trainer@capacityconnect.com', role: 'trainer', password: 'trainer123' },
  { name: 'Demo Admin', email: 'admin@capacityconnect.com', role: 'admin', password: 'admin123' }
];

function users() { return JSON.parse(localStorage.getItem('cc_users') || '[]'); }
function saveUsers(v) { localStorage.setItem('cc_users', JSON.stringify(v)); }
function current() { return JSON.parse(localStorage.getItem('cc_current') || 'null'); }
function setCurrent(u) { localStorage.setItem('cc_current', JSON.stringify(u)); }
function progress() { return JSON.parse(localStorage.getItem('cc_progress') || '{}'); }
function setProgress(p) { localStorage.setItem('cc_progress', JSON.stringify(p)); }
function announcements() { return JSON.parse(localStorage.getItem('cc_announcements') || '[]'); }
function saveAnnouncements(items) { localStorage.setItem('cc_announcements', JSON.stringify(items)); }
function trainerCourses() { return JSON.parse(localStorage.getItem('cc_trainer_courses') || '[]'); }
function saveTrainerCourses(items) { localStorage.setItem('cc_trainer_courses', JSON.stringify(items)); }

function seed() {
  if (!localStorage.getItem('cc_progress')) localStorage.setItem('cc_progress', JSON.stringify({}));
  if (!localStorage.getItem('cc_trainer_courses')) localStorage.setItem('cc_trainer_courses', JSON.stringify([]));
  if (!localStorage.getItem('cc_settings')) localStorage.setItem('cc_settings', JSON.stringify({}));
  if (!localStorage.getItem('cc_announcements')) localStorage.setItem('cc_announcements', JSON.stringify([]));
  if (!localStorage.getItem('cc_courses')) localStorage.setItem('cc_courses', JSON.stringify(defaultCourseList));
}

function ensureDemoAccounts() {
  const saved = users();
  const existing = new Set(saved.map((user) => String(user.email).toLowerCase()));
  const nextUsers = [...saved];
  DEMO_USERS.forEach((demo) => {
    if (!existing.has(String(demo.email).toLowerCase())) {
      nextUsers.push(demo);
      existing.add(String(demo.email).toLowerCase());
    }
  });
  if (nextUsers.length !== saved.length) {
    saveUsers(nextUsers);
  }
}
seed();
ensureDemoAccounts();

function getCourses() {
  const saved = JSON.parse(localStorage.getItem('cc_courses') || '[]');
  return saved.length ? saved : defaultCourseList;
}

function userSettings() {
  const u = current();
  const data = JSON.parse(localStorage.getItem('cc_settings') || '{}');
  return { ...defaultSettings, ...(u ? data[u.email] || {} : {}) };
}

function saveUserSettings(settings) {
  const u = current();
  if (!u) return;
  const saved = { ...defaultSettings, ...settings };
  const data = JSON.parse(localStorage.getItem('cc_settings') || '{}');
  data[u.email] = saved;
  localStorage.setItem('cc_settings', JSON.stringify(data));
}

function localAuth(mode, payload) {
  const saved = users();
  if (mode === 'register') {
    if (saved.some((user) => user.email === payload.email)) throw new Error('An account with this email already exists.');
    const user = { name: payload.name, email: payload.email, role: payload.role || 'trainee', password: payload.password };
    saveUsers([...saved, user]);
    return user;
  }
  const user = saved.find((item) => item.email === payload.email && item.password === payload.password);
  if (!user) throw new Error('Invalid email or password.');
  return user;
}

function continueWithGoogle() {
  const demoUser = DEMO_USERS[0];
  if (demoUser) {
    setCurrent(demoUser);
    location.href = 'dashboard.html';
    return;
  }
  alert('Google sign-in is ready for OAuth credentials in backend/.env. Demo login uses email/password.');
}

async function submitLogin(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  const email = document.getElementById('email')?.value.trim().toLowerCase();
  const password = document.getElementById('password')?.value;
  const msg = document.getElementById('loginMsg');

  if (!email || !password) {
    if (msg) msg.textContent = 'Please enter both email and password.';
    return false;
  }

  try {
    if (STATIC_HOST || IS_FILE_MODE) {
      const user = localAuth('login', { email, password });
      setCurrent(user);
      location.href = 'dashboard.html';
      return true;
    }

    let response;
    try {
      response = await fetch(`${API_BASE}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    } catch (networkError) {
      const user = localAuth('login', { email, password });
      setCurrent(user);
      location.href = 'dashboard.html';
      return true;
    }

    const result = await response.json().catch(() => ({ message: 'Invalid credentials' }));
    if (!response.ok) {
      try {
        const user = localAuth('login', { email, password });
        setCurrent(user);
        location.href = 'dashboard.html';
        return true;
      } catch (fallbackError) {
        if (msg) msg.textContent = fallbackError.message || result.message || 'Invalid email or password.';
        return false;
      }
    }

    const user = result.user || localAuth('login', { email, password });
    setCurrent(user);
    location.href = 'dashboard.html';
    return true;
  } catch (error) {
    if (msg) msg.textContent = error.message || 'Unable to connect to the server.';
    return false;
  }
}

function showAuth(mode = 'login') {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  const authTitle = document.getElementById('authTitle');
  const authSubmit = document.getElementById('authSubmit');
  const nameField = document.getElementById('name');
  const roleField = document.getElementById('role');
  const authForm = document.getElementById('authForm');
  const authSwitch = document.getElementById('authSwitch');

  authTitle.textContent = mode === 'register' ? 'Create your account' : 'Welcome back';
  authSubmit.textContent = mode === 'register' ? 'Create account' : 'Login';

  const isRegister = mode === 'register';
  nameField.style.display = isRegister ? 'block' : 'none';
  roleField.style.display = isRegister ? 'block' : 'none';
  nameField.required = isRegister;
  roleField.required = isRegister;
  nameField.toggleAttribute('required', isRegister);
  roleField.toggleAttribute('required', isRegister);

  authForm.dataset.mode = mode;
  authSwitch.innerHTML = mode === 'register' ? 'Already have an account? <a href="#" onclick="showAuth(\'login\');return false">Sign in</a>' : 'Need an account? <a href="#" onclick="showAuth(\'register\');return false">Join now</a>';
  applyTranslations();
}

function hideAuth() { document.getElementById('authModal')?.classList.add('hidden'); }

async function authSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('authForm');
  const mode = form.dataset.mode || 'login';
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const payload = { email, password };
  if (mode === 'register') {
    payload.name = document.getElementById('name').value.trim();
    payload.role = document.getElementById('role').value;
  }

  try {
    if (STATIC_HOST || IS_FILE_MODE) {
      const user = localAuth(mode, payload);
      setCurrent(user);
      location.href = 'dashboard.html';
      return;
    }
    let response;
    try {
      response = await fetch(`${API_BASE}/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (networkError) {
      try {
        const fallbackUser = localAuth(mode, payload);
        setCurrent(fallbackUser);
        location.href = 'dashboard.html';
        return;
      } catch (fallbackError) {
        alert(fallbackError.message || 'Unable to authenticate.');
        return;
      }
    }

    const result = await response.json().catch(() => ({ message: 'Authentication failed' }));
    if (!response.ok) {
      try {
        const fallbackUser = localAuth(mode, payload);
        setCurrent(fallbackUser);
        location.href = 'dashboard.html';
        return;
      } catch (fallbackError) {
        alert(fallbackError.message || result.message || 'Authentication failed.');
        return;
      }
    }
    if (mode === 'register' && !result.session) {
      alert(result.message);
      showAuth('login');
      return;
    }
    setCurrent(result.user || localAuth(mode, payload));
    location.href = 'dashboard.html';
  } catch (error) {
    alert(error.message || 'Unable to create the account.');
  }
}

function logout() { localStorage.removeItem('cc_current'); location.href = 'index.html'; }

function toast(message) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = message;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 2200);
}

function getAssignments() {
  const saved = JSON.parse(localStorage.getItem('cc_assignments') || '[]');
  return saved.length ? saved : defaultAssignments;
}

function saveAssignments(assignments) {
  localStorage.setItem('cc_assignments', JSON.stringify(assignments));
}

function getRoadmap() {
  const saved = JSON.parse(localStorage.getItem('cc_roadmap') || '[]');
  return saved.length ? saved : defaultRoadmap;
}

function saveRoadmap(items) {
  localStorage.setItem('cc_roadmap', JSON.stringify(items));
}

function getResources() {
  const saved = JSON.parse(localStorage.getItem('cc_resources') || '[]');
  return saved.length ? saved : defaultResources;
}

function saveResources(items) {
  localStorage.setItem('cc_resources', JSON.stringify(items));
}

function getExams() {
  const saved = JSON.parse(localStorage.getItem('cc_exams') || '[]');
  return saved.length ? saved : [defaultExam];
}

function saveExams(exams) {
  localStorage.setItem('cc_exams', JSON.stringify(exams));
}

function getExamResults(userEmail) {
  const saved = JSON.parse(localStorage.getItem('cc_exam_results') || '{}');
  return saved[userEmail] || {};
}

function saveExamResults(userEmail, results) {
  const saved = JSON.parse(localStorage.getItem('cc_exam_results') || '{}');
  saved[userEmail] = results;
  localStorage.setItem('cc_exam_results', JSON.stringify(saved));
}

function getQuizzes() {
  const saved = JSON.parse(localStorage.getItem('cc_quizzes') || '[]');
  return saved.length ? saved : defaultQuizzes;
}

function saveQuizzes(quizzes) {
  localStorage.setItem('cc_quizzes', JSON.stringify(quizzes));
}

function getQuizState(userEmail, quizId) {
  const state = JSON.parse(localStorage.getItem('cc_quiz_state') || '{}');
  return state[`${userEmail}:${quizId}`] || {};
}

function saveQuizState(userEmail, quizId, answers) {
  const state = JSON.parse(localStorage.getItem('cc_quiz_state') || '{}');
  state[`${userEmail}:${quizId}`] = answers;
  localStorage.setItem('cc_quiz_state', JSON.stringify(state));
}

function getAssignmentState(userEmail, assignmentId) {
  const state = JSON.parse(localStorage.getItem('cc_assignment_state') || '{}');
  return state[`${userEmail}:${assignmentId}`] || 'pending';
}

function saveAssignmentState(userEmail, assignmentId, status) {
  const state = JSON.parse(localStorage.getItem('cc_assignment_state') || '{}');
  state[`${userEmail}:${assignmentId}`] = status;
  localStorage.setItem('cc_assignment_state', JSON.stringify(state));
}

function submitAssignment(assignmentId) {
  const u = current();
  if (!u) return;
  saveAssignmentState(u.email, assignmentId, 'submitted');
  toast('Assignment submitted');
  renderTrainee();
}

function completeMilestone(milestoneId) {
  const currentRoadmap = getRoadmap();
  const updated = currentRoadmap.map((item) => item.id === milestoneId ? { ...item, done: !item.done } : item);
  saveRoadmap(updated);
  toast('Milestone updated');
  renderTrainee();
}

function answerQuiz(quizId, questionIndex, selectedChoice) {
  const u = current();
  if (!u) return;
  const quiz = getQuizzes().find((item) => item.id === quizId);
  if (!quiz) return;
  const answers = getQuizState(u.email, quizId);
  answers[questionIndex] = selectedChoice;
  saveQuizState(u.email, quizId, answers);
  const correct = quiz.questions.filter((q, index) => answers[index] === q.answer).length;
  toast(`Quiz progress: ${correct}/${quiz.questions.length} correct so far`);
  renderTrainee();
}

function submitExam(examId) {
  const u = current();
  if (!u) return;
  const exam = getExams().find((item) => item.id === examId);
  if (!exam) return;

  let score = 0;
  exam.questions.forEach((question, index) => {
    const selected = document.querySelector(`input[name="exam-${examId}-${index}"]:checked`);
    if (selected && selected.value === question.answer) score += 1;
  });

  const percentage = Math.round((score / exam.questions.length) * 100);
  const results = getExamResults(u.email);
  results[examId] = { score: percentage, correct: score, total: exam.questions.length, completedAt: new Date().toISOString() };
  saveExamResults(u.email, results);
  toast(`Exam score: ${percentage}%`);
  renderTrainee();
}

function createAssignment(event) {
  event.preventDefault();
  const title = document.getElementById('assignTitle')?.value.trim();
  const courseId = Number(document.getElementById('assignCourse')?.value || 1);
  const due = document.getElementById('assignDue')?.value || new Date().toISOString().slice(0, 10);
  const description = document.getElementById('assignDesc')?.value.trim();

  if (!title || !description) {
    toast('Assignment title and description are required.');
    return;
  }

  const assignments = getAssignments();
  assignments.push({ id: Date.now(), courseId, title, due, description, status: 'pending' });
  saveAssignments(assignments);
  toast('Assignment published');
  renderTrainer();
}

function renderHomeCourses() {
  const preview = document.getElementById('coursePreview');
  if (!preview) return;
  preview.innerHTML = getCourses().map((course) => `
    <article class="glass card course-preview">
      <img class="course-image" src="${course.image}" alt="${course.title} course illustration" loading="lazy">
      <b>${course.title}</b>
      <p>${course.description}</p>
      <span class="pill">${course.category}</span>
    </article>
  `).join('');
}

function renderAnnouncementList(containerId, audience = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = announcements().filter((item) => audience === 'all' || item.audience === audience || item.audience === 'all');
  container.innerHTML = items.length ? items.map((item) => `
    <div class="announcement-card">
      <div class="announcement-meta"><strong>${item.title}</strong><span>${item.language.toUpperCase()}</span></div>
      <p class="muted">${item.description}</p>
      <div class="announcement-meta"><span>${item.type}</span><span>${item.date}</span></div>
    </div>
  `).join('') : '<p class="muted">No announcements available.</p>';
}

function addAnnouncement() {
  const currentUser = current();
  const title = document.getElementById('announcementTitle')?.value.trim();
  const description = document.getElementById('announcementDesc')?.value.trim();
  const audience = document.getElementById('announcementAudience')?.value || 'all';
  const language = document.getElementById('announcementLanguage')?.value || getCurrentLanguage();
  if (!currentUser || !title || !description) {
    toast('Please complete the announcement fields.');
    return;
  }
  const items = announcements();
  items.unshift({ id: Date.now(), title, description, audience, language, type: currentUser.role === 'trainer' ? 'course' : 'platform', date: new Date().toLocaleDateString(), createdBy: currentUser.email });
  saveAnnouncements(items);
  toast('Announcement added');
  renderTrainee();
  renderTrainer();
  renderAdmin();
}

function publishCourse(event) {
  event.preventDefault();
  const title = document.getElementById('tcTitle')?.value.trim();
  const description = document.getElementById('tcDesc')?.value.trim();
  const category = document.getElementById('tcCategory')?.value || 'Web';
  const difficulty = document.getElementById('tcDifficulty')?.value || 'Intermediate';
  const duration = document.getElementById('tcDuration')?.value || '4 Weeks';
  const language = document.getElementById('tcLanguage')?.value || getCurrentLanguage();
  const image = document.getElementById('tcImage')?.value || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80';
  if (!title || !description) {
    toast('Course title and description are required.');
    return;
  }
  const list = trainerCourses();
  list.push({ id: Date.now(), title, description, category, difficulty, duration, language, image, status: 'published' });
  saveTrainerCourses(list);
  const allCourses = getCourses();
  allCourses.push({ id: Date.now() + 1, title, description, category, difficulty, duration, language, image });
  localStorage.setItem('cc_courses', JSON.stringify(allCourses));
  renderTrainer();
  toast('Course published');
}

function enrollCourse(courseId) {
  const u = current();
  if (!u) return;
  const p = progress();
  p[u.email] = p[u.email] || {};
  p[u.email][courseId] = p[u.email][courseId] || { enrolled: true, modules: 0, project: false, certificate: false };
  setProgress(p);
  toast('Enrolled successfully');
  renderTrainee();
}

function completeModule(courseId) {
  const u = current();
  if (!u) return;
  const p = progress();
  p[u.email] = p[u.email] || {};
  p[u.email][courseId] = p[u.email][courseId] || { enrolled: true, modules: 0, project: false, certificate: false };
  const currentProgress = p[u.email][courseId];
  currentProgress.modules = Math.min(5, (currentProgress.modules || 0) + 1);
  currentProgress.project = currentProgress.modules >= 5;
  if (currentProgress.project) {
    currentProgress.certificate = true;
  }
  setProgress(p);
  toast('Module complete');
  renderTrainee();
}

function generateCertificate(courseId) {
  const u = current();
  const course = getCourses().find((item) => item.id === courseId);
  const certWindow = window.open('', '_blank');
  certWindow.document.write(`
    <html><body style="font-family:Arial; text-align:center; padding:80px; background:#f7f8ff; color:#10162d;">
      <h1>CAPACITY CONNECT</h1>
      <h2>Certificate of Completion</h2>
      <p>This certifies that</p>
      <h3>${u.name}</h3>
      <p>successfully completed the course</p>
      <h2>${course.title}</h2>
      <p>Issued on ${new Date().toLocaleDateString()}</p>
      <hr>
      <p>Trainer: Platform Mentor</p>
    </body></html>
  `);
  certWindow.document.close();
  certWindow.focus();
  toast('Certificate generated');
}

function askAI() {
  const input = document.getElementById('aiInput');
  const chat = document.getElementById('chat');
  if (!input || !chat || !input.value.trim()) return;
  const question = input.value.trim();
  chat.innerHTML += `<div class="bubble me">${escapeHtml(question)}</div>`;

  const lower = question.toLowerCase();
  let answer = 'Break the task into small steps, build one module at a time, test frequently, and document your work clearly.';
  if (lower.includes('debug') || lower.includes('error')) answer = 'Check the exact error message first, isolate the failing function, verify inputs, and test the smallest possible scenario before fixing the root cause.';
  if (lower.includes('project')) answer = 'For a project, define the problem, create a plan, implement the core workflow, add tests, and prepare a clean demo plus documentation.';
  if (lower.includes('python')) answer = 'Start with variables, functions, loops, and data structures, then move to file handling, APIs, and a mini project.';
  if (lower.includes('telugu') || lower.includes('hindi') || lower.includes('tamil')) answer = 'Use a simple explanation first, then give a technical version with examples relevant to the task.';

  chat.innerHTML += `<div class="bubble">${answer}</div>`;
  chat.scrollTop = chat.scrollHeight;
  input.value = '';
}

function startSpeakingPractice() {
  const speakingLanguage = document.getElementById('speakingLanguage')?.value || 'en';
  const explanationLanguage = document.getElementById('explanationLanguage')?.value || 'te';
  const topic = document.getElementById('speakingTopic')?.value || 'self-introduction';
  const output = document.getElementById('speakingOutput');
  if (!output) return;
  const responses = {
    'self-introduction': 'AI: Great job! Try saying: “Hello, I am a software learner and I enjoy building web applications.”',
    interview: 'AI: Tell me about a project you built and the challenges you solved. Keep your answer structured and confident.',
    developer: 'AI: Explain a recent coding problem you solved and what trade-offs you considered in your design.',
    workplace: 'AI: Practice a polite follow-up: “I have completed the task, and I can share the summary with the team.”'
  };
  output.innerHTML = `<div class="bubble">${responses[topic] || responses['self-introduction']}</div><div class="bubble">Feedback: ${speakingLanguage.toUpperCase()} practice is active. Explanation language: ${explanationLanguage.toUpperCase()}. Practice confident, short sentences and listen for grammar correction.</div>`;
  toast('Speaking practice started');
}

function listenAssistant() {
  const output = document.getElementById('speakingOutput');
  if (!output) return;
  output.innerHTML = '<div class="bubble">AI: Speak slowly, pause after each idea, and focus on clarity. Use short sentences first and then expand with technical examples.</div>';
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function renderTrainee() {
  const u = current();
  if (!u) return;
  const p = progress()[u.email] || {};
  const courseFilter = document.getElementById('courseLanguageFilter')?.value || getCurrentLanguage();
  const visibleCourses = getCourses().filter((course) => courseFilter === 'all' || course.language === courseFilter || course.language === getCurrentLanguage());

  document.getElementById('roleBadge').textContent = 'Trainee';
  document.getElementById('dash').innerHTML = `
    <div class="dash-head">
      <div>
        <p class="eyebrow">TRAINEE WORKSPACE</p>
        <h1>Welcome, <span>${(u.name || 'Student').split(' ')[0]}</span></h1>
        <p class="muted" style="text-align:left">Enroll, learn, complete modules, solve real-time problem statements and earn certificates.</p>
      </div>
      <button class="btn" onclick="conference()">🎥 Join live conference</button>
    </div>

    <div class="statgrid">
      <div class="glass stat"><strong>${Object.keys(p).length}</strong>Enrolled</div>
      <div class="glass stat"><strong>${Object.values(p).filter((x) => x.modules >= 5).length}</strong>Modules done</div>
      <div class="glass stat"><strong>${Object.values(p).filter((x) => x.project).length}</strong>Projects</div>
      <div class="glass stat"><strong>${Object.values(p).filter((x) => x.certificate).length}</strong>Certificates</div>
    </div>

    <section class="glass section">
      <h3>Course catalog</h3>
      <div class="row" style="margin-bottom:16px">
        <label class="lang-switch">
          <span>🌐</span>
          <select id="courseLanguageFilter">
            <option value="all">All</option>
            <option value="en">English</option>
            <option value="te">తెలుగు</option>
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ml">മലയാളം</option>
            <option value="mr">मराठी</option>
            <option value="bn">বাংলা</option>
          </select>
        </label>
      </div>
      <div class="coursegrid">
        ${visibleCourses.map((course, index) => {
          const item = p[course.id];
          const pct = item ? Math.min(100, Math.round((item.modules || 0) * 20 + (item.project ? 20 : 0))) : 0;
          return `
            <div class="course">
              <img class="course-image" src="${course.image}" alt="${course.title}" loading="lazy">
              <b>${index + 1}. ${course.title}</b>
              <div class="meta">${course.description} · ${course.category}</div>
              <div class="row">
                <span class="pill">${course.language.toUpperCase()}</span>
                <span class="pill">${course.difficulty}</span>
              </div>
              <div class="progress"><i style="width:${pct}%"></i></div>
              <div class="row">
                ${item ? `<span class="pill">${pct}% complete</span>` : `<button class="btn small" onclick="enrollCourse(${course.id})">Enroll</button>`}
                ${item ? `<button class="btn small" onclick="completeModule(${course.id})">${item.modules >= 5 ? 'Module complete' : 'Module complete'}</button>` : ''}
                ${item && item.project ? `<button class="btn small" onclick="generateCertificate(${course.id})">Certificate</button>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>

    <section class="glass section">
      <h3>Assignments & Quizzes</h3>
      <div class="assessment-grid">
        <div>
          <h4>Assignments</h4>
          <div class="mini-list">
            ${getAssignments().map((assignment) => {
              const status = getAssignmentState(u.email, assignment.id);
              return `
                <div class="mini-card">
                  <div class="mini-head"><strong>${assignment.title}</strong><span class="pill ${status === 'submitted' ? 'success' : 'warning'}">${status === 'submitted' ? 'Submitted' : 'Pending'}</span></div>
                  <p class="muted">${assignment.description}</p>
                  <div class="row">
                    <span class="pill">Due: ${assignment.due}</span>
                    <button class="btn small" onclick="submitAssignment(${assignment.id})" ${status === 'submitted' ? 'disabled' : ''}>${status === 'submitted' ? 'Submitted' : 'Submit'}</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div>
          <h4>Quizzes</h4>
          <div class="mini-list">
            ${getQuizzes().map((quiz) => {
              const answers = getQuizState(u.email, quiz.id);
              const score = quiz.questions.filter((q, index) => answers[index] === q.answer).length;
              return `
                <div class="mini-card">
                  <div class="mini-head"><strong>${quiz.title}</strong><span class="pill">${score}/${quiz.questions.length}</span></div>
                  <p class="muted">${quiz.description}</p>
                  <div class="quiz-block">
                    ${quiz.questions.map((question, questionIndex) => `
                      <div class="quiz-question">
                        <p>${questionIndex + 1}. ${question.question}</p>
                        <div class="quiz-options">
                          ${question.choices.map((option) => `
                            <button class="option-btn ${answers[questionIndex] === option ? 'selected' : ''}" onclick="answerQuiz(${quiz.id}, ${questionIndex}, '${option.replace(/'/g, "\\'")}' )">${option}</button>
                          `).join('')}
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="glass section">
      <h3>Learning roadmap</h3>
      <div class="roadmap-grid">
        ${getRoadmap().map((item) => `
          <div class="mini-card ${item.done ? 'done' : ''}">
            <div class="mini-head">
              <strong>${item.title}</strong>
              <span class="pill ${item.done ? 'success' : 'warning'}">${item.done ? 'Done' : 'Next'}</span>
            </div>
            <p class="muted">${item.milestone}</p>
            <button class="btn small" onclick="completeMilestone(${item.id})">${item.done ? 'Mark pending' : 'Complete milestone'}</button>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="glass section">
      <h3>Study resources</h3>
      <div class="resource-grid">
        ${getResources().map((resource) => `
          <div class="mini-card">
            <div class="mini-head"><strong>${resource.title}</strong><span class="pill">${resource.type}</span></div>
            <a class="resource-link" href="${resource.link}" target="_blank" rel="noopener noreferrer">Open resource</a>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="glass section">
      <h3>Skill check exam</h3>
      <div class="mini-list">
        ${getExams().map((exam) => {
          const result = getExamResults(u.email)[exam.id];
          return `
            <div class="mini-card">
              <div class="mini-head"><strong>${exam.title}</strong><span class="pill ${result ? 'success' : 'warning'}">${result ? result.score + '%' : 'Not started'}</span></div>
              <p class="muted">${exam.description}</p>
              <div class="quiz-block">
                ${exam.questions.map((question, questionIndex) => `
                  <div class="quiz-question">
                    <p>${questionIndex + 1}. ${question.question}</p>
                    <div class="quiz-options">
                      ${question.choices.map((option) => `
                        <label class="choice-row">
                          <input type="radio" name="exam-${exam.id}-${questionIndex}" value="${option}">
                          <span>${option}</span>
                        </label>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
              <button class="btn small" onclick="submitExam(${exam.id})">Submit exam</button>
            </div>
          `;
        }).join('')}
      </div>
    </section>

    <section class="glass section">
      <h3>Announcements</h3>
      <div id="announcementList" class="announcement-list"></div>
    </section>

    <section class="glass section section-grid">
      <div>
        <h3>AI Learning Assistant</h3>
        <div id="chat" class="chat">
          <div class="bubble">Hi ${u.name || 'Student'}! Ask me to explain a topic, debug code, or create practice questions.</div>
        </div>
        <div class="row" style="margin-top:12px">
          <input id="aiInput" class="field" placeholder="Ask something about your course...">
          <button class="btn small" onclick="askAI()">Ask AI</button>
        </div>
      </div>
      <div>
        <h3>AI Speaking Assistant</h3>
        <div class="ai-controls">
          <select id="speakingLanguage"><option value="en">English</option><option value="te">తెలుగు</option><option value="hi">हिन्दी</option><option value="ta">தமிழ்</option><option value="kn">ಕನ್ನಡ</option><option value="ml">മലയാളം</option><option value="mr">मराठी</option><option value="bn">বাংলা</option></select>
          <select id="explanationLanguage"><option value="te">తెలుగు</option><option value="hi">हिन्दी</option><option value="en">English</option></select>
          <select id="speakingTopic"><option value="self-introduction">Self introduction</option><option value="interview">Interview preparation</option><option value="developer">Developer interview</option><option value="workplace">Workplace communication</option></select>
        </div>
        <div class="row" style="margin-top:12px">
          <button class="btn small" onclick="startSpeakingPractice()">Start speaking practice</button>
          <button class="btn small ghost" onclick="listenAssistant()">Listen</button>
        </div>
        <div id="speakingOutput" class="chat" style="margin-top:12px">
          <div class="bubble">Select a language and topic to start speaking practice.</div>
        </div>
      </div>
    </section>
  `;

  renderAnnouncementList('announcementList', 'all');
  const langFilter = document.getElementById('courseLanguageFilter');
  if (langFilter) {
    langFilter.value = courseFilter;
    langFilter.onchange = () => renderTrainee();
  }
  document.getElementById('dashboardLang').value = getCurrentLanguage();
}

function renderTrainer() {
  const u = current();
  if (!u) return;
  const p = progress();
  const courseList = trainerCourses();
  const traineeUsers = users().filter((user) => user.role === 'trainee');
  document.getElementById('roleBadge').textContent = 'Trainer';
  document.getElementById('dash').innerHTML = `
    <div class="dash-head">
      <div>
        <p class="eyebrow">TRAINER WORKSPACE</p>
        <h1>Trainer <span>Studio</span></h1>
        <p class="muted" style="text-align:left">Publish courses, prepare notes, assign real-time work and monitor trainee progression.</p>
      </div>
      <button class="btn" onclick="conference()">🎥 Create conference room</button>
    </div>

    <div class="statgrid">
      <div class="glass stat"><strong>${courseList.length}</strong>Published courses</div>
      <div class="glass stat"><strong>${traineeUsers.length}</strong>Trainees</div>
      <div class="glass stat"><strong>${Object.values(p).reduce((total, item) => total + Object.keys(item || {}).length, 0)}</strong>Enrollments</div>
      <div class="glass stat"><strong>${Object.values(p).reduce((total, item) => total + Object.values(item || {}).filter((meta) => meta.project).length, 0)}</strong>Projects</div>
    </div>

    <section class="glass section">
      <h3>Publish a course</h3>
      <form onsubmit="publishCourse(event)">
        <div class="section-grid">
          <input id="tcTitle" class="field" placeholder="Course title" required>
          <input id="tcCategory" class="field" placeholder="Category" value="Web">
          <input id="tcDifficulty" class="field" placeholder="Difficulty" value="Intermediate">
          <input id="tcDuration" class="field" placeholder="Duration" value="4 Weeks">
          <input id="tcLanguage" class="field" placeholder="Language" value="${getCurrentLanguage()}">
          <input id="tcImage" class="field" placeholder="Thumbnail URL" value="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80">
          <textarea id="tcDesc" class="field" placeholder="Course description" required></textarea>
        </div>
        <button class="btn" type="submit">Publish</button>
      </form>
    </section>

    <section class="glass section">
      <h3>Announcements</h3>
      <div class="section-grid">
        <input id="announcementTitle" class="field" placeholder="Announcement title">
        <select id="announcementAudience" class="field">
          <option value="all">All learners</option>
          <option value="trainee">Students</option>
          <option value="trainer">Trainers</option>
        </select>
        <select id="announcementLanguage" class="field">
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
          <option value="hi">हिन्दी</option>
          <option value="ta">தமிழ்</option>
          <option value="kn">ಕನ್ನಡ</option>
          <option value="ml">മലയാളം</option>
          <option value="mr">मराठी</option>
          <option value="bn">বাংলா</option>
        </select>
        <textarea id="announcementDesc" class="field" placeholder="Announcement description"></textarea>
      </div>
      <button class="btn" onclick="addAnnouncement()">Add announcement</button>
      <div id="announcementList" class="announcement-list"></div>
    </section>

    <section class="glass section">
      <h3>Trainee progression</h3>
      <table class="table">
        <tr><th>Trainee</th><th>Course</th><th>Modules</th><th>Project</th><th>Certificate</th></tr>
        ${Object.keys(p).map((email) => {
          const learner = users().find((user) => user.email === email);
          return Object.entries(p[email] || {}).map(([courseId, meta]) => `
            <tr>
              <td>${learner ? learner.name : email}</td>
              <td>${getCourses().find((course) => course.id === Number(courseId))?.title || courseId}</td>
              <td>${meta.modules || 0}/5</td>
              <td>${meta.project ? 'Yes' : 'No'}</td>
              <td>${meta.certificate ? 'Yes' : 'No'}</td>
            </tr>
          `).join('');
        }).join('')}
      </table>
    </section>
  `;

  renderAnnouncementList('announcementList', 'all');
  const announceLang = document.getElementById('announcementLanguage');
  if (announceLang) announceLang.value = getCurrentLanguage();
}

function renderAdmin() {
  const usersList = users();
  const p = progress();
  const trainers = usersList.filter((user) => user.role === 'trainer');
  const trainees = usersList.filter((user) => user.role === 'trainee');
  document.getElementById('roleBadge').textContent = 'Admin';
  document.getElementById('dash').innerHTML = `
    <div class="dash-head">
      <div>
        <p class="eyebrow">ADMIN CONSOLE</p>
        <h1>Platform <span>Dashboard</span></h1>
        <p class="muted" style="text-align:left">Manage users, courses, announcements, certificates and language settings.</p>
      </div>
      <button class="btn" onclick="conference()">🎥 Open conference</button>
    </div>

    <div class="statgrid">
      <div class="glass stat"><strong>${usersList.length}</strong>Total users</div>
      <div class="glass stat"><strong>${trainees.length}</strong>Trainees</div>
      <div class="glass stat"><strong>${trainers.length}</strong>Trainers</div>
      <div class="glass stat"><strong>${getCourses().length + trainerCourses().length}</strong>Courses</div>
    </div>

    <section class="glass section">
      <h3>Admin controls</h3>
      <div class="section-grid">
        <article class="card"><b>👥 User management</b><p>Review users and platform access.</p><button class="btn small" onclick="userReport()">View users</button></article>
        <article class="card"><b>📚 Content moderation</b><p>Review course content, announcements and projects.</p></article>
        <article class="card"><b>🏆 Certificates</b><p>Monitor completion and platform certifications.</p></article>
        <article class="card"><b>📊 Platform analytics</b><p>Track growth, course completion and engagement.</p></article>
        <article class="card"><b>🌐 Language settings</b><p>Manage supported languages and locale switching.</p></article>
        <article class="card"><b>⚙️ Platform settings</b><p>Branding, security, AI configuration and workflow tools.</p></article>
      </div>
    </section>

    <section class="glass section">
      <h3>Recent user activity</h3>
      <table class="table">
        <tr><th>User</th><th>Role</th><th>Enrollments</th><th>Certificate</th></tr>
        ${usersList.map((user) => `
          <tr>
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>${Object.keys(p[user.email] || {}).length}</td>
            <td>${Object.values(p[user.email] || {}).some((meta) => meta.certificate) ? 'Yes' : 'No'}</td>
          </tr>
        `).join('')}
      </table>
    </section>
  `;
}

function userReport() {
  alert(users().map((x) => `${x.name} — ${x.email} — ${x.role}`).join('\n'));
}

function openProfile() {
  const u = current();
  if (!u) return;
  document.getElementById('profileName').value = u.name || '';
  document.getElementById('profileEmail').value = u.email || '';
  document.getElementById('profileBio').value = u.bio || '';
  document.getElementById('profileLocation').value = u.location || '';
  document.getElementById('profilePhone').value = u.phone || '';
  document.getElementById('profileWebsite').value = u.website || '';
  const preview = document.getElementById('profilePreview');
  preview.src = u.photo || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 120%22%3E%3Crect width=%22120%22 height=%22120%22 fill=%22%233b4b73%22/%3E%3Ctext x=%2260%22 y=%2270%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22white%22%3E%3F%3C/text%3E%3C/svg%3E';
  preview.dataset.photo = u.photo || '';
  document.getElementById('profileModal').classList.remove('hidden');
}

function closeProfile() { document.getElementById('profileModal')?.classList.add('hidden'); }

function previewProfilePhoto(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    alert('Please choose an image smaller than 2 MB.');
    event.target.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const preview = document.getElementById('profilePreview');
    preview.src = reader.result;
    preview.dataset.photo = reader.result;
  };
  reader.readAsDataURL(file);
}

async function saveProfile(event) {
  event.preventDefault();
  const existing = current();
  const user = { ...existing, name: document.getElementById('profileName').value.trim(), bio: document.getElementById('profileBio').value.trim(), location: document.getElementById('profileLocation').value.trim(), phone: document.getElementById('profilePhone').value.trim(), website: document.getElementById('profileWebsite').value.trim(), photo: document.getElementById('profilePreview').dataset.photo || '' };
  const updated = users().map((item) => item.email === user.email ? { ...item, ...user } : item);
  saveUsers(updated);
  setCurrent(user);
  closeProfile();
  toast('Profile updated');
}

function openSettings() {
  const panel = document.getElementById('settingsModal');
  const content = document.getElementById('settingsContent');
  if (!panel || !content) return;
  const settings = userSettings();
  content.innerHTML = `
    <div class="toggle-row"><div><strong>AI assistant</strong><p class="muted">Use the learning assistant and chat support.</p></div><label class="switch"><input type="checkbox" ${settings.ai !== false ? 'checked' : ''} data-key="ai"><span class="slider"></span></label></div>
    <div class="toggle-row"><div><strong>Live conference</strong><p class="muted">Open Jitsi rooms and virtual sessions.</p></div><label class="switch"><input type="checkbox" ${settings.live !== false ? 'checked' : ''} data-key="live"><span class="slider"></span></label></div>
    <div class="toggle-row"><div><strong>Certificates</strong><p class="muted">Download project completion certificates.</p></div><label class="switch"><input type="checkbox" ${settings.certificates !== false ? 'checked' : ''} data-key="certificates"><span class="slider"></span></label></div>
    <div class="toggle-row"><div><strong>Notifications</strong><p class="muted">Get course and assignment updates.</p></div><label class="switch"><input type="checkbox" ${settings.notifications !== false ? 'checked' : ''} data-key="notifications"><span class="slider"></span></label></div>
    <div class="toggle-row"><div><strong>Progress reminders</strong><p class="muted">Show reminders to continue learning.</p></div><label class="switch"><input type="checkbox" ${settings.reminders !== false ? 'checked' : ''} data-key="reminders"><span class="slider"></span></label></div>
    <button class="btn" onclick="closeSettings();toast('Settings saved');">Save settings</button>
  `;
  panel.classList.remove('hidden');
  panel.querySelectorAll('input[data-key]').forEach((input) => {
    input.addEventListener('change', () => {
      const next = userSettings();
      next[input.dataset.key] = input.checked;
      saveUserSettings(next);
      const u = current();
      if (u && u.role === 'admin') renderAdmin();
      else if (u && u.role === 'trainer') renderTrainer();
      else if (u) renderTrainee();
    });
  });
}

function closeSettings() { document.getElementById('settingsModal')?.classList.add('hidden'); }

function conference() {
  const settings = userSettings();
  if (settings.live === false) {
    toast('Live conference is disabled in Settings.');
    return;
  }
  const room = 'capacity-connect-' + Math.random().toString(36).slice(2, 10);
  window.open('https://meet.jit.si/' + room, '_blank');
  toast('Live conference room opened');
}

function initLanguageControls() {
  const selector = document.getElementById('langSelector');
  if (selector) {
    selector.value = getCurrentLanguage();
    selector.addEventListener('change', (event) => setCurrentLanguage(event.target.value));
  }
  const dashboardLang = document.getElementById('dashboardLang');
  if (dashboardLang) {
    dashboardLang.value = getCurrentLanguage();
    dashboardLang.addEventListener('change', (event) => setCurrentLanguage(event.target.value));
  }
}

function routeDashboard() {
  const u = current();
  if (!document.getElementById('dash')) return;
  if (!u) {
    location.href = 'login.html';
    return;
  }
  if (u.role === 'admin') renderAdmin();
  else if (u.role === 'trainer') renderTrainer();
  else renderTrainee();
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageControls();
  applyTranslations();
  if (document.getElementById('coursePreview')) {
    renderHomeCourses();
  }
  if (document.getElementById('dash')) routeDashboard();
  if (document.getElementById('authForm')) document.getElementById('authForm').addEventListener('submit', authSubmit);
  if (document.getElementById('loginNav')) document.getElementById('loginNav').addEventListener('click', () => showAuth('login'));
  if (document.getElementById('loginForm')) {
    const form = document.getElementById('loginForm');
    form.onsubmit = (e) => submitLogin(e);
  }
  if (localStorage.getItem('openRegister')) {
    localStorage.removeItem('openRegister');
    setTimeout(() => showAuth('register'), 100);
  }
});

if (typeof window !== 'undefined') {
  window.showAuth = showAuth;
  window.hideAuth = hideAuth;
  window.logout = logout;
  window.submitLogin = submitLogin;
  window.continueWithGoogle = continueWithGoogle;
  window.conference = conference;
  window.openProfile = openProfile;
  window.closeProfile = closeProfile;
  window.previewProfilePhoto = previewProfilePhoto;
  window.saveProfile = saveProfile;
  window.openSettings = openSettings;
  window.closeSettings = closeSettings;
  window.enrollCourse = enrollCourse;
  window.completeModule = completeModule;
  window.generateCertificate = generateCertificate;
  window.askAI = askAI;
  window.startSpeakingPractice = startSpeakingPractice;
  window.listenAssistant = listenAssistant;
  window.publishCourse = publishCourse;
  window.createAssignment = createAssignment;
  window.submitExam = submitExam;
  window.addAnnouncement = addAnnouncement;
  window.setCurrentLanguage = setCurrentLanguage;
  window.renderTrainee = renderTrainee;
  window.renderTrainer = renderTrainer;
  window.renderAdmin = renderAdmin;
}
