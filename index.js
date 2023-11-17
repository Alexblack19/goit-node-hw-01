//* Для парсингу аргументів командного рядка можна використовувати пакет yargs
//* або модуль commander (більш популярна альтернатива модуля yargs)

const contacts = require("./contacts");
// //todo:============= Пакет yargs ================
// const argv = require('yargs').argv;
// //todo===========================================
//todo:========== Модуль commander ==============
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();
//todo============================================

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);

    case "updateById":
      const updateContact = await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

//? # Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
//? node index.js --action="list"

//? # Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
//? node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

//? # Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
//? node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

//? # Оновлюємо контакт та виводимо в консоль об'єкт оновленого контакту
//? node index.js --action="updateById" --id AeHIrLTr6JkxGE6SN-0Rw --name Alex --email alex@gmail.com --phone 789-56-34

//? # Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
//? node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
