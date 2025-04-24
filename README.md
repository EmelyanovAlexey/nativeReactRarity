1 Установи Expo
npm install -g expo-cli

2 старт
npx expo start
w — веб-версия
a — Android (если есть эмулятор или подключённый телефон)
i — iOS (только на macOS с Xcode)

/src
 ├── /app          — точки входа и инициализация
 ├── /screens      — экраны (Login, Register, Home и т.д.)
 ├── /entities     — Effector-модели: userStore, authStore
 ├── /features     — логика регистрации/авторизации
 ├── /shared       — UI-компоненты и утилиты
 └── /services     — HTTP-клиент и API-функции

 npx expo start -c


 Дизайн
 https://www.figma.com/design/PdYz0ZCJpcYcTOec7OwRvM/porcelain?node-id=0-1&p=f&t=MN3wCBQ1EZpcG2zW-0
