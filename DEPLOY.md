# GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `pm-portfolio`
3. Description: "Product Manager Portfolio Website"
4. Choose: Public (required for free GitHub Pages)
5. DO NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, run these commands (assuming your GitHub username is `cole-lance` - update if different):

```bash
git remote add origin https://github.com/cole-lance/pm-portfolio.git
git push -u origin main
```

**OR** use the automated PowerShell script:
```powershell
.\deploy.ps1
```

## Step 3: Deploy to GitHub Pages

Once the repository is pushed, run:

```bash
npm run deploy
```

This will:
- Build your site for production
- Deploy it to the `gh-pages` branch

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/pm-portfolio`
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select: `gh-pages` branch
5. Select folder: `/ (root)`
6. Click "Save"

## Step 5: Access Your Site

Your site will be available at:
- `https://YOUR_USERNAME.github.io/pm-portfolio/`

Note: It may take a few minutes for the site to be available after deployment.

## Updating Your Site

Whenever you make changes:
1. Make your changes
2. Commit: `git add . && git commit -m "Your commit message"`
3. Push: `git push`
4. Deploy: `npm run deploy`

## Troubleshooting

- If the site shows 404, make sure GitHub Pages is enabled and set to `gh-pages` branch
- If assets don't load, verify the base path in `vite.config.js` matches your repository name
- The site uses HashRouter, so URLs will have `#` (e.g., `/#/me` instead of `/me`)
