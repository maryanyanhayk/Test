FROM node:10-alpine
COPY . /docker-app
WORKDIR /docker-app
CMD node app.js