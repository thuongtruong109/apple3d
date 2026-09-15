ARG NGINX_IMAGE=nginx:1.28-alpine
FROM ${NGINX_IMAGE}

COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -f /etc/nginx/conf.d/default.conf

EXPOSE 8080
