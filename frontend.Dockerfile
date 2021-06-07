from node:16
workdir /app
copy package.json yarn.lock ./
run yarn install
copy frontend.js .
cmd node frontend.js
