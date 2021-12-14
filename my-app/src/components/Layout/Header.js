// This is the main file for the Header
import { Fragment } from "react";
import booksImage from "../../assets/books3.webp";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Shelves</h1>
        <HeaderCartButton onCartClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={booksImage} alt="Lovely Books Stacked!" />
      </div>
    </Fragment>
  );
};

export default Header;
