FROM node:20-bookworm

RUN npx -y playwright@1.42.1 install --with-deps

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# ENV TEST_SHARD=1

# CMD ["sh", "-c", "npx playwright test --shard=$TEST_SHARD"]