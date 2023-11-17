# goit-node-hw-01
=======
Крок 1
=======
    Ініціалізуй проєкт за допомогою команди npm init
    В корені проєкту створи файл index.js
    Встанови пакет nodemon як залежність розробки (devDependencies)
    В файлі package.json додай "скрипти" для запуску index.js
        Скрипт start, який запускає index.js за допомогою node
        Скрипт dev, який запускає index.js за допомогою nodemon
=======
Крок 2
=======
У корені проєкту створи папку db. Для зберігання контактів завантаж і використовуй файл contacts.json, поклавши його в папку db.

У корені проєкту створи файл contacts.js.

    Зроби імпорт модулів fs (у версії, яка працює з промісами - fs/promises) і path для роботи з файловою системою.
    Створи змінну contactsPath і запиши в неї шлях до файлу contacts.json. Для складання шляху використовуй методи модуля path.
    Додай функції для роботи з колекцією контактів. У функціях використовуй модуль fs та його методи readFile() і writeFile().

// contacts.js

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. 
}
=======
Крок 3
=======
Зроби імпорт модуля contacts.js в файлі index.js та перевір працездатність функцій для роботи з контактами.
=======
Крок 4
=======
У файлі index.js має імпортуватися пакет yargs для зручного парсу аргументів командного рядка. Використовуй готову функцію invokeAction(), яка отримує тип виконуваної дії і необхідні аргументи. Функція викликає відповідний метод з файлу contacts.js, передаючи йому необхідні аргументи.

// index.js
const argv = require('yargs').argv;

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

Також можеш використати модуль commander для парсингу аргументів командного рядка. Це більш популярна альтернатива модуля yargs

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
=======
Крок 5
=======
Запусти команди в терміналі і зроби окремі скріншоти результату виконання кожної команди.

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
====================================
Крок 6 - Здача домашнього завдання.
====================================
Зроби скріншоти виконання команд, які залий на будь-який безкоштовний хмарний сервіс зберігання картинок (приклади: monosnap, imgbb.com ), і відповідні посилання додай в файл README.md (створи цей файл в корені проєкту). Після прикріпи в LMS посилання на репозиторій для перевірки ментором виконаної роботи.
Критерії прийому

    Створено репозиторій з домашнім завданням — CLI додаток
    Посилання на репозиторій надіслане ментору на перевірку
    Код відповідає технічному завданню проєкту
    При виконанні коду не виникає необроблених помилок
    Назва змінних, властивостей і методів записана в нотації СamelCase. Використовуються англійські слова, назви функцій та методів містять дієслово
    У коді немає закоментованих ділянок коду
    Проєкт коректно працює з актуальною LTS-версією Node

===============================================
===============================================
[
  {
    "id": "AeHIrLTr6JkxGE6SN-0Rw",
    "name": "Allen Raymond",
    "email": "nulla.ante@vestibul.co.uk",
    "phone": "(992) 914-3792"
  },
  {
    "id": "qdggE76Jtbfd9eWJHrssH",
    "name": "Chaim Lewis",
    "email": "dui.in@egetlacus.ca",
    "phone": "(294) 840-6685"
  },
  {
    "id": "drsAJ4SHPYqZeG-83QTVW",
    "name": "Kennedy Lane",
    "email": "mattis.Cras@nonenimMauris.net",
    "phone": "(542) 451-7038"
  },
  {
    "id": "vza2RIzNGIwutCVCs4mCL",
    "name": "Wylie Pope",
    "email": "est@utquamvel.net",
    "phone": "(692) 802-2949"
  },
  {
    "id": "05olLMgyVQdWRwgKfg5J6",
    "name": "Cyrus Jackson",
    "email": "nibh@semsempererat.com",
    "phone": "(501) 472-5218"
  },
  {
    "id": "1DEXoP8AuCGYc1YgoQ6hw",
    "name": "Abbot Franks",
    "email": "scelerisque@magnis.org",
    "phone": "(186) 568-3720"
  },
  {
    "id": "Z5sbDlS7pCzNsnAHLtDJd",
    "name": "Reuben Henry",
    "email": "pharetra.ut@dictum.co.uk",
    "phone": "(715) 598-5792"
  },
  {
    "id": "C9sjBfCo4UJCWjzBnOtxl",
    "name": "Simon Morton",
    "email": "dui.Fusce.diam@Donec.com",
    "phone": "(233) 738-2360"
  },
  {
    "id": "e6ywwRe4jcqxXfCZOj_1e",
    "name": "Thomas Lucas",
    "email": "nec@Nulla.com",
    "phone": "(704) 398-7993"
  },
  {
    "id": "rsKkOQUi80UsgVPCcLZZW",
    "name": "Alec Howard",
    "email": "Donec.elementum@scelerisquescelerisquedui.net",
    "phone": "(748) 206-2688"
  }
]

