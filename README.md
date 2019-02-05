# users-items-ui
This project contains the UI to show items associated with the user passed to the users-items-api

## Getting started

These instructions will get you a copy of the project up and running on a local machine for testing purposes.

### Prerequisites

This is a Spring Boot project which is built using maven. Also docker is required to launch an instance of mysql. Before
starting this app, the users-items-api app should be up and running as it is required.

### Starting the docker container for mysql

In the root directory of this project, there is a Dockerfile we will use to build the container for our mysql database. Follow the next instructions

In the root directory execute:

```
docker build -t task2-mysql .
```

```
docker run -d -p 3307:3306 --name task2-mysql -e MYSQL_ROOT_PASSWORD=testwebapp task2-mysql
```

### Starting the app

To compile the app execute the following command in the root directory:
```
mvn clean package
```
To run the app execute:
```
java -jar target/users-items-ui-0.0.1-SNAPSHOT.jar
```
Once everything is up and running, you can go to the login screen at:
```
localhost:9080/
```

And consult the endpoints at:
```
localhost:9080/swagger-ui.html
```
