// we have a dummy_books list acting as alist for now, until we integrate a database

import classes from "./AvailableBooks.module.css";
import Card from "../UI/Card";
import BookItem from "./BookItem/BookItem";

const DUMMY_BOOKS = [
  {
    id: "m1",
    name: "The Lord of the Rings",
    description: "By J. R. R. Tolkien (Hardcover)",
    price: 59.99,
  },
  {
    id: "m2",
    name: "Runescape: The First 20 Years",
    description: "An Illustrated History",
    price: 39.99,
  },
  {
    id: "m3",
    name: "Brave New World",
    description: "By Aldous Huxley",
    price: 14.49,
  },
  {
    id: "m4",
    name: "Harry Potter & The Goblet of Fire",
    description: "#4 in the series (Paperback)",
    price: 12.99,
  },
];

const AvailableBooks = () => {
  const booksList = DUMMY_BOOKS.map((book) => (
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
