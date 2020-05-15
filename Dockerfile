FROM node:latest as node-container
RUN mkdir /usr/app
WORKDIR /usr/app
ENV PATH /usr/app/node_modules/.bin:$PATH
COPY . /usr/app

FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node-container /usr/app/build /tmp/app

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

