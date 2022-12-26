import { Fragment, useContext, useState } from "react"
import './MealItem.css';
import Input from "../Ui/Input";
import Cardcontext from "../Layout/store/Cardcontext";
const MealItemForm=props=>{
 
  let cardcontext=useContext(Cardcontext);
    const addcarditem=(e)=>{
      e.preventDefault();
      // cardcontext.items.push(props.item);
      
     cardcontext.addItem(props.item);
     const quanty=document.getElementById('amount' + props.id).value;
     cardcontext.addItem( {...props.item, quanty:quanty} );
     
      console.log(cardcontext);
    }
    return(
       
        <Fragment>
           {console.log(cardcontext.items)}
            <form className="form">
      <Input
        label='Amount'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addcarditem}>+ Add</button>
    </form>
        </Fragment>
    )
}
export default MealItemForm;