# CamboCare Concierge - Coming Soon Landing Page

A simple and elegant "Coming Soon" landing page for CamboCare Concierge built with Next.js, deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The page will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

The simplest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and select your repository
4. Vercel will auto-detect Next.js and configure build settings
5. Click "Deploy"

Your landing page will be live!

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful gradient background
- 📱 Mobile-friendly
- ⚡ Fast performance
- 🚀 Ready to deploy

## Project Structure

```
cambocc/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page (CamboCare Concierge)
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json          # Vercel configuration
```