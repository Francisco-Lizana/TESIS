FROM node:16.14.2-alpine
RUN mkdir /app 
COPY  ./ /app
WORKDIR /app
RUN npm install --force
EXPOSE 3000
CMD ["npm", "run", "dev"]
