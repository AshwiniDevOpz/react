# Use Node to build the app
FROM node:18-alpine as builder
WORKDIR /app

# Copy the ZIP artifact from the frontend-artifact folder
COPY frontend-artifact/frontend-artifact-latest.zip ./

# Unzip and remove the archive
RUN apk add --no-cache unzip && \
    unzip frontend-artifact-latest.zip && \
    rm frontend-artifact-latest.zip

# Run npm install and build (assuming package.json is in the extracted ZIP)
RUN npm install && npm run build

# Use Nginx to serve the built app
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Provide a custom Nginx config if you have one
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
