import './MealsComponent.css';
import MealItemForm from './MealItemForm';
import Input from '../Ui/Input';
const MealItems=props=>{
    const price=`$${props.price.toFixed(2)}`;
    return(
        <li>
            <div>
            <div className="meal"><h3>{props.name}</h3> </div>
            <div className='scription'>{props.description}</div>
            <div className='price'>{price}</div>
            <div>
            </div>
            <MealItemForm id={props.id} item={props}/>
            
            </div>
        </li>
    )
}

export default MealItems;