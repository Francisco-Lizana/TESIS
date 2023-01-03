FROM node:carbon-alpine
RUN mkdir /app 
COPY  * /app
WORKDIR /app
RUN npm install --force
EXPOSE 3000
CMD ["npm", "run", "dev"]
