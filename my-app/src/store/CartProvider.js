// to manage the cart context to data, and provide that context to all components that want access to it
import CartContext from "./cart-context";
import { useReducer } from "react";

// allows us to wrap any component that should get access to this context with the cartprovider component
// we can add the logic so that this component manages all the code rather than having other components do it

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // groups items, and show if they have multiple of them
  // state is the last snapshot
  if (action.type === "ADD") {
    const updatedtotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem; //overrides
      } else {
        updatedItems = state.items.concat(action.item);
      }

    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id); // executed in every item - keep all items, but remove id
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if(action.type === 'CLEAR') {
    return defaultCartState
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  // useReducer function
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // returns an array with 2 elements - first is the snapshot, and the second is the action
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  // remove item function
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
  };

  // add and remove item functions are called here
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
