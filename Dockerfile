# 🚀 Stage 1: Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json dan install dependencies
COPY package.json package-lock.json ./

# Copy seluruh kode aplikasi
COPY . .
RUN npm install

# Build aplikasi Next.js
RUN npm run build

# 🚀 Stage 2: Production Stage
FROM node:18-alpine

WORKDIR /app

# Copy hanya hasil build dari tahap sebelumnya
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Menentukan port yang digunakan
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
