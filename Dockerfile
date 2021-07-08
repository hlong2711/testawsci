FROM node:14.17.0-alpine3.11

# Install all build dependencies
# Add bash for debugging purposes

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

ADD . /app

EXPOSE 3000
EXPOSE 80

CMD ["npm", "start"]
