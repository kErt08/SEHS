# Sta. Elena School Performance Tracking Management System (SPTMS)

A role-based school portal for academic monitoring and school information management.

## Quick start

1. Open `login.html` in your browser (or `index.html` which redirects to login).
2. Select a **role**, enter any School ID/email, and a password (4+ characters).
3. Explore the dashboard and role-specific modules.

## User roles

| Role | Access |
|------|--------|
| **Administrator / Principal** | All shared modules + system overview & management (demo) |
| **Teacher** | Shared modules + grade entry (demo) |
| **Student** | Shared modules + full student portal |

## Modules

### Shared (all roles)
- **Documents & Manuals** — policies, handbooks, forms
- **Announcements** — school updates
- **School Events** — activities and schedules
- **Upcoming Events** — upcoming activities

### Student portal
- **My Grades** — by grade level and quarter; pending until quarter ends; failed subjects highlighted
- **Subject Flow** — completed, current, and future curriculum subjects
- **Academic Calendar** — dates and deadlines
- **Grade Monitoring Tool** — customizable tracker (saved in browser localStorage)
- **Profile** — student information
- **Certificate of Registration (COR)** — printable registration

## Project structure

```
Sta. Elena/
├── index.html          → redirects to login
├── login.html          → secure role-based login
├── dashboard.html      → main application
├── css/main.css        → styles
├── js/
│   ├── data.js         → demo school data
│   ├── auth.js         → session handling
│   └── app.js          → dashboard & student portal logic
└── README.md
```

## Demo credentials

Any username and password (minimum 4 characters). The **role** you select determines which portal you see.

## Deploy to Vercel

See **[DEPLOY.md](DEPLOY.md)** for step-by-step instructions (GitHub + Vercel, or Vercel CLI).

Quick summary: push this folder to GitHub → import on [vercel.com](https://vercel.com) → deploy with no build command.

## Next steps (production)

- Connect **Supabase** (or another backend) for real auth and database
- Replace demo data in `js/data.js` with API calls
- Add file storage for Documents & Manuals
- Implement teacher grade submission and admin quarter-close workflows
