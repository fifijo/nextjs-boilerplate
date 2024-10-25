# Turborepo - NextJs - Tailwind CSS boilerplate

This is a [Next.js](https://nextjs.org/) boilerplate based on [Turborepo](https://turbo.build//) build system with [Tailwind CSS](https://tailwindcss.com/).

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

## Installation

To get started, clone the repository and run the following commands:

```bash
pnpm install
```

Make sure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.js.org/) installed.

## Usage/Examples

Once installed, you can start developing with:

```bash
pnpm run dev
```

You can then access your applications on `http://localhost:3000`.

## What's inside?

Boilerplate includes the following packages/apps:

### Apps and Packages

- `app`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `app` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Building packages/ui

Run commands with Turborepo:
- `pnpm build`: Build all apps and packages
- `pnpm dev`: Develop all apps and packages
  `pnpm dev:app`: Develop all apps and packages
- `pnpm lint`: Lint all apps and packages
- `pnpm format`: Format all apps and packages
- `pnpm type-check`: Check types in all apps and packages
- `pnpm clean`: Clean Turborepo
- `pnpm test`: Run tests
- `pnpm test:watch`: Run tests in watch mode

Run commands with Docker:
 - `pnpm docker:dev:app`: Start the development environment for app application
 - `pnpm docker:build:app`: Build app application
 - `pnpm docker:prod:app`: Deploy app application to production

### Utilities

Additional tools already setup:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Release Process and Changelog

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
   - Build and push Docker images for the app and docs

4. Review the auto-generated release notes on GitHub and make any necessary edits.

5. Publish the release on GitHub.

This automated process ensures that our changelog is always up-to-date and reflects all the changes made in each release. It reduces manual work and helps maintain consistency in our release notes.

Remember to write clear and descriptive PR titles and use appropriate labels, as these will directly contribute to the quality of our release notes.

## Contributing

We welcome contributions from the community! Please follow these steps if you would like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request describing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.