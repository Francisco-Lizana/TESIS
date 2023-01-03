FROM node:16.14.2-alpine
RUN mkdir /app 
COPY  ./ /app
WORKDIR /app
RUN npm install --force
CMD ["npm","run", "dev"]
EXPOSE 3000
