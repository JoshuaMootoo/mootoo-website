# Mootoo Portfolio

> A personal portfolio website built with Next.js 13 and TypeScript, showcasing my CV, game projects, and professional profile.

## 🚀 Live Demo

[https://mootoo-website.vercel.app](https://mootoo-website.vercel.app) _(deployed via Vercel)_

## 📦 Features

- **Home Page** (`/`) — Intro and navigation  
- **CV Page** (`/cv`) — Full résumé displayed + PDF download  
- **Projects Page** (`/projects`) — Gallery of game projects with download links  
- **Terms of Use** (`/terms-of-use`) — Legal pages (unlinked in nav)  
- **App Router** — Next.js 13’s new file‑based routing  
- **TypeScript** — Type safety and autocompletion  
- **Static Assets** — PDFs and game downloads served from `public/`  

## 🛠 Tech Stack

- [Next.js 13](https://nextjs.org/) (App Router)  
- [TypeScript](https://www.typescriptlang.org/)  
- CSS Modules (or Tailwind CSS, if you add it later)  
- Git & GitHub for version control  
- Vercel for zero‑config deployment  

## 📥 Getting Started

### Prerequisites

- Node.js ≥ 18.x  
- npm (or Yarn / pnpm)  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/JoshuaMootoo/mootoo-website.git
   cd mootoo-website
   ```

2. Install dependencies  
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run development server  
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
.
├── app
│   ├── layout.tsx       # Site-wide layout (header, footer)
│   ├── page.tsx         # Homepage
│   ├── cv
│   │   └── page.tsx     # CV display + download
│   ├── projects
│   │   └── page.tsx     # Projects list + downloads
│   └── terms-of-use
│       └── page.tsx     # Terms of Use (not in nav)
├── public
│   ├── cv.pdf           # Your CV PDF
│   └── downloads/       # Game ZIPs, assets, etc.
├── styles               # Global & module CSS (optional)
├── next.config.ts       # Next.js config
└── package.json
```

## ⚙️ Deployment

This site is set up for automatic deployment on Vercel:

1. Push your code to GitHub.  
2. Go to [Vercel](https://vercel.com/) → **New Project** → import your `mootoo-website` repo.  
3. Vercel detects Next.js and will handle builds on each push.

## 🤝 Contributing

Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss.

## 📄 License

This project is licensed under the [MIT License](LICENSE).  

---

**Joshua Mootoo**  
– BSc Computer Games Programming, Kingston University (Class of 2024)  
– Email: joshuamoo2+work@gmail.com  
– Website: [mootoo.uk](https://www.mootoo.uk)  
– GitHub: [JoshuaMootoo](https://github.com/JoshuaMootoo)
