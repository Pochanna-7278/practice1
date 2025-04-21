# Use Nginx base image
FROM nginx:alpine

# Copy your HTML into the Nginx web directory
COPY class.html /usr/share/nginx/html/index.html

# Expose port 8004
EXPOSE 8020
