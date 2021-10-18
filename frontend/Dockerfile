FROM node:alpine
RUN mkdir -p /home/node
WORKDIR /home/node
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY --chown=node:node package.json ./
RUN npm install
RUN npm config set unsafe-perm=true
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
COPY --chown=node:node . ./
EXPOSE 3000

# start app
USER node
CMD ["npm", "start"]

# docker build -t instagram/frontend . 
# docker run -p 3000:3000 -v $(pwd):/app -v app/node_modules instagram/frontend

# docker build -t instagram/frontend . 
# docker run -p 3000:3000 -v $(pwd):/home/node -v /home/node/node_modules instagram/frontend