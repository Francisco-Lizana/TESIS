FROM node:16.14.2-alpine
RUN mkdir /app 
COPY  ./ /app
WORKDIR /app
RUN apk add chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
RUN npm install 
CMD ["npm","run", "dev"]
EXPOSE 3000
