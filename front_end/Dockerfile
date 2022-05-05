# pull official base image
FROM node:16.14.2-alpine

EXPOSE 3000

WORKDIR /app

# Install node dependencies
COPY ./platinum_test_front/package.json ./
COPY ./platinum_test_front/package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 

# add app
COPY ./platinum_test_front ./

# start app
CMD ["npm", "start"]