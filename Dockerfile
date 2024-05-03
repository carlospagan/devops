# Simple Static Website Dockerfile

FROM nginx:alpine

COPY calc.html /usr/share/nginx/html/index.html
COPY . /usr/share/nginx/html

COPY calc.html /var/www/html/index.html
COPY . /var/www/html
