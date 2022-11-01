import Store from './store.js';

const Stringifier = (() => {
  const updatedBooks = JSON.stringify(Store.books);
  localStorage.setItem('book', updatedBooks);
});
export { Stringifier };