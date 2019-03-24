FROM pivotalpa/angular-cli:latest



# Create app directory
WORKDIR /usr/src/app

COPY package.json ./


RUN mkdir logs
RUN npm install

# Bundle app source
COPY . .

EXPOSE 4200
CMD ng serve