FROM node:alpine
WORKDIR /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD node index.js