# Apple Product Lab interactive 3D

An extensible Apple product catalog built with React, Three.js, Vinext, and the
Cloudflare runtime. The product selector separates iPhone, iPad, Apple Watch,
Mac, AirPods, and Apple Vision into independent catalog boundaries.

The iPhone catalog includes iPhone 18 Pro, iPhone Duo, and the complete iPhone
17, iPhone 16, iPhone 15, and iPhone 14 families. The iPad catalog includes the
13-inch iPad Pro M5, 13-inch iPad Air M4, iPad A16, and iPad mini A17 Pro. The Apple Watch catalog includes
every verified public-AR generation from Series 3 through Series 11, the original
Ultra through Ultra 3, and the first- and third-generation SE. The AirPods catalog
includes AirPods 3 through AirPods 5, both AirPods 4 configurations, both AirPods 5
charging-case configurations, all three AirPods Pro generations, and both AirPods
Max generations. Their browser-ready models are converted from Apple's public AR
assets; no older mesh is relabeled when Apple has not published an asset. The Mac catalog includes
the 13- and 15-inch MacBook Air M5, 14-inch MacBook Pro M5, iMac M4, Mac mini M6, Mac Studio M5, and the
final Mac Pro with M2 Ultra. Apple Vision exposes its planned series and can
receive dedicated model, finish, copy, and AR modules without coupling it to
the existing catalogs.

Apple introduced Series 12 and Ultra 4 in September 2026, but their current
product pages do not publish downloadable USDZ assets. The catalog therefore
uses Series 11, Ultra 3, and SE 3: the latest model in each Apple Watch branch
for which Apple has published a public AR source, rather than relabeling an
older mesh as a newer device.

Apple's public CDN still serves verified AR assets for Apple Watch Series 10, 9,
8, 7, 6, 5, and 3, but no verified first-party USDZ was found for Series 4, 2,
or 1. Those three generations remain intentionally absent. The same verification
found first-party scenes for the requested historical AirPods products. AirPods 5
with Wireless Charging Case and AirPods 4 with Active Noise Cancellation reuse
the identical Apple-published geometry where their official USDZ is byte-for-byte
the same as the current AirPods 5 scene.

Apple no longer lists Mac Pro in its current Mac lineup and `/mac-pro/` now
redirects to the Mac overview. The catalog preserves Apple's last Mac Pro,
the 2023 M2 Ultra model, using the USDZ that its former product page published.

The control dock follows the hierarchy `Product → Series → Model → Finish`.

## Requirements

- Node.js 22.13 or newer

## Development

```sh
npm run install:ci
npm run dev
```

The local preview starts at `http://localhost:5173`.

## Validation

```sh
npm run lint
npm run build
```

## Docker Compose

The container stack builds the Vinext/Cloudflare runtime as an internal `app`
service and exposes it through Nginx. Nginx handles compression, security headers,
long-lived caching for fingerprinted Next.js assets, shorter caching for 3D models,
and a lightweight health endpoint.

```sh
cp .env.example .env
docker compose up --build -d
```

Open `http://localhost:8080`. To use another host port, change `PORT` in `.env`
or run `PORT=3000 docker compose up --build -d` in a POSIX shell.

Useful operational commands:

```sh
docker compose ps
docker compose logs -f app nginx
docker compose down
```

The `app` service is intentionally not published to the host. Its writable
Wrangler runtime directories are isolated in named volumes, while both containers otherwise use
read-only filesystems and drop privilege escalation. The public health endpoint is
available at `http://localhost:8080/healthz`.

## Cloudflare

Cloudflare deployment support is intentionally retained through:

- `@cloudflare/vite-plugin`
- `wrangler`
- the bundled Sites Vite integration
- `.openai/hosting.json`

After building, preview the generated Cloudflare Worker locally with:

```sh
npm start
```

The project does not use a database, object storage, authentication, or migrations.

## 3D assets

Browser-ready product models are stored in `public/models`. Conversion details and
the original Apple AR source URLs are documented in `public/models/README.md`.
