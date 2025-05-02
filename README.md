# Нативное react приложение
> Разработка программного мобильного обеспечения для поиска чего-то на подобии самоката по макету [Ссылка на макет](https://www.figma.com/design/PdYz0ZCJpcYcTOec7OwRvM/porcelain?node-id=0-1&p=f&t=MN3wCBQ1EZpcG2zW-0)

Дизайн
https://www.figma.com/design/PdYz0ZCJpcYcTOec7OwRvM/porcelain?node-id=0-1&p=f&t=MN3wCBQ1EZpcG2zW-0

---

### Начало работы
 - 1 Нужно установить node
 - 2 Установи Expo 

    > npm install -g expo-cli

 - 3 Установить зависимости

    > npm install 

    или

    > npm install --legacy-peer-deps 

 - 4 Cтарт gроекта 
    <что бы на телефоне смотреть установить expo go и быть в одной сети. проблема что моки не работаю так>

    > npx expo start -c
    -   w — веб-версия
    -   a — Android (если есть эмулятор или подключённый телефон)
    -   i — iOS (только на macOS с Xcode)

 - 5 Работа с мок сервером, если требуется.
    -   shared/constants USE_MOCK = true
    -   shared/getUrl там указать адреса
    -   далее запуск в отдельном терминале

    > node mock/server.js

---

### Архитектура
/src

 ├── /app          — точки входа и инициализация

 ├── /screens      — экраны (Login, Register, Home и т.д.)

 ├── /model        — Effector-модели: userStore, authStore

 ├── /shared       — UI-компоненты и утилиты

 └── /mock         — HTTP-клиент и API-функции


