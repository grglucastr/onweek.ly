FROM node:8-alpine

WORKDIR /usr/share/nodeapps/

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
