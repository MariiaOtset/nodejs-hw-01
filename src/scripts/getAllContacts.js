import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const allContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  return allContacts;
};

console.log(await getAllContacts());
