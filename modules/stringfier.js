import Store from './store.js';

export const Stringifier = (() => {
  const updatedBooks = JSON.stringify(Store.books);
  localStorage.setItem('book', updatedBooks);
});
// export { Stringifier };