FROM node:20-alpine

ENV NODE_ENV=production

ENV PORT=8000

WORKDIR /.

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm","run","start:prod" ]