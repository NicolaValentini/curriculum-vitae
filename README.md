# 🌐 Curriculum Vitae — Nicola Valentini

[![Vercel Deploy](https://vercelbadge.vercel.app/api/NicolaValentini/curriculum-vitae)](https://nicola-valentini.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/Written%20in-TypeScript-3178C6?logo=typescript)

---

My personal curriculum vitae built with **Next.js 15**, starting from my own template. It includes **Tailwind CSS**, **Motion animations**, and supports **multiple languages** (Italian and English)
It's a modern, optimized web app to showcase my profile, experience and technical skills.

🧾 **Repository**: [https://github.com/NicolaValentini/curriculum-vitae](https://github.com/NicolaValentini/curriculum-vitae)
🚀 **Live demo**: [https://nicola-valentini.vercel.app](https://nicola-valentini.vercel.app)

---

## 📄 Licenza

Distributed under the MIT License.
© 2025 — Nicola Valentini

---

## ⚙️ Stack Tecnologico

- [Next.js 15](https://nextjs.org/) — framework React full-stack
- [TypeScript](https://www.typescriptlang.org/) — type safe
- [TailwindCSS](https://tailwindcss.com/) — fast and responsive styling
- [Framer Motion](https://www.framer.com/motion/) — smooth animations
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) — automatic generation of `robots.txt` e `sitemap.xml`
- Deploy su [Vercel](https://vercel.com/)

---

## 🧑‍💻 Getting Started

### Clone repo

```bash
git clone https://github.com/NicolaValentini/curriculum-vitae.git
cd curriculum-vitae
```

### 🧼 Clean Start - Initial Project Cleanup

Before proceeding, it's important to remove any leftover dependencies, outdated builds, or corrupted installations.  
Run the following commands in the project root:

```bash
# Remove node_modules folder
rm -rf node_modules

# Remove lock files (depending on the package manager)
rm -f package-lock.json yarn.lock

# Remove the build directory (if present)
rm -rf .next
```

### 📦 Reinstall Updated Dependencies

Once the project is cleaned up, reinstall all dependencies using the updated versions.
Depending on your package manager:

```bash
npm install
# or
yarn install
```

### ▶️ Starting the Project

After installing the dependencies, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Scripts

| Script      | Description                  |
| ----------- | ---------------------------- |
| dev         | Run development server       |
| build       | Build for production         |
| start       | Run locally production build |
| lint        | Run linter with eslint       |
| format      | Format code with prettier    |
| check-types | Run typescript compiler      |
| prepare     | Initialize git hooks         |
| postbuild   | Generate sitemap and robots  |
