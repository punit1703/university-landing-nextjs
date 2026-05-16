# 🎓 NexaVarsity — Modern University Landing Page

A premium, SaaS-inspired university landing page built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**. NexaVarsity reimagines the traditional academic website with dynamic glassmorphism, fluid micro-animations, and a highly responsive, modern design system.

![NexaVarsity Preview](./public/images/1.%20Hero%20Section%20Image.png)

## ✨ Features

- **Modern Aesthetic**: Clean typography, gradient accents, and a dynamic color palette.
- **Fluid Animations**: Staggered reveals, floating blobs, and smooth scroll interactions powered by Framer Motion.
- **Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices with a custom mobile drawer.
- **Glassmorphism UI**: Premium frosted-glass effects and subtle drop shadows on dark and light backgrounds.
- **Modular Components**: Highly reusable `CustomButton`, `SectionTitle`, and layout sections.
- **Image Optimization**: Pre-configured Next.js `<Image>` component with whitelisted domains.

## 🛠️ Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & Poppins (via `next/font`)

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/punit1703/university-landing-nextjs.git
cd university-landing-nextjs
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📂 Project Structure

```text
├── app/
│   ├── globals.css      # Tailwind v4 @theme configuration & custom CSS
│   ├── layout.tsx       # Root layout, fonts, and metadata
│   └── page.tsx         # Main landing page assembly
├── components/          # Reusable UI components (Navbar, Footer, Buttons)
├── lib/                 # Utility functions and static data arrays
├── public/images/       # Static image assets
└── sections/            # Individual landing page sections (Hero, About, Programs, etc.)
```

## 🌐 Deployment

This project is fully optimized and ready to be deployed on **Vercel**. 
Simply push your code to GitHub and import the repository into your Vercel dashboard. No extra configuration is required!

---

*Designed and developed to set a new standard for educational interfaces.*
