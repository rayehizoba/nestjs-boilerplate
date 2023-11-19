FROM node:20 AS builder

# Create app directory
WORKDIR /app

COPY tsconfig*.json ./
COPY tsconfig.build*.json ./

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY ../prisma ./prisma/

# Install app dependencies
RUN npm install -g npm@latest
RUN npm install --verbose --no-optional

RUN npx prisma generate

COPY .. .

RUN npm run build

FROM node:20

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
