FROM node:10-alpine
ARG ENV_FILE_REACT
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN mv .env.${ENV_FILE_REACT} .env

RUN yarn
RUN yarn build

FROM nginx:1-alpine
COPY nginx.conf /etc/nginx/
COPY default.conf  /etc/nginx/conf.d/

ENV PORT 80
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]