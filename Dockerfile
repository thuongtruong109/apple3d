# syntax=docker/dockerfile:1.7

ARG NODE_IMAGE=node:22-bookworm-slim

FROM ${NODE_IMAGE} AS dependencies
WORKDIR /app

ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --include=dev --include=optional --no-audit --no-fund

FROM dependencies AS builder
WORKDIR /app

COPY . .
RUN npm run build

FROM dependencies AS production-dependencies
RUN npm prune --omit=dev --include=optional --no-audit --no-fund

FROM ${NODE_IMAGE} AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    CLOUDFLARE_CF_FETCH_ENABLED=false \
    WRANGLER_SEND_METRICS=false \
    WRANGLER_WRITE_LOGS=false

COPY --from=production-dependencies /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY scripts/sites-env.mjs ./scripts/sites-env.mjs

RUN mkdir -p .wrangler/state .sites-runtime dist/server/.wrangler && \
    chown -R node:node .wrangler .sites-runtime dist/server/.wrangler

USER node
EXPOSE 8787

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:8787/').then((response) => { if (!response.ok) process.exit(1); }).catch(() => process.exit(1));"]

CMD ["node", "--import", "./scripts/sites-env.mjs", "./node_modules/wrangler/bin/wrangler.js", "dev", "--config", "dist/server/wrangler.json", "--local", "--persist-to", ".wrangler/state", "--ip", "0.0.0.0", "--port", "8787", "--inspector-port", "0"]
