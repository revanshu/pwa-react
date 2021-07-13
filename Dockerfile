FROM node:alpine

WORKDIR /home/app

COPY ./ ./
RUN yarn install
CMD ["yarn","start"]