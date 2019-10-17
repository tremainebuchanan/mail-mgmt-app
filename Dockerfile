FROM nodejs
LABEL Name='Snail Mail Management Software'

RUN npm clean install

EXPOSE 5000
CMD ["node","./bin/www"]