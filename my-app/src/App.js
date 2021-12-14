/*
This is the main file which is used to group all the components
The hierachy is app -> Header, Meals, Cart -> their respective trees
*/


import {useState} from "react"; // we added useState from react because we manage the cart with fragment
import Header from "./components/Layout/Header";
import Books from "./components/Books/Books";
import Cart from "./components/Cart/Cart"; // this is used in here because it is a modal with a portal
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartisShown] = useState(false);

  //adding functions when the cart is clicked or clicked outside of modal
  const showCartHandler = () => {
    setCartisShown(true);
  }

  const hideCartHandler = () => {
    setCartisShown(false);
  }

  // remove fragment as the CartProvider is managing all the code since each component needs access to the CartProvider
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Books />
      </main>
    </CartProvider>
  );
}

export default App;
