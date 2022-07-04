FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

COPY . .

CMD ["node", "src/server.js"]