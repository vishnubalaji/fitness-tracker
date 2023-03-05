FROM node
RUN mkdir -p /usr/src/express
WORKDIR /usr/src/express
COPY . .
RUN npm i
ENV PORT 8080
CMD ["node", "index.js"]
