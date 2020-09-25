FROM ubuntu:18.04

RUN mkdir /home/work

WORKDIR /home/work

RUN apt update -y && apt-get update -y && apt-get install -y sudo && apt-get install -y vim && apt-get install -y curl && apt-get install -y git

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

RUN apt-get install -y nodejs

RUN git clone https://github.com/arvincsh/zMEC_media_server.git

WORKDIR /home/work/zMEC_media_server

RUN sudo npm install 

RUN sudo npm install forever -g 

CMD [ "forever", "hlsserver.js" ]
