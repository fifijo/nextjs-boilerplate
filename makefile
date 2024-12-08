init:
	docker-compose --profile dev up -d && pnpm run prisma:init:development

dev-start:
	docker-compose --profile dev up -d

dev-stop:
	docker-compose --profile dev stop

dev-down:
	docker-compose --profile dev down

dev-build:
	docker-compose --profile dev build --no-cache

prod-build:
	pnpm clean && docker-compose --profile prod build --no-cache

prod-up:
	pnpm clean && docker-compose --profile prod up -d