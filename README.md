
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
9. Застосовуємо команду:
! yarn build (фактично створюємо збірку для усього проекту з використанням tailwindcss, таким чином 
підєднуючи між собою усі попередньо створені файли з їхніми конфігураціями та створюємо папку "public" із 
файлом styles.css із вбудованими стилями фреймворку)
~~~
~~~
__!!!__ Для того щоб кожен раз не запускати створення нового build (збірки) через команду
! yarn build, потрібно внести зміни у документ "__package.json__", а саме в його розділі
"script" в кінці потрібно додати значення: "--watch". Повний код має виглядати так:
"scripts": {
    "build": "tailwindcss build -i src/main.css -o public/styles.css --watch"
  },
Після цього потрібно буде останній раз застосувати команду: ! yarn build.
Тепер генерація буде відбуватися автоматично і проект буде автоматично білдитися після
кожної внесеної зміни у будь - який документ проекту.
~~~

##### (Усі команди вводимо в редакторі iDE Visual Studio Code, через Power Shell, або Git Bash)
---

## Основний механізм додавання стилів на елементи (через додавання класів):

~~~
Фактично вся робота з tailwindcss полягає у створенні структури документу HTML та наданні у цьому ж
документі стилів через запаковані значення класів фреймворку усім елементам розмітки
~~~

~~~
public/styles.css білдиться з папки стилів, яка знаходиться в папці src/main.css
~~~

~~~
Ознайомлюючись із вбудованим блоком стилів створеної папки public/styles.css -> приходимо до висновку,
що це зхоже на нормалайз css
~~~

~~~
Механізм генерації файлу __styles.css__ наступний: 
Cтворюємо розмітку, на елементи розмітки вносимо фактично закодовані класи tailwindcss -> за допомогою
файлу конфігурації -> tailwind.config.js, де підключено значення: "content: ["./index.html"]"
аналізується розмітка із внесеними до неї класами та автоматично генерується __styles.css__ файл у
який автоматично вносяться задані елементам класи та розшифрування блоку оголошення із заданими
властивостями та їхнім значеннями.
~~~

~~~
Фактично після кожного внесення змін у проекті потрібно застосовувати команду !yarn build
(для створення нової поточної збірки проекту), після чого __styles.css__ буде генерувати зміни,
які були внесені в HTML документ, а також будуть інтегруватися у збірку проекту зміни внесені у
інші документи.
~~~

~~~
__!!!__ Для того щоб кожен раз не запускати створення нового build (збірки) через команду
! yarn build, потрібно внести зміни у документ "__package.json__", а саме в його розділі
"script" в кінці потрібно додати значення: "--watch". Повний код має виглядати так:
"scripts": {
    "build": "tailwindcss build -i src/main.css -o public/styles.css --watch"
  },
Після цього потрібно буде останній раз застосувати команду: ! yarn build.
Тепер генерація буде відбуватися автоматично і проект буде автоматично білдитися після
кожної внесеної зміни у будь - який документ проекту.
~~~

~~~
При введенні частини синтаксису в розділ "class="..."" появиться список класів, які
можна застосувати.
Для того щоб детальні розяснення того чи іншого класу (розшифрована інформація повноцінного
коду стилізації), який можна застосувати - потрібно не використовувати ховер мишки на список
доступних класів, а рухатися стрілочками на клавіатурі - вверх або униз.
~~~

---
## Шрифти кольори та відступи:

~~~
Детальна іфнормація:
https://tailwindcss.com/docs/customizing-colors
https://tailwindcss.com/docs/font-family
https://tailwindcss.com/docs/padding
https://tailwindcss.com/docs/margin
~~~

~~~
Шрифти визначаються у класах tailwindcss за ключовими словами:
__font-__
Кольори визначаються у класах tailwindcss за ключовими словами:
__text-<color>__
~~~

~~~
Відступи визначаються у класах tailwindcss за ключовими словами:
__m-__ (margin)
__p-__ (pading)
~~~

~~~
Відступи лише у конкретних напрямках визначаються у класах tailwindcss за
ключовими словами:
__my-__ __py-__ (по вертикалі)
__mx-__ __px-__ (по горизонталі)
~~~

~~~
Відступи лише у конкретній стороні визначаються у класах tailwindcss за
ключовими словами:
__mt-__ top
__mr-__ right
__mb-__ botom
__ml-__ left
~~~

~~~
tailwindcss не блокує можливості задання інших індивідуальних значень
стилізації через вбудовані стилі: style="margin: 10px"
~~~
---

## Додавання границь:
~~~
Детальна інформація:
https://tailwindcss.com/docs/border-radius
~~~

~~~
Бордер за замовчуванням (1px solid grey) визначаються у класах tailwindcss
за ключовими словами:
__border -__
Бордер має три значення:
border-width: __border-b-2__
border-color: __border-b-red-500__
border-style: __border-solid__

Заокруглення бордеру визначаються у класах tailwindcss за ключовими словами:
__rounded-t__ (заокруглення для бордера вписується перед цим класом, в даному
випдаку будуть заокруглені верхній лівий та правий кути)

У даному випадку __b-__ означає botom. Із заданням таких класів нами визначено
лише нижню границю (бордер). Забравши цей прапорець бордер буде застосовано зі
всіх сторін по всьому периметру.
border-transparent - означатиме застосування бордеру однак без його фактичного
відображення юзеру.
~~~

~~~
Можна міняти вигляд (тип) елемента:
__inline__          інлайновий (рядковий) елемент
__inline-block__    інлайн-блоковий (рядково-блоковий) елемент
__block__           блоковий елемент
Прокрутка елементів:
__overflow-__
Для того щоб елементи не виходили на новий рядок:
__whitespace:nowrap__
~~~
---

## Ховер, декорації, фокус, висота та ширина:

~~~
Детальна інформація:
https://tailwindcss.com/docs/hover-focus-and-other-states#hover-focus-and-active
https://tailwindcss.com/docs/text-decoration
https://tailwindcss.com/docs/width#fixed-widths
https://tailwindcss.com/docs/height
~~~

~~~
Ховер визначається у класах tailwindcss за ключовими словами:
__hover:text-__ (або інше значення)
Фокус визначається у класах tailwindcss за ключовими словами:
__focus:text-__ (або інше значення)
~~~

~~~
Якщо до приладу ми хочемо зробити із появою бордера, спочатку потрібно задати
розмір бордера та його колір. Якщо без ховера бордер не має відображатися.
Задаємо: __border-b-2__ __border-transparent__
Після цього вже даємо властивості та значення бордера при ховері на той чи
інший елемент:
__hover:border-purple-800__
Кожне значення ховеру потрібно задавати через новий клас ховеру:
__hover:text-purple-800__ __hover:border-__
~~~

~~~
__underline__ можна піддавати декоруванню, мабуть так як і інші елементи:
__underline-offset-2__ (фізична відстань елемента підкреслення від тексту
під яким він знаходиться)
Unerline може мати 3 значення:
__hover:underline decoration-4__
      __underline-green-500__
      __underline-wavy__ (або solid чи інша стилізація)
~~~

~~~
Фон визначається у класах tailwindcss за ключовими словами:
__bg-__ 
Ширина визначається у класах tailwindcss за ключовими словами:
__w-__ 
__w-full__ (елемент займе усю ширину вюпорта у відповідності до налаштувань)
Висота визначається у класах tailwindcss за ключовими словами:
__h-__ 
~~~
---
## Кнопки:

~~~
Тінь визначається у класах tailwindcss за ключовими словами:
__shadow-__
~~~

~~~
Виключення загальних налаштувань __outline__, які існують за замовчуванням та
створюємо свій його варіант для табуляції на активні елементи сайту:
1.  __focus:outline-none__ (виключаємо дефолтне значення outline)
2.  __focus:ring__ (початок створення свого варіанту стилізації outline)
3.  __focus:ring-violet-300__
~~~

## Flexbox:

~~~
Флекс визначається у класах tailwindcss за ключовими словами:
__flex__

Горизонтальне розміщення елементів визначається у класах tailwindcss
за ключовими словами:
__justify-__
__justify-center__    (елемент розміщуються горизонтально по середині)
__justify-start__     (елемент розміщуються горизонтально зліва)
__justify-end__       (елемент розміщуються горизонтально зправа)

__flex__ - за замовчування передбачає розміщення основної осі по горизонталі (x)
__flex-col__ - передбачає зміну основної осі по вертикалі (y)

Вертикальне розміщення елементів визначається у класах tailwindcss
за ключовими словами:
__item-__
__item-center__    (елемент розміщуються вертикально по середині)
__item-start__     (елемент розміщуються вертикально зліва)
__item-end__       (елемент розміщуються вертикально зправа)
~~~

## Директиви:

~~~
Директиви були застосовані на початку розробки проекту в файлі - "src/main.css":
@tailwind base;
@tailwind components;
@tailwind utilities;

Однак це не єдині директиви, які використовуються та представляються tailwindcss
фреймворком і використовують вони дуже корисні дії.

Для спрощення читання усіх довгих (і не тільки) класів використовуємо директиву
@apply:
1. заходимо в файл main.css/src
2. створюємо клас назву для окремих елементів розмітки HTML, наприклад:
".header-list"
3. відкриваємо блок оголошення за допомогою фігурних дужок "{}"
4. вписуємо назву директиви, яку будемо використовувати: @apply
5. переносимо довгі назви класів tailwindcss, що застосовані до посилань хедера
і вставляємо їх після назви директиви, це має виглядати так:
.header-list {
    @apply uppercase font-bold text-purple-800 focus:outline-none focus:ring
    focus:ring-violet-300;
}
6. назву створеного умовного класу з директиви "header-list" з файлу src/main.css
переносимо до класу елементу посилання в розмітці HTML документу, це має виглядати
ось так:
    <ul class="header-list">
7. автоматично змінено та по сортовано класи із властивостями та їх значеннями в
файлі - public/styles.css, що стало набагато зрозуміліше читати і схоже на звичайний
файл із стилізацією, створений у звичайному режимі, і виглядає це так:
.header-logo {
    font-weight: 700;
    text-transform: uppercase;
    --tw-text-opacity: 1;
    color: rgb(107 33 168 / var(--tw-text-opacity));
}
~~~

## Іконки:

~~~
Детальна інформація:
https://tailwindcss.com/docs/fill
https://tailwindcss.com/docs/stroke
https://tailwindcss.com/docs/stroke-width
~~~

~~~
Детальна інформація щодо класів за допомогою яких можна змінювати стилізацію іконок
(кольору фону, кольори контурів та інше):
https://tailwindcss.com/docs/fill
https://tailwindcss.com/docs/stroke
https://tailwindcss.com/docs/stroke-width
~~~

~~~
Для фреймворку tailwindcss звичайні іконки з будь-яких загальнодоступних джерел
не підходять.
Спеціально для даного фреймворку було створено ресурс з іконками: 
https://heroicons.com/
~~~

~~~
Флоу застосування іконок з ресурсу https://heroicons.com/ для розмітки HTML документу:
1. заходимо на даний сайт
2. в пошук вводимо запит із метою потрібної іконки
3. наводимо на необхідну іконку курсор мишки
4. натискаємо на "Copy SVG"
5. вставляємо в потрібному місці посеред розмітки HTML
6. для зміни розміру іконки змінюємо класи: __h__ та __w__

Примітки:
- елементи стрілочок шукаємо за запитом: "chevron"
- соціальні іконки шукаємо за запитами: "chat", "at" "phone" 
~~~

## Побудова макета за допомогою сіток:

~~~
Детальна інформація:
https://tailwindcss.com/docs/width
https://tailwindcss.com/docs/space#add-horizontal-space-between-children
~~~

~~~
__w-__ (width - ширина)
Для побудови адаптивного макета можна використовувати класи ширини в дробах,
що в свою чергу буде передавати значення у %:
__w-1/4__ (width: 25%)

Spacing -> Space between (відстань між елементами), як правило використовується
для задання відступів між колонками сітки:
__space-x-__ (margin-left: ...)

__w-1/3__ - означає, що ми розбиваємо макет із блоками елементів на 3 колонки
і задаємо місце заданому елементу в 33,33%

Якщо до прикладу існує 5 колонок і в свою чергу доприкладу лише 3 блоки елементів,
ми можемо розбити це в таких варіантах:
1.  __w-2/5__ (для першого блоку групи елементів)
    __w-2/5__ (для другого блоку групи елементів)
    __w-1/5__ (для третього блоку групи елементів)
2.  __w-1/5__ (для першого блоку групи елементів)
    __w-3/5__ (для другого блоку групи елементів)
    __w-1/5__ (для третього блоку групи елементів)

Приклад: footer
|         2/5           | |            2/5        | |      2/5      |
|       Company         | |         Content       | | Contact us    |
|_______________________| |_______________________| |_______________|

<div class="footer-1 (w-2/5)"></div>
<div class="footer-1 (w-2/5)"></div>
<div class="footer-1 (w-1/5)"></div>

___!!!___ Для того щоб обмежити максимальну ширину усього сайту усі створені
секції та розділи усієї структури HTML документу потрібно помістити в div,
якому задати наступні класи tailwindcss:
<div class="max-w-screen-xl mx-auto"></div>
...
це те саме що й:
.class {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}

__leading-__ (це те саме, що й: line-height)
~~~

### Висновки:
1. Не дуже зручний фреймворк так як запамяти властивості та значення усіх
   зашифрованих (запакованих) класів просто неможливо і щоразу потрібно
   гортати різні варіанти значень, які б нам могли підійти у тій чи іншій
   ситуації.
2. Бажано усі задані елементам класи tailwind переносити у директиву @apply:
   по-перше зручніше читати код стилізації, по-друге правильно генерується
   файл public/styles.css після чого задані стилі відображаються у загальних
   класах, що схоже на звичайний флоу роботи з HTML та СSS документацією.
3. Плюсом tailwindcss фреймворку є те що він автоматично генерує та створює
   префікси у файлі стилізації CSS.


___посилання на відео уроки:___

[![посилання на відео уроки](./img/tailwind.jpg)](https://www.youtube.com/watch?v=rW38WPa4ekA)                                   [![посилання на відео уроки](./img/nodejs-reference-architecture_1x.png)](https://www.youtube.com/watch?v=xJvAfWinaow&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0)

