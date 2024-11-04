## Turborepo (Docker + Prisma + Postgres + NextJS + Tailwind + Typescript) monorepo starter

This is a [Next.js](https://nextjs.org/) boilerplate based on [Turborepo](https://turbo.build//) build system with [Tailwind CSS](https://tailwindcss.com/), dockerized ✨🐳, with Prisma for ORM, TypeScript and more!

## 🚀 What's inside?

- `app`: [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/)
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/prisma`: Prisma schema and client for database interactions

Additional tools already setup:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


## 🤖 Installation

To get started, clone the repository. Make sure you have [Node.js](https://nodejs.org/), [pnpm](https://pnpm.js.org/) and Docker installed.

## 🤸 Quick Start

### Development

Copy [.env.example] and rename it to `.env` then add your environment variables.

1. Build the image.

```bash
   docker-compose --profile dev build
```

2. Run the container and initialize prisma

```bash
   docker-compose --profile dev up -d && pnpm run prisma:init:development
```

You can then access your applications on `http://localhost:3000`.


### Makefile

Usage

You can simply run make <command> in your terminal. For example, to build your project, you would run:

`make dev-build`

`make dev-init`

For more information on each command, you can refer to the comments in the Makefile

## 🔋 Release Process and Changelog

We use [Semantic Versioning](https://semver.org/) for version numbers. All notable changes to this project are automatically documented in the release notes.

### Automated Changelog

Our project uses release-drafter to automatically generate changelogs based on PR titles and labels. When creating a pull request, please ensure that the title clearly describes the change and that appropriate labels are applied. This will help in generating accurate and informative release notes.

### Creating a Release

1. Ensure all changes for the release are merged into the main branch.

2. Create a new tag with the version number:
   ```
   git tag vX.Y.Z
   git push origin vX.Y.Z
   ```

3. The GitHub Actions workflow will automatically:
   - Create a new GitHub release
   - Generate release notes based on merged pull requests
   - Build and push Docker images

4. Review the auto-generated release notes on GitHub and make any necessary edits.

5. Publish the release on GitHub.

This automated process ensures that our changelog is always up-to-date and reflects all the changes made in each release. It reduces manual work and helps maintain consistency in our release notes.

Remember to write clear and descriptive PR titles and use appropriate labels, as these will directly contribute to the quality of our release notes.

## 💥 Contributing

We welcome contributions from the community! Please follow these steps if you would like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request describing your changes.

## 🧰 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.