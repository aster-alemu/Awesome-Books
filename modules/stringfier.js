import Store from './store.js';

export default function Stringifier() {
  const updatedBooks = JSON.stringify(Store.books);
  localStorage.setItem('book', updatedBooks);
}
