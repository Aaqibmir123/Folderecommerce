import { useState } from "react";
import Model from "../Ui/Model";
const Card = (props) => {
  // const [Button,CloseButton]=useState();
  const CardItems = (
    <ul className="">
      {
      [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map( (item) => (
        <li>{item.name} {item.amount} {item.price}</li>
      ))}
    </ul>
  );

  return (
    <Model>
      {CardItems}
      <div className="">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="">
        <button className="" onClick={props.onclose}>Close</button>
        <button className="">Order</button>
      </div>
    </Model>
  );
};

export default Card;