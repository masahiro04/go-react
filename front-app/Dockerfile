FROM node:12.16.1-alpine as builder

ENV NODE_ENV=development
ENV LANG ja_JP.UTF-8
ENV TZ Asia/TOKYO

WORKDIR /app

RUN apk add --no-cache curl && \
    curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | sh

COPY package.json .
COPY yarn.lock .
RUN yarn install && ./bin/node-prune
COPY . .
RUN yarn build


FROM node:12.16.1-alpine

WORKDIR /app

ADD package.json ./
ADD yarn.lock ./
ADD . .

# COPY --from=builder ./app/server ./server
COPY --from=builder ./app/node_modules ./node_modules
# COPY --from=builder ./app/.nuxt ./.nuxt

EXPOSE 3000
CMD yarn start
