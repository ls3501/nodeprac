FROM node:12.22.0
ENV NODE_ENV=production
WORKDIR /
COPY ["package.json","package-lock.json","./"]
RUN npm install 
RUN npm i ts-node -g
COPY . .
CMD ["ts-node","app.ts"]
