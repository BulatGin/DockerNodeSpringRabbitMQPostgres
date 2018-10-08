FROM node:8-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8800

ENTRYPOINT ["node", "server.js"]