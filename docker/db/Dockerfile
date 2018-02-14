FROM mariadb:10.3.2

#EXPOSE 3306

#WORKDIR /app
COPY node .
ADD dump.sql /docker-entrypoint-initdb.d/dump.sql

#RUN mysql -u root -ppass < main_server/database/dump.sql
#RUN mysql -u root -ppass




