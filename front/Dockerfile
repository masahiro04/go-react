FROM node:12.16.1-alpine

ENV NODE_ENV=development
ENV LANG ja_JP.UTF-8
ENV TZ Asia/TOKYO

WORKDIR /src
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
ENTRYPOINT [ "yarn", "start" ]
