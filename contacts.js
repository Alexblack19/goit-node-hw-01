const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid"); // працює з CommonJS версія "nanoid"(3.3.4)

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  // Повертає масив контактів.
  const data = await fs.readFile(contactsPath); // в data міститься Buffer
  return JSON.parse(data); // розпарсюємо data та отримуємо масив контактів
}

async function getContactById(contactId) {
  // Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const result = contacts.find((element) => element.id === contactId);
  return result || null;
}

async function writeDataContacts(contacts) {
  // Перезаписує інформацію в contacts.json
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function addContact(dataNewContact) {
  // Повертає об'єкт доданого контакту.
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...dataNewContact,
  };

  contacts.push(newContact);
  writeDataContacts(contacts);

  return newContact;
}

async function removeContact(contactId) {
  // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
