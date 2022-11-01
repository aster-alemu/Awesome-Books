import Store from './store.js';

export const title = document.querySelector('#title');
export const author = document.querySelector('#author');
export const form = document.querySelector('#form');
const Stringifier = (() => {
  const updatedBooks = JSON.stringify(Store.books);
  localStorage.setItem('book', updatedBooks);
});
export { Stringifier };
