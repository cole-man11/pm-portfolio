@echo off
echo === Deploying Portfolio to GitHub Pages ===
echo.

echo Step 1: Pushing code to GitHub...
git push -u origin main
if errorlevel 1 (
    echo ERROR: Failed to push. Make sure you've created the repository at https://github.com/cole-lance/pm-portfolio
    echo If the repository doesn't exist, create it at: https://github.com/new
    pause
    exit /b 1
)

echo.
echo Step 2: Building and deploying to GitHub Pages...
call npm run deploy
if errorlevel 1 (
    echo ERROR: Deployment failed.
    pause
    exit /b 1
)

echo.
echo === Deployment Complete! ===
echo.
echo Your site will be available at:
echo https://cole-lance.github.io/pm-portfolio/
echo.
echo Don't forget to enable GitHub Pages:
echo 1. Go to: https://github.com/cole-lance/pm-portfolio/settings/pages
echo 2. Select 'gh-pages' branch as source
echo 3. Select '/ (root)' folder
echo 4. Click Save
echo.
pause
