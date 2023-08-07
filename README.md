
# TailwindCSS (практика)

---

## _Флоу налаштування робочого середовища IDE під використання "TailwindCSS" за допомогою Node.js:_

~~~
1. В папці проекту набрати команду:
! npm init (для розгортання проекту)
~~~

~~~
2. Після цього декілька разів натискаємо на "Enter", після цього в папці проекту створиться файл 
- package.json
~~~

~~~
3. Вводимо команду:
! yarn add -D tailwindcss postcss (додаєємо відповідні пакети в наш проект)
~~~

~~~
4. Вводимо команду:
! npx tailwindcss init (створюємо файл конфігурації для фреймворка)
~~~

~~~
5. В файлі tailwind.config.js змінюємо значення "content":
content: ["./index.html"], (таким чином визначаємо шлях до файлу, який буде використовувати tailwindcss,
в даному випадку це буде тільки один файл - index.html)
~~~

~~~
6. Створюємо папку "src", в якій створюємо файл "main.css" (кореневий файл для стилів)
~~~

~~~
7. В файл "main.css" вставляємо, ткаим чином підключаючи 3 компоненти:
@tailwind base;
@tailwind components;
@tailwind utilities;
(Це основні компоненти, які обовязково мають бути підключені до проекту)
~~~

~~~
8. У файл package.json вписуємо скрипт, який буде перетворювати вихідний CSS файл в готовий, який буде 
містити у собі необхідні вставки - стилі за замовчуванням з tailwind.css:

"scripts": {
    "build": "tailwindcss build -i src/main.css -o public/styles.css"
  },
-i src/main.css - це вихідний файл 
-o public/styles.css - це файл "output" - перетворюваний -> готовий
~~~

~~~
9. Застосовуємо останню команду:
! yarn build (фактично створюємо збірку для усього проекту з використанням tailwindcss, таким чином 
підєднуючи між собою усі попередньо створені файли з їхніми конфігураціями та створюємо папку "public" із 
файлом styles.css із вбудованими стилями фреймворку)
~~~
##### (Усі команди вводимо в редакторі iDE Visual Studio Code, через Power Shell, або Git Bash)
---

[посилання на відео уроки](https://www.youtube.com/watch?v=rW38WPa4ekA)

[![посилання на відео уроки](./img/tailwind.jpg)](https://www.youtube.com/watchv=rW38WPa4ekA)                                   [![посилання на відео уроки](./img/nodejs-reference-architecture_1x.png)](https://www.youtube.com/watch?v=xJvAfWinaow&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0)

