FROM node
LABEL Name='Snail Mail Management Software'

RUN npm install

EXPOSE 5000
CMD ["node","./bin/www"]