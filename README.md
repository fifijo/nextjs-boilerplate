# Turborepo - NextJs - Tailwind CSS boilerplate

This is a [Next.js](https://nextjs.org/) boilerplate based on [Turborepo](https://turbo.build//) build system with [Tailwind CSS](https://tailwindcss.com/).

## What's inside?

Boilerplate includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
- `@repo/database`: Prisma ORM wrapper to manage & access your database
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Building packages/ui

Run commands with Turborepo:
- `pnpm run build`: Build all apps and packages
- `pnpm run dev`: Develop all apps and packages
- `pnpm run lint`: Lint all apps and packages
- `pnpm run format`: Format all apps and packages
- `pnpm run type-check`: Check types in all apps and packages
- `pnpm run clean`: Clean Turborepo

### Utilities

Additional tools already setup:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
