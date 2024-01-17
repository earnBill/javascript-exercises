const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(books) {
   return books.map((elements) => elements.title);
    // const book = []
    // for (let entries of books) {
    //     book.push(entries.title);
    // }
    // return book;
     
}

// console.log(getTheTitles(books));

// console.log(books[0].title);

// Do not edit below this line
module.exports = getTheTitles;
