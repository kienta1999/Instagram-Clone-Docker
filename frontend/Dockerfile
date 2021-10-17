FROM node:alpine
# USER node
# ARG HOME=/home/node
# ENV NPM_CONFIG_PREFIX=$HOME/.npm-global
# ENV PATH=$PATH:$HOME/.npm-global/bin
# WORKDIR /home/node
# COPY --chown=node:node ./package.json ./
# RUN npm install
# RUN npm config set unsafe-perm true
# COPY . ./
# EXPOSE 3000
USER node
WORKDIR /home/node
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
RUN npm config set unsafe-perm=true
COPY . ./
EXPOSE 3000

# start app
CMD ["npm", "start"]

# docker build -t instagram/frontend . 
# docker run -p 3000:3000 -v $(pwd):/app -v app/node_modules instagram/frontend

# docker build -t instagram/frontend . 
# docker run -p 3000:3000 -v $(pwd):/home/node -v /home/node/node_modules instagram/frontend