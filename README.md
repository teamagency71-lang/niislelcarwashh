# Niislel Car Wash

Static car wash management website.

## Project files

- `index.html` – main page
- `styles.css` – site styling
- `app.js` – browser app logic
- `assets/` – images and logos
- `render.yaml` – Render Static Site blueprint

## Run locally

Open `index.html` directly in a browser, or run a small local server:

```bash
python -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/
```

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial Niislel Car Wash site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Deploy to Render

Option A: Blueprint

1. Push this folder to GitHub.
2. In Render, create a new Blueprint from the GitHub repository.
3. Render will read `render.yaml` and deploy this as a Static Site.

Option B: Manual Static Site

1. Render Dashboard → New → Static Site.
2. Connect the GitHub repository.
3. Use these settings:
   - Build Command: leave empty
   - Publish Directory: `.`
4. Create Static Site.

## Important note

This is a static browser app. Account data, approvals, queue, archive, payroll, and settings are saved in the browser's `localStorage`.

If the site must share the same data across many computers/phones, add a backend database later.
