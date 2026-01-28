# NestJS Starter Template

Це базовий стартовий шаблон для розробки RESTful API на базі **NestJS**. Проект налаштований для швидкого старту розробки з використанням сучасних інструментів та стандартів.

## Особливості
- **Framework**: NestJS v11 (Express-оснований)
- **Language**: TypeScript (ES2023)
- **Runtime**: Node.js
- **Path Aliases**: Використання `@app/*` для скорочених імпортів із директорії `src`.
- **Formatting & Linting**: ESLint + Prettier для чистоти коду.
- **Development**: Автоматичний перезапуск через `nodemon` або `nest start --watch`.

## Встановлення

```bash
npm install
```

## Запуск проекту

```bash
# Режим розробки (з відстеженням змін)
npm run start:dev

# Запуск через nodemon
npm start

# Збірка (Build)
npm run build

# Продакшн запуск
npm run start:prod
```

## Тестування

```bash
# Unit тести
npm run test

# E2E тести
npm run test:e2e

# Покриття (Coverage)
npm run test:cov
```

## Налаштування проекту за замовчуванням

- **tsconfig.json**: Налаштовані аліаси (@app). Використовується `nodenext` для модулів.
- **eslint.config.mjs**: Сучасна конфігурація ESLint для NestJS.
- **nodemon.json**: Налаштований для роботи з TypeScript через `ts-node` та `tsconfig-paths`.
- **module-alias**: Використовується для підтримки аліасів у зібраному проекті.

## Пакети за замовчуванням

- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express` — основне ядро.
- `reflect-metadata`, `rxjs` — обов'язкові залежності NestJS.
- `module-alias` — для роботи зі шляхами.
- `nodemon`, `ts-node`, `typescript` — інструменти розробки.
- `jest`, `supertest` — середовище тестування.
