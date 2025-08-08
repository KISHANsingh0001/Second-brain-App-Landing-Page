# Second Brain - Landing Page

A modern, responsive landing page for the Second Brain application - your personal knowledge hub for organizing, storing, and sharing digital content.

![Second Brain Logo](public/android-chrome-512x512.png)

## 🧠 About Second Brain

Second Brain is a personal knowledge management application that helps you:
- **Organize** your YouTube videos, tweets, and links
- **Store** thoughts, ideas, and information securely
- **Share** content through a powerful dashboard
- **Access** your knowledge from anywhere, anytime

## ✨ Features

### Landing Page Features
- **Modern Design** - Clean, elegant UI with dark theme
- **Responsive Layout** - Optimized for all devices
- **PWA Support** - Installable as a Progressive Web App
- **SEO Optimized** - Complete meta tags and structured data
- **Fast Performance** - Built with Next.js 15 and optimized fonts

### Visual Components
- 🎨 **Animated Hero Section** - Eye-catching geometric shapes and animations
- 📱 **Interactive Navigation** - Mobile-responsive with smooth transitions
- 🌟 **Feature Showcase** - Highlighting key application benefits
- 💫 **Elegant Footer** - Social links and comprehensive information
- ⚡ **Glow Effects** - Modern UI animations and hover states

## 🚀 Live Demo

- **Production**: [https://brain.secondbrain.sbs](https://brain.secondbrain.sbs)
- **Staging**: [https://second-brain-lp.pages.dev](https://second-brain-lp.pages.dev)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Custom SVG components
- **UI Components**: Ant Design
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel & Cloudflare Pages

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/your-username/second-brain-landing-page.git

# Navigate to project directory
cd second-brain-landing-page

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page component
│   └── globals.css         # Global styles
├── components/
│   └── ui/
│       ├── AboutUs.tsx     # About section component
│       ├── animated-beam.tsx # Animated beam effects
│       ├── cta.tsx         # Call-to-action marquee
│       ├── features.tsx    # Features showcase
│       ├── footer.tsx      # Footer component
│       ├── navBar.tsx      # Navigation header
│       └── shape-landing-hero.tsx # Hero section
├── icons/
│   └── Logo.tsx            # Custom logo component
├── lib/
│   └── utils.ts            # Utility functions
└── config.ts               # App configuration

public/
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
└── *.png, *.ico           # Favicon and app icons
```

## 🔧 Configuration

### Environment Variables
```bash
# Add to .env.local
NEXT_PUBLIC_SIGNIN_URL=https://your-app.vercel.app/signin
NEXT_PUBLIC_SIGNUP_URL=https://your-app.vercel.app/signup
```

### PWA Configuration
The app includes a complete PWA setup:
- **Manifest**: [`public/manifest.json`](public/manifest.json)
- **Service Worker**: [`public/sw.js`](public/sw.js)
- **Icons**: Multiple sizes for all platforms

### SEO Configuration
- **Structured Data**: JSON-LD schema for better search visibility
- **Meta Tags**: Complete OpenGraph and Twitter Card support
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine optimization

## 🎨 Customization

### Colors & Theme
The app uses a dark theme with customizable colors in `globals.css`:
```css
:root {
  --background: #030303;
  --foreground: #ffffff;
  /* Add your custom colors */
}
```

### Components
All UI components are modular and can be easily customized:
- **Hero Section**: Modify text and animations in `shape-landing-hero.tsx`
- **Navigation**: Update links in `navBar.tsx`
- **Footer**: Add/remove sections in `footer.tsx`

## 📱 PWA Features

### Installation
Users can install the app on:
- **Desktop**: Chrome, Edge, Safari
- **Mobile**: iOS Safari, Android Chrome
- **Progressive**: Works offline after first visit

### Capabilities
- 📱 Add to home screen
- 🔄 Background sync
- 💾 Offline functionality
- 🔔 Push notifications (ready)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npm run build
vercel --prod
```

### Cloudflare Pages
```bash
# Build for production
npm run build
# Deploy to Cloudflare Pages
```

### Manual Deployment
```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimized with Next.js optimization
- **Loading Speed**: < 2s First Contentful Paint

## 🔗 Links

- **Main Application**: [Second Brain App](https://second-brain-app-theta.vercel.app)
- **Documentation**: [Coming Soon]
- **API Documentation**: [Coming Soon]

## 👨‍💻 Developer

**Kishan Singh Thakur**
- 🌐 LinkedIn: [kishan-singh-thakur](https://www.linkedin.com/in/kishan-singh-thakur-26b912255/)
- 🐙 GitHub: [KISHANsingh0001](https://github.com/KISHANsingh0001)
- 🐦 Twitter: [@KishanS36200218](https://twitter.com/KishanS36200218)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues & Support

If you encounter any issues or have questions:
1. Check existing [Issues](https://github.com/your-username/second-brain-landing-page/issues)
2. Create a new issue with detailed description
3. Contact: [hello@secondbrain.com](mailto:hello@secondbrain.com)

## 🎯 Roadmap

- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced animations
- [ ] Blog integration
- [ ] User testimonials section
- [ ] Analytics integration

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">
  <p>Built with ❤️ by Kishan Singh Thakur</p>
  <p>© 2025 Second Brain. All Rights Reserved.</p>
</div>