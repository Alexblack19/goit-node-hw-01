const fs = require("fs/promises");
const path = require("path");

// Розкоментуй і запиши значення
// const contactsPath = ;

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

//============================

const name = ["Alex", "Sofi", "Mejson", "Gibson"];
const age = [23, 45, 67, 98];
const object = {
  name,
  age,
};
module.exports = object;
