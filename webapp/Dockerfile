FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY tsconfig.json snowpack.config.mjs /app/
COPY public /app/public
COPY src /app/src
RUN npm run build

FROM caddy:2.5.2 as run

COPY --from=build /app/build /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
