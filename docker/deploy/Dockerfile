# specify the node base image with your desired version node:<version>
FROM node:6
# replace this with your application's default port
EXPOSE 7015


#FROM python:2.7.14-stretch
#
WORKDIR /app
COPY node .

RUN cd main_server/ && npm install
CMD ./start.sh



