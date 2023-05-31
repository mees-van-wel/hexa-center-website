FROM node:18-alpine AS base

RUN npm i -g pnpm

FROM base AS deps

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --ignore-scripts

FROM base AS build

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN pnpm build
RUN pnpm prune --prod

FROM base AS deploy

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/server ./server
COPY --from=build /app/dist ./dist

EXPOSE 8080

CMD [ "node", "server/entry.express"]
