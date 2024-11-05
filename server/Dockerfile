#Sample Dockerfile for NodeJS Apps

FROM node:21.6.2

ENV 5000

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]

