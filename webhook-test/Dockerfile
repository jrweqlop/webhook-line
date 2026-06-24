# -------- Stage 1: Build --------
FROM node:24-alpine AS builder

WORKDIR /app

# copy เฉพาะไฟล์ที่จำเป็นก่อน (ช่วย cache)
COPY package*.json ./

# install dependencies
RUN npm install

# copy source
COPY . .

# build nestjs
RUN npm run build


# -------- Stage 2: Production --------
FROM node:24-alpine

WORKDIR /app

# copy package.json
COPY package*.json ./

# install production only
RUN npm install --omit=dev && npm cache clean --force

# copy เฉพาะ build output
COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/public ./public 


# expose port
EXPOSE 3000

CMD ["node", "dist/main.js"]


