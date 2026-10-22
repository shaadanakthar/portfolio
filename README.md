# Shaadan Akthar — AI/ML Developer Portfolio

A modern, high-performance personal portfolio website for **Shaadan Akthar**, an Artificial Intelligence engineering student specializing in AI/ML, computer vision, generative AI, and full-stack software development.

Designed with a sleek, near-black charcoal aesthetic, subtle electric-blue and violet accents, interactive neural canvas visualizations, and strictly verified factual academic data.

---

## 🚀 Live Demo & Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom High-DPI SVGs
- **Typography**: Inter & JetBrains Mono (Google Fonts)
- **Visuals**: Dynamic Neural Network HTML5 Canvas with Synaptic Pulse Animation & Reduced-Motion Support

---

## 📁 Project Structure

```text
shaadan-portfolio/
├── public/
│   └── favicon.svg               # Custom AI neural mark favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky blurred navigation with scroll spy & mobile menu
│   │   ├── Hero.jsx              # Hero section with dual CTA and status indicators
│   │   ├── HeroCanvas.jsx        # Interactive neural constellation network visual
│   │   ├── About.jsx             # Resume-verified statement & profile snapshot matrix
│   │   ├── Skills.jsx            # Categorized technical competencies (no arbitrary %)
│   │   ├── Projects.jsx          # Featured projects grid with status badges
│   │   ├── ProjectCardVisual.jsx # Schematic UI & architecture mockups per domain
│   │   ├── ProjectModal.jsx      # Modal with specs, problem, approach, and scope bounds
│   │   ├── Education.jsx         # AJIET Mangaluru B.E. Artificial Intelligence timeline
│   │   ├── Interests.jsx         # 6 Core technical exploration domain cards
│   │   ├── Contact.jsx           # Transparent contact form with direct mailto fallback
│   │   ├── Footer.jsx            # Wordmark, copyright, quick links & back-to-top
│   │   └── SocialIcons.jsx       # Crisp SVG vector icons for GitHub and LinkedIn
│   ├── data/
│   │   └── portfolioData.js      # SINGLE SOURCE OF TRUTH for all content & links
│   ├── App.jsx                   # Root application layout
│   ├── index.css                 # Tailwind directives, custom scrollbars, glass utilities
│   └── main.jsx                  # Application entry point
├── index.html                    # SEO tags, OpenGraph, theme colors, Google Fonts
├── tailwind.config.js            # Custom color palette, fonts, shadows, and animations
├── postcss.config.js             # PostCSS Tailwind & Autoprefixer configuration
├── vite.config.js                # Vite build configuration
└── package.json                  # Dependencies & build scripts
```

---

## 🛠️ Quick Start & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or later (Node v22+ recommended)
- **npm**: v9.0.0 or later

### Installation

1. Navigate to the project directory:
   ```bash
   cd shaadan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The optimized production bundle will be output to the `dist/` directory.

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ✏️ How to Customize Your Links & Content

All personal details, social links, and project repositories are centralized in one single configuration file:
👉 **`src/data/portfolioData.js`**

### 1. Update Your GitHub Profile Link
In `src/data/portfolioData.js`, update the `github` field under `personal`:
```javascript
personal: {
  name: "Shaadan Akthar",
  // ...
  github: "https://github.com/your-actual-github-username",
  isGithubPlaceholder: false, // Set to false once verified!
}
```

### 2. Update Project Links & Status
Under `projects`, update the `githubUrl` and `liveUrl` whenever a repository or deployment goes live:
```javascript
{
  id: "gadgethub",
  title: "GadgetHub",
  // ...
  githubUrl: "https://github.com/your-username/gadgethub", // Add your repo URL
  liveUrl: "https://gadgethub-demo.vercel.app",             // Add your live demo URL
}
```
If a link is set to `null`, the card and modal will automatically display an honest placeholder indicator so there are **never broken or dead links**.

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `shaadan-portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Your portfolio will be live with free global CDN and SSL in under 1 minute.

### Deploying to Netlify

1. Sign in to [Netlify](https://netlify.com) and select **"Add new site" > "Import an existing project"**.
2. Connect your Git provider and select the portfolio repository.
3. Set the following build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

---

## ✅ Pre-Publishing Checklist

Before making your portfolio public, review this checklist:
- [ ] **GitHub Profile URL**: Replace the placeholder URL in `src/data/portfolioData.js`.
- [ ] **Email Verification**: Confirm `shaadanakthar@gmail.com` is active and receives inquiries.
- [ ] **LinkedIn URL**: Verify `https://linkedin.com/in/shaadan-akthar` routes to your profile.
- [ ] **Project Repositories**: As you push `GadgetHub`, `AI Attendance System`, `Code Mentor AI`, or `Student Performance Prediction` to GitHub, paste their links in `projects` array.
- [ ] **Custom Domain (Optional)**: If you purchase a domain like `shaadanakthar.dev`, configure DNS records on Vercel/Netlify.

---

## 🛡️ Factual Accuracy Standards

In accordance with strict portfolio ethics:
- **No invented work experience or fake job titles**: Clearly presented as a 3rd-year engineering student.
- **No fabricated metrics or model accuracies**: Projects are labeled with genuine statuses (*Prototype*, *Proposed System*, *Concept / Work in Progress*).
- **No fake form submissions**: Form utilizes the standard, reliable `mailto:` protocol without silently swallowing messages.

---

## 📄 License & Credits

© 2026 Shaadan Akthar. All rights reserved.  
*“Designed with curiosity. Built with code.”*
