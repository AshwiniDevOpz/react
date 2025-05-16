# Use Node to build the app
FROM node:18-alpine as builder
WORKDIR /app
COPY frontend-artifact-latest.zip ./
RUN apk add --no-cache unzip && unzip frontend-artifact-latest.zip && rm frontend-artifact-latest.zip

# Run npm install and build
RUN npm install && npm run build

# Use Nginx to serve the build
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
