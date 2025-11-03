# LetsGrowPro - Next.js Application

A modern, fully responsive landing page built with Next.js 15, TypeScript, and Tailwind CSS, optimized for Vercel deployment.

## ✨ Features

- **Next.js 15 App Router** - Latest Next.js features with server components
- **TypeScript** - Full type safety across the application
- **Tailwind CSS** - Modern, responsive styling
- **Framer Motion** - Smooth animations and transitions
- **Static Data** - No database required, perfect for Vercel
- **Fully Responsive** - Works beautifully on all devices
- **SEO Optimized** - Built-in Next.js SEO features

## 🚀 Pages

- **Home** (`/`) - Landing page with hero, features, services, testimonials
- **Case Studies** (`/case-studies`) - Portfolio of success stories
- **FAQ** (`/faq`) - Frequently asked questions with search
- **Contact** (`/contact`) - Contact form with validation

## 📡 API Routes

All API routes return static data:

- `/api/partnerlogos` - Partner logos
- `/api/services` - Services offered
- `/api/casestudies` - Case studies
- `/api/testimonials` - Client testimonials
- `/api/frequentlyaskedquestions` - FAQs

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Deployment:** Vercel (optimized)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
nextjs-app/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── case-studies/      # Case studies page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # UI components (Button, Input, etc.)
├── data/                 # Static data
│   └── staticData.ts     # All static content
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions
├── types/                # TypeScript types
│   └── index.ts          # Type definitions
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies

```

## 🎨 Customization

### Update Content

Edit `/data/staticData.ts` to update:
- Partner logos
- Services
- Case studies
- Testimonials
- FAQs

### Update Styling

- Modify Tailwind config in `tailwind.config.ts`
- Update global styles in `app/globals.css`
- Customize colors in CSS variables

### Add Pages

Create new pages in the `app/` directory:

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page</div>
}
```

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will auto-detect Next.js and deploy

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

No environment variables required! Everything runs with static data.

## 🔧 Configuration

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}
```

### Build Settings (Vercel)

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

## 📊 Performance

This application is optimized for performance:

- Static generation where possible
- Image optimization via Next.js Image
- Code splitting automatic with App Router
- Tailwind CSS for minimal CSS bundle size

## 🤝 Support

For support or questions:
- Email: letsgrowprowithus@gmail.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js and Vercel
