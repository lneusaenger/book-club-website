import React, { useState, useEffect } from 'react';

function Shelf(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(props.jsonUrl)
      .then(response => response.json())
      .then(data => {
        const books = data.editions.map(thisBook => {
          const isbn = thisBook.isbn_13 || thisBook.isbn_10;
          let coverUrl = "";
          if (isbn) {
            if (Array.isArray(isbn)) {
              isbn.forEach(i => {
                if (!coverUrl) {
                  coverUrl = `https://covers.openlibrary.org/b/isbn/${i}-L.jpg`;
                }
              });
            } else {
              coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
            }
          }
          return {
            title: thisBook.title,
            coverUrl: coverUrl
          };
        });
        setBooks(books);
      });
  }, [props.jsonFile]);
  

  return (
    <div className = "shelf">
      <h2 className = "heading">{props.year}</h2>
      <div className="contents">
        {books.map((book, index) => (
            <div
            key={index}
            className="book"
            style={{
              backgroundImage: `url(${book.coverUrl})`
            }}
          >
            <div className="title">{book.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shelf;