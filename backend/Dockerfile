FROM node:alpine
USER node
WORKDIR /home/node
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
RUN npm config set unsafe-perm=true
COPY . ./
EXPOSE 3001

# start app
CMD ["npm", "start"]


# docker build -t instagram/backend . 
# docker run -p 3001:3001 -v $(pwd):/app -v /app/node_modules instagram/backend