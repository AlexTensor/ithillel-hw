# 1. Скачайте и установите node.js LTS версию с официального сайта https://nodejs.org/

# 2. Проверьте корректность установки node.js

Для проверки правильности установки в командной строке выполнить:

```
node -v
```
# 3. Установите gulp-cli глобально
```
npm install gulp-cli -g
```

# 4. В папке с проектом выполните команду

```
npm install
```


# Для работы gulp требуется сутруктура папок:

<pre>
project/
  | index.html
  | index.js
  | src/
  |   | styles/
  |   |   | main.scss
  |   | scripts/
  |       | *.js
  | dist/
      | styles/
      |   | main.min.css
</pre>

# 5. Для запуска используйте команду

```
npm run dev
```
