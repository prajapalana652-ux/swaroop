# CAPACITY CONNECT

A functional glassmorphism learning portal for Trainees, Trainers, and Admins.

## Included
- Separate Trainee, Trainer, and Admin dashboards.
- Registration and login with email/password.
- 100 software-focused courses with related YouTube lesson embeds.
- Trainee enrollment, module progress tracking, real-time problem statements, and printable certificates.
- Trainer course publishing and assignment workflows.
- Admin dashboard with user and course activity monitoring.
- AI assistant toggle and live conference feature gating in Settings.
- Profile, settings, and logout controls.

## Run
### Frontend
Open the project root in a browser, or serve the folder with any static file server.

### Backend
```bash
npm install
npm start
```

The Express API runs on port 5000 by default and requires Supabase environment variables in `.env`.

Check the active database connection at `http://localhost:5000/api/health`. The response reports `database: "supabase"` when Supabase is reachable.

## Supabase setup
Create a `.env` file based on `.env.example` and set:

```bash
PORT=5000
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Run [supabase-schema.sql](supabase-schema.sql) in the Supabase SQL editor. It creates the `profiles` and `user_settings` tables used by the API. Authentication accounts are created in Supabase Auth; passwords are not stored in `profiles`.

## Production note
Supabase Auth handles passwords; add secure session validation, authorization checks, HTTPS, rate limiting, and a properly configured AI/meeting provider before public deployment.
