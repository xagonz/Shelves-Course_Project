import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./BookItem.module.css";
import BookItemForm from "./BookItemForm";

const BookItem = (props) => {
  const cartCtx = useContext(CartContext);
  // it's not single quotes but a tilde. Also, you do one $ which is what is going to be displayed
  // and the second $ is used with {} to inject dynamic content
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    }); // points to addItem in the CartProvider since it is a context
  };

  return (
    <li className={classes.book}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <BookItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default BookItem;
