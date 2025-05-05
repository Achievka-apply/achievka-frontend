# ---- 1) Build stage ----
FROM node:18-alpine AS builder
WORKDIR /app

# Копируем зависимости
COPY package*.json ./
RUN npm ci

# Копируем весь код и собираем
COPY . .
RUN npm run build

# ---- 2) Serve stage ----
FROM node:18-alpine AS runner
WORKDIR /app

# Устанавливаем лёгкий статик-сервер
RUN npm install -g serve

# Копируем собранный бандл
COPY --from=builder /app/build ./build

# Открываем порт
EXPOSE 3000

# Запускаем сервер
CMD ["serve", "-s", "build", "-l", "3000"]
