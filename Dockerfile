FROM node:20-alpine AS build
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN cd /app && npm ci

FROM node:20-alpine
COPY --from=build /app /app
COPY ./src /app/src
COPY ./public /app/public
WORKDIR /app
CMD ["npm", "start"]
