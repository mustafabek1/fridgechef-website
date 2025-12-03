# FridgeChef Website

Modern, responsive website for FridgeChef - AI-Powered Recipe Generator app.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Dark Mode** - Automatic dark mode support

## 📦 Installation

```bash
npm install
```

## 🔧 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Create an optimized production build:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
fridgechef-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage (Landing)
│   ├── globals.css        # Global styles
│   ├── support/           # Support page
│   │   └── page.tsx
│   └── privacy/           # Privacy Policy page
│       └── page.tsx
├── components/            # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors

- **Primary**: `#FF6B35` (Orange) - Main brand color
- **Secondary**: `#4ECDC4` (Teal) - Accent color
- **Accent**: `#FFE66D` (Yellow) - Highlights
- **Success**: `#51CF66` (Green)
- **Warning**: `#FFA94D` (Orange)
- **Error**: `#FF6B6B` (Red)
- **Info**: `#74C0FC` (Blue)

### Theme

The website supports automatic dark mode based on system preferences with manual toggle.

## 📄 Pages

### Landing Page (/)
- Hero section with app introduction
- Features showcase
- How it works section
- Download buttons (App Store & Google Play)

### Support Page (/support)
- Contact information
- Frequently Asked Questions
- Platform support details
- Feature requests & Bug reports

### Privacy Policy (/privacy)
- Complete privacy policy
- Data collection and usage
- User rights
- GDPR compliance information

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
```

The `out` directory can be deployed to any static hosting service.

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔗 Links

- Main App Repository: [SmartFridgeApp](../SmartFridgeApp)
- Support: support@fridgechef.app
- Privacy: privacy@fridgechef.app

## 📝 License

© 2025 FridgeChef. All rights reserved.
