FROM docker.arvancloud.ir/node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm ls three "@react-three/fiber" react-three-map react-map-gl maplibre-gl

COPY . .

RUN npm run build


FROM docker.arvancloud.ir/nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]