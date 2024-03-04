# Stage Build #
FROM node:18-alpine AS build-stage

# RUN apk --update add git

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run dev
# RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
