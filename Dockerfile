FROM node:16-alpine

COPY . .

RUN yarn install --production --frozen-lockfile

EXPOSE 3000

CMD node index