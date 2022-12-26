import { useReducer, useState } from 'react';
import Cardcontext from './Cardcontext';



// const cartReducer = (state, action) => {
//   if (action.type === 'ADD') {
//     const updatedItems = state.items.concat(action.item);
//     const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount
//     };
//   }
//   return defaultCartState;
// };

const CartProvider = (props) => {
  const [items,updatedItems]=useState([]);
  const addItemToCartHandler = (item) => {
    // dispatchCartAction({type: 'ADD', item: item});
    // items.push(item);
    updatedItems([...items,item]);
    console.log(cartContext,'inside fun');

  };
 

  //udemy trainner done this 
  // const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

 

  const removeItemFromCartHandler = (id) => {
    // dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message:"welcome back"
  };

  return (
    <Cardcontext.Provider value={cartContext}>
      {props.children}
    </Cardcontext.Provider>
  );
};

export default CartProvider;