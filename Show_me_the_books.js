const findBooks = (arrOfBooks) => {
  const books = arrOfBooks.filter(book => book.year > 2000);
  return books;
}

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960
  },

  {
    title: 'Harry Potter and the Philosopher Stone',
    author: 'J.K. Rowling',
    year: 1997
  },

  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008
  }
];
const output = findBooks(books);
console.log(output);