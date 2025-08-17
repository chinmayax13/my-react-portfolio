# 🚀 Modern React Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.

![Portfolio Preview](preview.gif)

## 🌐 Live Demo

**🔗 [View Live Portfolio](https://my-react-portfolio-rose.vercel.app/)**

### 📱 Try It Out

- 🖥️ **Desktop Experience** - Full interactive experience with smooth animations
- 📱 **Mobile Experience** - Responsive design optimized for all screen sizes
- 🌓 **Dark Mode Toggle** - Switch between light and dark themes
- 🎭 **Smooth Navigation** - GSAP-powered page transitions
- 📧 **Contact Integration** - Direct links to social media and email

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with gradient accents
- 📱 **Fully Responsive** - Works perfectly on all devices and screen sizes
- 🌓 **Dark Mode** - Toggle between light and dark themes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - GSAP-powered animations for engaging user experience
- 📧 **Contact Integration** - Direct email and social media links
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🛠️ Built With

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.3.6
- **Animations:** GSAP 3.12.5
- **Routing:** React Router DOM 6.21.1
- **Icons:** Custom SVG icons
- **Fonts:** Google Fonts integration

## 🏗️ Project Structure

```
src/
├── Components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Project.jsx     # Project card component
│   └── Work.jsx        # Work experience component
├── Pages/              # Main page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About me page
│   ├── Technologies.jsx # Tech stack showcase
│   ├── Projects.jsx    # Projects gallery
│   └── Contact.jsx     # Contact information
├── assets/             # Static assets
│   ├── projects/       # Project screenshots
│   ├── techstack/      # Technology icons
│   └── ui/            # UI icons and images
├── App.js             # Main app component
├── Details.jsx        # Personal information and data
└── index.css          # Global styles
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/chinmayax13/my-react-portfolio.git
   cd my-react-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📝 Customization

### Personal Information

Edit `src/Details.jsx` to customize your personal information:

```javascript
export const personalDetails = {
  name: "Your Name",
  tagline: "Your Professional Tagline",
  img: profile, // Your profile image
  about: `Your professional summary...`,
};
```

### Social Media Links

Update your social media URLs:

```javascript
export const socialMediaUrl = {
  linkdein: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  instagram: "https://instagram.com/your-handle",
};
```

### Technology Stack

Customize your tech stack in the `techStackDetails` array:

```javascript
export const techStackDetails = [
  {
    img: html,
    name: "HTML",
  },
  // Add more technologies...
];
```

### Projects

Add your projects to the `projectDetails` array:

```javascript
export const projectDetails = [
  {
    title: "Project Name",
    image: projectImage1,
    description: "Project description...",
    techstack: "React, Node.js, MongoDB",
    previewLink: "https://your-project-demo.com",
    githubLink: "https://github.com/your-username/project-repo",
  },
  // Add more projects...
];
```

## 🎨 Styling

The project uses Tailwind CSS for styling. Key features include:

- **Responsive Design:** Mobile-first approach with breakpoints
- **Dark Mode:** Automatic theme switching based on system preference
- **Custom Colors:** Defined in `tailwind.config.js`
- **Animations:** GSAP integration for smooth transitions

## 📱 Pages Overview

- **Home** - Hero section with introduction and call-to-action buttons
- **About** - Personal story, stats, and professional journey
- **Technologies** - Interactive showcase of technical skills
- **Projects** - Portfolio of completed projects with live demos
- **Contact** - Contact information and social media links

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

### Vercel (Recommended for React Projects)

**Quick Deploy:**

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will auto-detect Vite settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click "Deploy" - Your site will be live in minutes!

**Manual Deploy:**

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Build and deploy:

   ```bash
   npm run build
   vercel --prod
   ```

3. Your portfolio will be available at: `https://your-project-name.vercel.app`

### Netlify

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

3. Configure redirects by ensuring `public/_redirects` contains:
   ```
   /*    /index.html   200
   ```

### GitHub Pages

1. Install gh-pages:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:

   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Heroicons and custom SVG designs
- Images optimized for web performance
- Built with love and React ⚛️

## 📞 Contact

**Chinmaya Subudhi**

- LinkedIn: [chinmaya-subudhi-0ab3222b4](https://linkedin.com/in/chinmaya-subudhi-0ab3222b4)
- GitHub: [chinmayax13](https://github.com/chinmayax13)
- Email: Contact me through the portfolio contact page

---

⭐ Star this repository if you found it helpful!
