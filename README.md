# 🚀 Surbhi Gulhana — Portfolio

Professional portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features
- Dark themed with electric teal + purple accents
- Scroll-triggered animations on all sections
- Animated skill progress bars
- Project filter (All / Featured)
- Fully responsive (mobile + desktop)
- Mobile hamburger menu
- SEO metadata via Next.js Metadata API

## 📁 Project Structure

```
surbhi-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + fonts + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Fixed responsive navbar
│   ├── Footer.tsx         # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx       # Hero with animated blob
│   │   ├── About.tsx      # About + contact info
│   │   ├── Skills.tsx     # Animated skill bars
│   │   ├── Experience.tsx # Timeline work history
│   │   ├── Projects.tsx   # Project grid with filter
│   │   └── Contact.tsx    # Contact CTA section
│   └── ui/
│       ├── SectionHeader.tsx  # Reusable section heading
│       ├── SkillBar.tsx       # Animated progress bar
│       └── ProjectCard.tsx    # Project card component
├── lib/
│   └── data.ts            # ⬅️  All resume data lives here
├── styles/
│   └── globals.css        # Global styles + animations
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## 🛠️ Getting Started

```bash
# 1. Navigate into project
cd surbhi-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update resume data
All content is centralized in **`lib/data.ts`** — just edit that file!

### Add your photo
In `components/sections/Hero.tsx`, replace the emoji `👩‍💻` with:
```tsx
import Image from "next/image";
<Image src="/images/profile.jpg" alt="Surbhi" width={280} height={280} className="rounded-full object-cover" />
```
Then place your photo at `public/images/profile.jpg`.

## 🚀 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect your repo at [vercel.com](https://vercel.com).
