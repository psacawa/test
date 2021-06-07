from node:16
workdir /app
copy package.json yarn.lock ./
run yarn install
copy backend.js .
cmd node backend.js
