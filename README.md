# Product Manager Portfolio

A single-page application portfolio website for showcasing Product Manager experience, case studies, and skills.

## Tech Stack

- **React** - UI framework
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **react-markdown** - Markdown rendering for case studies
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pm-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Project Structure

```
pm-portfolio/
├── public/
│   └── case-studies/          # Markdown files for case studies
├── src/
│   ├── components/            # Reusable React components
│   │   ├── Layout.jsx
│   │   ├── Navigation.jsx
│   │   ├── SkillsTags.jsx
│   │   ├── Timeline.jsx
│   │   ├── CaseStudyCard.jsx
│   │   └── MarkdownRenderer.jsx
│   ├── pages/                 # Page components
│   │   ├── Me.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── CaseStudyDetail.jsx
│   │   └── Contact.jsx
│   ├── data/                  # Data files
│   │   ├── resume.js
│   │   └── caseStudies.js
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── package.json
├── vite.config.js             # Vite configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

## Customization

### Update Resume Data

Edit `src/data/resume.js` to update:
- Summary paragraph
- Skills list
- Work experience timeline

### Add Case Studies

1. Add a new markdown file in `public/case-studies/`
2. Update `src/data/caseStudies.js` with the new case study metadata

### Update Contact Information

Edit `src/pages/Contact.jsx` to update your LinkedIn profile URL.

### GitHub Pages Deployment

1. Update the `base` path in `vite.config.js` to match your repository name:
   ```js
   const repoName = process.env.REPO_NAME || 'your-repo-name';
   const base = process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/';
   ```
   
   Or set the `REPO_NAME` environment variable when building:
   ```bash
   REPO_NAME=your-repo-name npm run build
   ```

2. Build and deploy:
```bash
npm run deploy
```

3. In your GitHub repository settings:
   - Go to Settings > Pages
   - Select source: `gh-pages` branch
   - Select folder: `/ (root)`
   - Save

4. Your site will be available at: `https://yourusername.github.io/your-repo-name/`

**Note**: This project uses HashRouter for GitHub Pages compatibility. URLs will look like `/#/me` instead of `/me`. This is a requirement for static hosting without server-side configuration.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint

## Next Steps

1. Replace placeholder content in `src/data/resume.js` with your actual resume data
2. Add your actual case study markdown content to `public/case-studies/`
3. Update LinkedIn URL in `src/pages/Contact.jsx`
4. Customize colors and styling in `tailwind.config.js` if desired
5. Deploy to GitHub Pages

## License

This project is open source and available under the MIT License.
