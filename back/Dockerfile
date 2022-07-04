FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "src/api/server.js"]