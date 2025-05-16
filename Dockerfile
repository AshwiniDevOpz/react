# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

# Copy and unzip the project
COPY ezyZip.zip ./
RUN apt-get update && apt-get install -y unzip && unzip ezyZip.zip -d app && rm ezyZip.zip

WORKDIR /app/app

RUN npm install
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
