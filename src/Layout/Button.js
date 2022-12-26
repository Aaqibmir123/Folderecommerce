import { Fragment, useContext } from "react";
import classes from './Header.module.css';
import Cardcontext from "./store/Cardcontext";
const Button=(props)=>{
const Cardcontexts=useContext(Cardcontext);

let quanty=0;
const result=Cardcontexts.items.map(item=>{
   return quanty*quanty+ Number(item.quanty);
})
    
    return(
        <Fragment>
            <div className={classes.button} onClick={props.onClick}>
                <span>Your Cart</span>
                <span className={classes.badge}>{result}</span>
            </div>
        </Fragment>

    )
}
export default Button;