create table if not exists public.profiles (
  email text primary key,
  name text not null,
  role text not null default 'trainee' check (role in ('trainee', 'trainer', 'admin')),
  bio text not null default '',
  location text not null default '',
  phone text not null default '',
  website text not null default '',
  photo text not null default '',
  created_at timestamptz not null default now()
);

alter table public.profiles add column if not exists bio text not null default '';
alter table public.profiles add column if not exists location text not null default '';
alter table public.profiles add column if not exists phone text not null default '';
alter table public.profiles add column if not exists website text not null default '';
alter table public.profiles add column if not exists photo text not null default '';

alter table public.profiles drop column if exists password;

create table if not exists public.user_settings (
  email text primary key references public.profiles(email) on delete cascade,
  settings jsonb not null default '{"ai": true, "live": true, "certificates": true, "notifications": true, "reminders": true}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.profiles disable row level security;
alter table public.user_settings disable row level security;
