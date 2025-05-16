FROM node:18-alpine as builder
WORKDIR /app

# Copy the ZIP from the subfolder frontend-artifact
COPY frontend-artifact/frontend-artifact-latest.zip ./

RUN apk add --no-cache unzip && unzip frontend-artifact-latest.zip && rm frontend-artifact-latest.zip

RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
