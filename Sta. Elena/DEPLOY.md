# Deploy Sta. Elena SPTMS to Vercel

This project is a **static site** (HTML, CSS, JavaScript). No build step is required.

## Option A — Vercel website (recommended)

### 1. Put the project on GitHub

1. Install [Git](https://git-scm.com/download/win) if needed.
2. Create a new repository on [GitHub](https://github.com/new) (e.g. `sta-elena-sptms`).
3. In PowerShell, from this folder:

```powershell
cd "c:\Users\ASUS TUF F15\.cursor\Sta. Elena"
git init
git add .
git commit -m "Initial commit: Sta. Elena School Performance Tracking System"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sta-elena-sptms.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub account works well).
2. Click **Add New…** → **Project**.
3. **Import** your GitHub repository.
4. Vercel should detect settings automatically:
   - **Framework Preset:** Other
   - **Root Directory:** `./` (leave default)
   - **Build Command:** leave empty
   - **Output Directory:** leave empty or `.`
5. Click **Deploy**.

Your site will be live at a URL like `https://sta-elena-sptms.vercel.app`.

### 3. Set the entry page

- Home: `index.html` redirects to `login.html`.
- Or open `https://your-project.vercel.app/login` directly.

---

## Option B — Vercel CLI (no GitHub)

1. Install [Node.js](https://nodejs.org/) if needed.
2. In PowerShell:

```powershell
cd "c:\Users\ASUS TUF F15\.cursor\Sta. Elena"
npx vercel login
npx vercel
```

Follow the prompts (link this folder, confirm settings). For production:

```powershell
npx vercel --prod
```

---

## After deployment

| Item | Note |
|------|------|
| **Login data** | Demo login only; data in **localStorage** stays in each user’s browser (not shared between devices). |
| **Admin posts** | Announcements/events saved in **localStorage** per browser. |
| **Custom domain** | Vercel project → **Settings** → **Domains** → add your school domain. |
| **Updates** | Push to GitHub (Option A) or run `npx vercel --prod` again (Option B). |

---

## Project structure (must stay at site root)

```
Sta. Elena/
├── index.html          ← entry redirect
├── login.html
├── dashboard.html
├── assets/             ← images (logo, campus photo)
├── css/
├── js/
└── vercel.json
```

Do not change folder paths unless you update links in HTML/JS.

---

## Troubleshooting

- **404 on pages:** Use links without `.html` if `cleanUrls` is on (e.g. `/login`, `/dashboard`), or use `login.html` / `dashboard.html`.
- **Images missing:** Ensure the `assets/` folder was committed and deployed.
- **Blank page:** Open browser DevTools (F12) → Console for script errors.
