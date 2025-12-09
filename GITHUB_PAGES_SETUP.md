# GitHub Pages Setup Guide

## 🔧 Troubleshooting 404 Error

If you're seeing a 404 error on GitHub Pages, follow these steps:

### 1. Check GitHub Pages Settings

1. Go to your repository: `https://github.com/mohamed-wageh/planet-Ai`
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, make sure it's set to **"GitHub Actions"** (NOT "Deploy from a branch")
5. Save if you made changes

### 2. Check Workflow Status

1. Go to **Actions** tab in your repository
2. Check if the workflow "Deploy to GitHub Pages" has run
3. If it failed, click on it to see the error
4. If it hasn't run, you can trigger it manually:
   - Go to Actions tab
   - Click "Deploy to GitHub Pages" workflow
   - Click "Run workflow" button

### 3. Correct URL

Make sure you're accessing the correct URL:

**Your site should be available at:**
```
https://mohamed-wageh.github.io/planet-Ai/
```

**Important:** 
- Note the capital `A` in `planet-Ai`
- The URL is case-sensitive
- Make sure to include the trailing slash `/`

### 4. Wait for Deployment

After pushing changes:
- Wait 2-5 minutes for GitHub Actions to build and deploy
- Check the Actions tab to see deployment progress
- The site will only be available after successful deployment

### 5. Clear Browser Cache

If the site was working before:
- Clear your browser cache
- Try incognito/private mode
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### 6. Verify Build Output

The workflow should create files in the `out` directory. If you see errors in Actions:
- Check that `npm run build` completes successfully
- Verify that `out` directory is created
- Ensure `.nojekyll` file is in the `out` directory

## ✅ Quick Fix Checklist

- [ ] GitHub Pages Source is set to "GitHub Actions"
- [ ] Workflow has run successfully (check Actions tab)
- [ ] Using correct URL: `https://mohamed-wageh.github.io/planet-Ai/`
- [ ] Waited 2-5 minutes after push
- [ ] Cleared browser cache

## 🚀 Manual Deployment Trigger

If automatic deployment isn't working:

1. Go to **Actions** tab
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** dropdown
4. Select branch: **main**
5. Click **"Run workflow"** button

## 📝 Common Issues

### Issue: "Workflow not found"
- Make sure `.github/workflows/deploy.yml` exists
- Check that it's committed to the repository

### Issue: "Build failed"
- Check Actions tab for error details
- Common causes: missing dependencies, build errors

### Issue: "404 on all pages"
- Verify basePath matches repository name exactly
- Check that `trailingSlash: true` is set in next.config.js
- Ensure `.nojekyll` file is in the out directory

### Issue: "Assets not loading"
- Check that `assetPrefix` matches `basePath`
- Verify all paths use relative URLs

## 🔗 Useful Links

- Repository: https://github.com/mohamed-wageh/planet-Ai
- Actions: https://github.com/mohamed-wageh/planet-Ai/actions
- Pages Settings: https://github.com/mohamed-wageh/planet-Ai/settings/pages

