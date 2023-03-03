# sets the base image
FROM node:alpine

# set the working dir
WORKDIR /app

# the port container listens on
EXPOSE 3000

# copy the files to image's filesystem
COPY package.json package-lock.json ./

# install all dependendcies
RUN npm install
 
# copy the remaining files (index.mjs) to working dir
COPY . ./

# default for exec. container
CMD ["npm", "start"]