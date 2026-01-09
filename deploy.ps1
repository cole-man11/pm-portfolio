# GitHub Pages Deployment Script
# Run this after creating the GitHub repository

$githubUsername = "cole-lance"  # Update this if your GitHub username is different
$repoName = "pm-portfolio"

Write-Host "=== GitHub Pages Deployment Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $response = Read-Host "Do you want to update it? (y/n)"
    if ($response -eq "y" -or $response -eq "Y") {
        git remote set-url origin "https://github.com/$githubUsername/$repoName.git"
        Write-Host "Remote updated!" -ForegroundColor Green
    }
} else {
    Write-Host "Adding remote repository..." -ForegroundColor Cyan
    git remote add origin "https://github.com/$githubUsername/$repoName.git"
    Write-Host "Remote added!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Setting branch to 'main'..." -ForegroundColor Cyan
git branch -M main 2>$null

Write-Host ""
Write-Host "=== Next Steps ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create the repository on GitHub:" -ForegroundColor Yellow
Write-Host "   Go to: https://github.com/new" -ForegroundColor White
Write-Host "   Repository name: $repoName" -ForegroundColor White
Write-Host "   Make it PUBLIC (required for free GitHub Pages)" -ForegroundColor White
Write-Host "   DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
Write-Host ""
Write-Host "2. Once created, press any key to push your code..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Code pushed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Building and deploying to GitHub Pages..." -ForegroundColor Cyan
    npm run deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "=== Deployment Complete! ===" -ForegroundColor Green
        Write-Host ""
        Write-Host "Your site will be available at:" -ForegroundColor Cyan
        Write-Host "https://$githubUsername.github.io/$repoName/" -ForegroundColor White
        Write-Host ""
        Write-Host "Don't forget to:" -ForegroundColor Yellow
        Write-Host "1. Go to: https://github.com/$githubUsername/$repoName/settings/pages" -ForegroundColor White
        Write-Host "2. Select 'gh-pages' branch as the source" -ForegroundColor White
        Write-Host "3. Select '/ (root)' folder" -ForegroundColor White
        Write-Host "4. Click Save" -ForegroundColor White
        Write-Host ""
        Write-Host "Note: It may take a few minutes for your site to be live." -ForegroundColor Yellow
    } else {
        Write-Host "Deployment failed. Please check the error messages above." -ForegroundColor Red
    }
} else {
    Write-Host "Push failed. Make sure you've created the repository on GitHub first." -ForegroundColor Red
    Write-Host "If the repository doesn't exist yet, create it at: https://github.com/new" -ForegroundColor Yellow
}
