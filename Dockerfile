FROM node:buster

RUN mkdir /src
WORKDIR /src

# COPY ./app/index.js /src/index.js
# COPY ./app/package.json /src/package.json
# COPY ./app/package-lock.json /src/package-lock.json

CMD npm install

EXPOSE 3000
ENV HOST 0.0.0.0
ENV PORT 3000

CMD npm start
