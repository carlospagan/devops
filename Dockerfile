# Simple Static Website Dockerfile

FROM nginx:alpine
COPY . /usr/share/nginx/html
