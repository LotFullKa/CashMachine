# Используем образ Node.js в качестве базового для сборки приложения
FROM node:17-alpine as build

# Устанавливаем рабочую директорию в /app
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все содержимое текущей директории в рабочую директорию
COPY . .

CMD [ "npm", "run", "react" ]