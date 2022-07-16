FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY tsconfig.json tsconfig.build.json /app/
COPY src /app/src
RUN npm run build

FROM node:18-alpine as run

WORKDIR /app

COPY  package.json package-lock.json /app/
RUN npm install --omit=dev

COPY --from=build /app/dist /app/dist

CMD [ "npm", "run", "start:prod" ]