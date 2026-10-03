<div align="center">

# Apxle

### Explore the Apple product universe in an immersive, interactive 3D experience.

[![Build](https://img.shields.io/github/actions/workflow/status/thuongtruong109/apxle/publish.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white&label=build)](https://github.com/thuongtruong109/apxle/actions/workflows/publish.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=101010)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r186-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A5_22.13-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![GitHub stars](https://img.shields.io/github/stars/thuongtruong109/apxle?style=flat-square&logo=github&label=Stars)](https://github.com/thuongtruong109/apxle/stargazers)

<br />

<img src="./public/iphone-18-concept.png" alt="Apxle iPhone concept render" width="460" />

<br />

[Features](#-features) · [Quick start](#-quick-start) · [Architecture](#-architecture) · [Deployment](#-deployment) · [3D assets](#-3d-assets) · [Contributing](#-contributing)

</div>

Apxle is a browser-based product lab for exploring Apple hardware through
real-time 3D scenes, detailed technical storytelling, finishes, poses, and an
extensible product catalog. One shared application can be deployed through the
Cloudflare Workers toolchain or as a native Next.js application on Vercel.

> [!NOTE]
> Apxle is an independent showcase and research project. It is not affiliated
> with, endorsed by, or sponsored by Apple Inc. Concept products are presented
> as concepts, not as official announcements.

## ✨ Features

- **Interactive product scenes** — rotate, zoom, inspect, explode, collapse,
  and switch supported device poses directly in the browser.
- **Deep multi-product catalog** — iPhone, iPad, Apple Watch, AirPods, Mac, and
  Apple Vision live behind independent, maintainable catalog boundaries.
- **High-fidelity assets** — 59 browser-ready GLB scenes backed by documented
  public AR sources where available.
- **Localized experience** — English, Vietnamese, Portuguese, Spanish, Chinese,
  Japanese, French, German, and Korean.
- **Responsive control system** — navigate through
  `Product → Series → Model → Finish` on desktop and mobile.
- **Portable deployment** — dedicated pipelines for Cloudflare, Vercel, Docker,
  and Docker Compose without duplicating application code.
- **Production asset processing** — source-only USDZ pruning and GLB texture
  optimization are built into the Cloudflare production pipeline.

### Catalog at a glance

| Family           | Coverage in this repository                                            |
| ---------------- | ---------------------------------------------------------------------- |
| **iPhone**       | iPhone 14–18 families, iPhone Air, and the foldable iPhone Duo concept |
| **iPad**         | iPad Pro M5, iPad Air M4, iPad A16, and iPad mini A17 Pro              |
| **Apple Watch**  | Series 3 and 5–11, Ultra through Ultra 3, SE and SE 3                  |
| **AirPods**      | AirPods 3–5, AirPods Pro 1–3, and AirPods Max 1–2                      |
| **Mac**          | MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Mac Pro      |
| **Apple Vision** | An isolated Apple Vision catalog ready for continued expansion         |

## 🧰 Tech stack

| Layer              | Technology                                                 |
| ------------------ | ---------------------------------------------------------- |
| Application        | Next.js 16, React 19, TypeScript                           |
| 3D rendering       | Three.js, GLTFLoader                                       |
| UI                 | Tailwind CSS, Base UI, Radix UI, shadcn components, Lucide |
| Cloudflare runtime | Vinext, Vite, Cloudflare Vite plugin, Wrangler             |
| Vercel runtime     | Native Next.js build and runtime                           |
| Containers         | Docker, Docker Compose, Nginx                              |
| Automation         | GitHub Actions, GHCR, SBOM, provenance attestation         |

## 🧭 Quick start

### Requirements

- Node.js 22.13 or newer
- npm

### Install and run

```sh
git clone https://github.com/thuongtruong109/apxle.git
cd apxle
npm run install:ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The default scripts target
Cloudflare for backward compatibility.

### Choose a runtime

| Task             | Cloudflare / Vinext        | Vercel / Next.js       |
| ---------------- | -------------------------- | ---------------------- |
| Develop          | `npm run dev:cloudflare`   | `npm run dev:vercel`   |
| Build            | `npm run build:cloudflare` | `npm run build:vercel` |
| Serve production | `npm run start:cloudflare` | `npm run start:vercel` |
| Output           | `dist/`                    | `.next/`               |
| Local port       | `5173`                     | `3000`                 |

The short aliases `npm run dev`, `npm run build`, and `npm start` continue to
select the Cloudflare pipeline. Both targets write to separate output folders,
so switching runtimes does not overwrite the other build.

## 🏗 Architecture

```text
                         ┌─ Cloudflare / Vinext / Wrangler ─→ dist/
Shared Next.js source ───┤
                         └─ Vercel / native Next.js ───────→ .next/
```

```text
apxle/
├── app/                    # Next.js App Router entrypoints
├── components/
│   ├── iphone/             # Product domain, catalog, copy, i18n, and 3D scene
│   └── ui/                 # Reusable UI primitives
├── public/models/          # Browser-ready GLB and traceable USDZ assets
├── scripts/                # CI install and production asset processing
├── docker/nginx/           # Edge proxy and caching configuration
├── next.config.ts          # Native Next.js configuration
├── vite.config.ts          # Vinext and Cloudflare configuration
├── vercel.json             # Vercel runtime selection
├── Dockerfile
└── compose.yaml
```

Provider-specific integrations should stay behind small server-side adapters.
Shared components and catalog modules should not import Cloudflare bindings or
Vercel SDKs directly; this keeps both deployment targets portable.

## ✅ Validation

Run the same checks used during development and CI:

```sh
npm run lint
npx tsc --noEmit
npm run build:cloudflare
npm run build:vercel
```

## 🚀 Deployment

### Vercel

Import the repository as a Next.js project. [`vercel.json`](./vercel.json)
selects the native Next.js framework and runs `npm run build:vercel`, preventing
Vercel from invoking the Cloudflare-oriented default build.

```sh
npm run build:vercel
npm run start:vercel
```

> [!IMPORTANT]
> The model catalog is large. A direct Vercel CLI deployment may exceed the
> source-upload allowance of your plan. Prefer a connected Git deployment or
> move large production assets to object storage/CDN when operating at scale.

### Cloudflare

The Cloudflare target uses Vinext, the Cloudflare Vite plugin, Wrangler, and the
bundled Sites integration.

```sh
npm run build:cloudflare
npm run start:cloudflare
```

The local production Worker is served at
[http://localhost:8787](http://localhost:8787).

### Docker

Pull the image published by the
[`publish.yml`](./.github/workflows/publish.yml) workflow:

```sh
docker pull ghcr.io/thuongtruong109/apxle:latest
docker run --rm -p 8787:8787 ghcr.io/thuongtruong109/apxle:latest
```

Pushes to `main`, semantic version tags such as `v1.2.3`, and manual workflow
runs publish tagged images to GHCR. Published digests include an SBOM and a
GitHub artifact provenance attestation.

### Docker Compose

The Compose stack runs the application behind Nginx with compression, security
headers, tuned static-asset caching, a read-only runtime, and a health endpoint.

```sh
cp .env.example .env
docker compose up --build -d
```

Open [http://localhost:8080](http://localhost:8080). Set `PORT` in `.env` to
change the host port.

```sh
docker compose ps
docker compose logs -f app nginx
docker compose down
```

Health check: [http://localhost:8080/healthz](http://localhost:8080/healthz)

## 📦 3D assets

Browser-ready models live in [`public/models`](./public/models). Source URLs,
conversion notes, and per-model provenance are documented in
[`public/models/README.md`](./public/models/README.md).

<details>
<summary><strong>Asset provenance and catalog policy</strong></summary>

The catalog uses verified public Apple AR assets where they are available. It
does not relabel an older mesh as a newer generation when no matching first-party
asset can be verified.

- Apple Watch Series 4, 2, and 1 remain absent because no verified first-party
  USDZ source was found for those generations.
- Series 11, Ultra 3, and SE 3 are the newest Apple Watch branches currently
  represented by verified assets in this repository.
- AirPods configurations reuse geometry only when the Apple-published source is
  byte-for-byte identical.
- The catalog preserves the final Mac Pro with M2 Ultra and the public asset
  formerly distributed from its product page.
- Concept devices and artwork are identified as concepts and should not be read
  as claims about unreleased Apple products.

</details>

## 🤝 Contributing

Issues, focused pull requests, model-source corrections, translations, and
performance improvements are welcome.

1. Fork the repository and create a focused branch.
2. Keep product domains and provider-specific code separated.
3. Run the validation commands for every runtime your change affects.
4. Document the source and conversion process for new 3D assets.
5. Open a pull request with screenshots or recordings for visual changes.

[Open an issue](https://github.com/thuongtruong109/apxle/issues/new) ·
[View pull requests](https://github.com/thuongtruong109/apxle/pulls) ·
[Browse packages](https://github.com/thuongtruong109/apxle/pkgs/container/apxle)

## ⚖️ Trademark notice

Apple, iPhone, iPad, Apple Watch, AirPods, Mac, Apple Vision, and related marks
are trademarks of Apple Inc. All trademarks, product names, and source assets
belong to their respective owners. This repository is an independent technical
and educational project.

<div align="center">

Built for the web with React, Three.js, and a great deal of attention to detail.

⭐ Star the repository if Apxle inspires your next interactive experience.

</div>
