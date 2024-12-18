# src Dockerfile: https://github.com/vercel/turbo/blob/main/examples/with-docker/apps/web/Dockerfile
FROM node:20.18-alpine AS alpine

# setup pnpm on the alpine base
FROM alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk add --no-cache libc6-compat && apk update && corepack enable && pnpm install turbo --global
# Set working directory
WORKDIR /app

FROM base AS builder
RUN pnpm install turbo --global
COPY . .
RUN turbo prune --scope=app --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN turbo prisma:generate
RUN turbo run build --filter=app

# use alpine as the thinest image
FROM alpine AS runner

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/app/next.config.mjs .
COPY --from=installer /app/apps/app/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/app/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/app/.next/static ./apps/app/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/app/public ./apps/app/public

CMD HOSTNAME=0.0.0.0 node apps/app/server.js