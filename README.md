# Vinh Le — Portfolio

Personal portfolio for **Vinh Le**, an Embedded Systems & IoT Engineering student at HCMUT.

The site keeps the interactive 3D structure from the original portfolio template, but the content has been rewritten around embedded systems, firmware, digital design, and student engineering projects.

## Local development

```bash
npm install
npm run dev
```

The dev server runs on port **3000**.

## Production build

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

This repo already includes a GitHub Actions workflow in:

```txt
.github/workflows/deploy.yml
```

For a project page such as:

```txt
https://VinhTechiee.github.io/portfolio/
```

keep this in `vite.config.ts`:

```ts
base: "/portfolio/",
```

For a root user page such as:

```txt
https://VinhTechiee.github.io/
```

change it to:

```ts
base: "/",
```

## Content map

```txt
src/content/social.ts
src/content/projects/index.ts
src/content/projects/en/
src/content/projects/vi/
src/content/projects/previews/
src/i18n/messages/namespaces/common/
src/features/home/components/
```

## Current project set

- Wiener Filter — MIPS Assembly
- 3D Memory Architecture — Verilog / FPGA
- Traveling Salesman Problem — Benchmark & Visualization
- Sorting Algorithms — Visualization & Benchmarking
- Botkify Playlist — Linked List System

## Attribution

This codebase was adapted from the uploaded portfolio source.

The original design/source attribution from the provided project has been preserved. If you continue using substantial parts of the original source code, keep visible attribution in the README and/or footer as required by the original license.
