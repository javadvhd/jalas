#! /bin/bash

git clone https://github.com/javadvhd/jalas
cd jalas
git checkout deploy
cd ..
mv ./jalas/Dockerfile ./jalas/docker-compose.yml .
# apt-get update
# apt-get install docker.io -y
# apt-get install docker-compose -y
docker-compose up