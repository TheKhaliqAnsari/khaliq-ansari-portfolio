# 🚀 Khaliq Ansari - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing professional projects, skills, and experience. Features a beautiful hero section, interactive project carousel, and responsive design optimized for all devices.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.10-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎯 **Interactive Project Showcase**
- **Custom Carousel**: Smooth sliding animations with manual navigation
- **Category Filtering**: Filter projects by technology (React, Full Stack, HTML/CSS/JS)
- **Responsive Design**: Adapts seamlessly from desktop to mobile
- **Touch Gestures**: Swipe navigation on mobile devices

### 🎨 **Modern UI/UX**
- **Hero Section**: Personal introduction with animated statistics
- **Skills Display**: Visual representation of technical skills
- **Smooth Animations**: CSS transitions and keyframe animations
- **Custom Cursor**: Interactive cursor effects for enhanced experience

### 📱 **Mobile-First Responsiveness**
- **Breakpoint Optimization**: Tailored layouts for 1100px+, 768px+, and 480px+
- **Touch-Friendly**: Optimized touch targets and gesture support
- **Performance**: Optimized animations and transitions

## 🛠️ Technologies Used

### **Frontend Framework**
- **React 18.2.0** - Modern React with hooks and functional components
- **Vite 5.0.10** - Fast build tool and development server

### **Styling & UI**
- **CSS3** - Custom styling with modern features
- **Responsive Design** - Mobile-first approach with media queries
- **CSS Animations** - Smooth transitions and keyframe animations

### **Icons & Graphics**
- **FontAwesome 6.4.0** - Professional icon library
- **React Icons 4.10.1** - Additional icon sets

### **HTTP & APIs**
- **Axios 1.6.3** - HTTP client for API calls
- **LeetCode Stats API** - Integration for coding statistics

### **Development Tools**
- **ESLint** - Code quality and consistency
- **React Testing Library** - Component testing utilities

## 🚀 Getting Started

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheKhaliqAnsari/khaliq-ansari-portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### **Build for Production**

```bash
npm run build
```

### **Preview Production Build**

```bash
npm run serve
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── images/            # Project thumbnails and icons
│   └── index.html         # HTML template
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx       # Hero section with stats
│   │   ├── Navbar.jsx     # Navigation header
│   │   ├── Skills.jsx     # Skills showcase
│   │   ├── Projects.jsx   # Project carousel
│   │   ├── SingleProject.jsx # Individual project card
│   │   ├── Footer.jsx     # Footer section
│   │   └── Cursor.jsx     # Custom cursor effects
│   ├── utils/
│   │   └── constants.js   # Project data and skills
│   ├── App.jsx            # Main application component
│   └── index.jsx          # Application entry point
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🎨 Key Components

### **Hero Section (`Hero.jsx`)**
- Personal introduction and statistics
- Integration with LeetCode API for coding stats
- Responsive layout with animated elements

### **Project Carousel (`Projects.jsx`)**
- Custom carousel implementation (no external libraries)
- Category filtering system
- Touch gesture support for mobile
- Smooth slide transitions with CSS animations

### **Skills Display (`Skills.jsx`)**
- Visual representation of technical skills
- Responsive grid layout
- Icon-based skill presentation

## 🔧 Customization

### **Adding New Projects**
Edit `src/utils/constants.js` to add new projects:

```javascript
{
  name: "Project Name",
  date: "Month Year",
  category: "category",
  thumbnail: "image.png",
  desc: "Project description",
  skills: ["Skill1", "Skill2"],
  demo: "https://demo-link.com",
  github: "https://github.com/username/repo"
}
```

### **Modifying Skills**
Update the skills array in `src/utils/constants.js`:

```javascript
{
  name: "Skill Name",
  image: "skill-icon.png"
}
```

### **Styling Changes**
- **Colors**: Modify CSS variables in component files
- **Layouts**: Adjust breakpoints in CSS media queries
- **Animations**: Customize transition durations and easing functions

## 📱 Responsive Breakpoints

- **Desktop**: ≥1024px (3 projects visible)
- **Tablet**: ≥768px (2 projects visible)
- **Mobile**: <768px (1 project visible)
- **Small Mobile**: ≤480px (optimized spacing)

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### **Netlify**
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### **GitHub Pages**
1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy script and deploy

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## 📊 Performance Features

- **Lazy Loading**: Images and components load efficiently
- **Optimized Animations**: CSS-based animations for smooth performance
- **Responsive Images**: Optimized image sizes for different devices
- **Minimal Dependencies**: Lightweight bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Khaliq Ansari**
- GitHub: [@thekhaliqansari](https://github.com/thekhaliqansari)
- Portfolio: [Live Demo](https://www.khaliqansari.live/)

## 🙏 Acknowledgments

- **LeetCode Stats API** for coding statistics
- **FontAwesome** for beautiful icons
- **React Community** for excellent documentation and tools

---

⭐ **Star this repository if you found it helpful!**

🔗 **Connect with me on [LinkedIn](https://linkedin.com/in/your-profile) or [Twitter](https://twitter.com/your-handle)**
