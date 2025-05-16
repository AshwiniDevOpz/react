# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app
COPY cart-project/package*.json ./
RUN npm install
COPY cart-project/ .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
