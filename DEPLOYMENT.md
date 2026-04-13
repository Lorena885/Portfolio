# Deployment Instructions for Lorena's Portfolio

## Folder Structure

```
portfolio/
├── index.html                 # Main portfolio page
├── styles.css                # All styling
├── script.js                 # All JavaScript functionality
├── assets/                   # (Optional) images, icons, etc.
└── dashboards/               # Interactive dashboard files
    ├── customer-age/
    │   └── index.html
    ├── taxi-demand/
    │   └── index.html
    ├── oil-well/
    │   └── index.html
    ├── telecom-churn/
    │   └── index.html
    ├── video-game-sales/
    │   └── index.html
    └── beta-bank/
        └── index.html
```

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner → **New repository**
3. Name your repository (e.g., `portfolio` or `lorena-portfolio`)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. In your new repository, click **uploading an existing file**
2. Drag and drop all your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - The entire `dashboards` folder
   - The `assets` folder (if you have one)
3. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to your portfolio folder
cd path/to/portfolio

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** (the gear icon)
2. Scroll down to **GitHub Pages** section
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** and **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example: `https://lorenacarvajal.github.io/portfolio/`

## Adding Dashboard Files

The portfolio is configured to load dashboards from the `dashboards/` folder using iframes. 

### For Each Project Dashboard:

1. Create your dashboard (can be HTML, Python/Streamlit deployed elsewhere, etc.)
2. Save it as `index.html` inside the project's folder
3. Place it in the corresponding location:
   - `dashboards/customer-age/index.html`
   - `dashboards/taxi-demand/index.html`
   - `dashboards/oil-well/index.html`
   - `dashboards/telecom-churn/index.html`
   - `dashboards/video-game-sales/index.html`
   - `dashboards/beta-bank/index.html`

### Dashboard Options

**Option 1: Static HTML Dashboard**
Create a standalone HTML file with embedded CSS and JavaScript. This is the simplest approach and works directly with GitHub Pages.

**Option 2: Python Dash/Plotly/Streamlit**
Deploy your Python dashboard separately (using Render, Heroku, or Streamlit Cloud) and update the `dashboardPath` in `script.js` to point to your deployed URL.

**Option 3: Power BI Embedded**
Export your Power BI report as a publish to web embed and use the iframe URL.

## Customization

### Update Personal Information

Edit these files to customize:

**index.html**
- Update links in About section (LinkedIn, GitHub)
- Update contact section links

**script.js**
- Update the `projects` array with your own projects
- Update LinkedIn/GitHub URLs
- Customize project data, tools, results, etc.

### Update Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #0f172a;      /* Main background */
    --color-secondary: #1e293b;    /* Secondary background */
    --color-accent: #14b8a6;        /* Accent color (teal) */
    --color-accent-light: #5eead4;  /* Light accent */
    --color-text: #e2e8f0;          /* Main text */
    --color-text-muted: #94a3b8;    /* Muted text */
}
```

### Add Images

1. Create an `assets` folder
2. Add your images
3. Update `index.html` to reference them

Example:
```html
<img src="assets/profile-photo.jpg" alt="Lorena Carvajal">
```

### Update Contact Information

In `script.js`, find the `contact` section of the HTML template and update:
- Email address
- LinkedIn URL
- GitHub URL

## Troubleshooting

### Dashboard iframes not loading

1. Make sure the dashboard file is at the correct path
2. Check that the file is named `index.html`
3. Verify the path in `script.js` matches the actual file location
4. For local testing, some browsers block iframe content - use a local server

### Run Locally

To test locally before deploying:

```bash
# Using Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

Or use VS Code's Live Server extension.

## Technical Notes

- All code is vanilla HTML, CSS, and JavaScript
- No build step required
- Works directly on GitHub Pages
- Responsive design for mobile/tablet/desktop
- Accessible with keyboard navigation and ARIA labels
- Animations respect `prefers-reduced-motion`
