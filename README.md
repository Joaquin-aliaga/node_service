

Build DB docker:
```
docker build --no-cache -t registry:5000/node_service_db -f ./docker/db/Dockerfile .
```
```
docker push registry:5000/node_service_db
```
```
docker run -it --name NODE_SERVICE_DB -p 3306:3306 -e MYSQL_DATABASE=cdr -e MYSQL_ROOT_PASSWORD=pass -d registry:5000/node_service_db
```
```
docker exec -it NODE_SERVICE_DB bash
```

Inside container:
```
mysql -u root -ppass
```
```
use cdr
```

Build docker file for deployment:
```
docker build -t registry:5000/node_service -f ./docker/deploy/Dockerfile .
```

Run the container:
```
docker run -it --name NODE_SERVICE registry:5000/node_service bash
```

