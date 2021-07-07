FROM node:14.17.0-alpine3.11

# Install all build dependencies
# Add bash for debugging purposes

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

ADD . /app

VOLUME 3000

CMD ["npm", "start"]
