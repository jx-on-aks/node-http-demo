FROM node:9-slim
ENV PORT 80
EXPOSE 80
WORKDIR /usr/src/app
COPY . .
CMD ["npm", "start"]