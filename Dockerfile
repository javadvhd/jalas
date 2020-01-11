FROM node:10
WORKDIR /home
COPY ./jalas .
# RUN cd /home/jalas
RUN yarn install 
RUN npm install pm2 -g
RUN apt-get install curl -y
# CMD echo "ls -ltrhaR /home/backend" | bash
CMD sleep 15 && cd /home/backend/packages/ && pm2 start ./service-runner.json && (pm2 log &) && cd /home/frontend/ && yarn run dev
