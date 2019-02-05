FROM mysql:5.7
ENV MYSQL_DATABASE testwebapp
COPY ./scripts/ /docker-entrypoint-initdb.d/