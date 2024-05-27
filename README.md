# Prerequisites
- Docker installed on your system
- Vm Virtual box installed on system

# 1. Create a Dockerfile
A Dockerfile is a script that contains instructions to build a Docker image. for both frontend and backend
To test if it works you can 
## backend
1. open a terminale 
2. Goto docker file in my case it is 
3. cd C:\Users\marc\Desktop\vszay\zay-ecommerce\backend
4. docker build -t zay-back .
5. docker run -d -p 3000 --name zay-back zay-back

## frontend 
1. cd C:\Users\marc\Desktop\vszay\zay-ecommerce\frontend
2. docker build -t zay-front .
3. docker run -d -p 80 --name zay-front zay-front

and you should now be able to enter the site on frontend ip and port if database is setup

# 2. Create a Docker-Compose 
to create both images and a volume for the service

1. open terminal
2. cd C:\Users\marc\Desktop\vszay\zay-ecommerce
3. run docker-compose up -d

and you should now be able to enter the site on frontend ip and port

# Setup Docker swarm 
1. open terminale
2. docker swarm init - Creates a manager node and should give you a join command
3. cd C:\Users\marc\Desktop\vszay\zay-ecommerce
4. docker stack deploy -c docker-compose.yml zaystack
5. docker service create --replicas 1 --name zayservices zaystack
6. setup a VM with docker 
7. open the vm and a terminale on the vm
8. add a worker with the join command -->  docker swarm join --token <token> <manager-ip>:<port>
9. now when somebody enter the manager <manager-ip>:<port> it round robin through the worker nodes

