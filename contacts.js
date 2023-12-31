const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid"); // працює з CommonJS версія "nanoid"(3.3.4)

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  // Повертає масив контактів.
  try {
    const data = await fs.readFile(contactsPath); // в data міститься Buffer
    return JSON.parse(data); // розпарсюємо data та отримуємо масив контактів
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  // Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);
    return result || null;
  } catch (error) {
    console.log(error);
  }
}

async function addContact(dataNewContact) {
  // Повертає об'єкт доданого контакту.
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...dataNewContact,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

async function updateContactById(id, data) {
  // Повертає об'єкт оновленого контакту. Повертає null, якщо контакт з таким id не знайдений.

  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    contacts[index] = { id, ...data };
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[index];
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.

  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
};
