import { useEffect, useState } from "react";
import classes from "./AvailableBooks.module.css";
import Card from "../UI/Card";
import BookItem from "./BookItem/BookItem";

// HTTP GET REQUEST --> Grabbing firebase realTime database
// using async function
const AvailableBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://shelves-a7de6-default-rtdb.firebaseio.com/Shelves.json').then();
      const responseData = await response.json();

      const loadedBooks = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      setBooks(loadedBooks);
      setIsLoading(false);
    };
    
    fetchBooks();
  }, []);

 if (isLoading) {
   return ( 
   <section className= {classes.BooksLoading}>
     <p> Loading...</p>
   </section>
   );
 }


  const booksList = books.map((book) => (
    <BookItem
      id={book.id}
      key={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));

  return (
    <section className={classes.books}>
      <Card>
        <ul>{booksList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBooks;
