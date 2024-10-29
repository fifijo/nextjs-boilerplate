# Common Commands
build:
	pnpm run build

lint:
	pnpm run lint

type-check:
	pnpm run type-check

clean:
	pnpm run clean

format:
	prettier --write "**/*.{ts,tsx,md}"

test:
	pnpm run test

test:watch:
	pnpm run test:watch

# Project-specific Commands
dev:
	pnpm run dev

dev:app:
	pnpm run dev:app

prisma:init:
	pnpm run prisma:generate && pnpm run prisma:push && pnpm run prisma:seed

# Docker Development Commands
docker:dev:down:
	cross-env PROJECT=app docker-compose -f ./docker/dev/docker-compose.yml down

docker:dev:stop:
	cross-env PROJECT=app docker-compose -f ./docker/dev/docker-compose.yml stop

docker:dev:app:build:
	cross-env PROJECT=app docker-compose -f ./docker/dev/docker-compose.yml build --no-cache

docker:dev:app:up:
	cross-env PROJECT=app docker-compose -f ./docker/dev/docker-compose.yml up -d

# Docker Production Commands
docker:prod:down:
	docker-compose -f ./docker/prod/docker-compose.yml down

docker:prod:stop:
	docker-compose -f ./docker/prod/docker-compose.yml stop

docker:prod:app:build:
	cross-env docker-compose -f ./docker/prod/docker-compose.yml build --no-cache prod-app

docker:prod:app:up:
	docker-compose -f ./docker/prod/docker-compose.yml up -d prod-app
