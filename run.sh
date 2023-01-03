docker stop Lizana-back;
docker rm Lizana-back;
docker rmi lizana-back;
docker build -t lizana-back . ;
docker run --name=Lizana-back -d -p 8081:3000 lizana-back;