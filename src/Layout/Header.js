import { Fragment, useContext, useState } from "react"
import classes from './Header.module.css';
import res from './meals.jpg';
import Button from "./Button";
import Cardcontext from "./store/Cardcontext";
const Header =props=>{
    const cardcontext=useContext(Cardcontext);
    return(
        <Fragment>
            <header className={classes.header} onClick={props.onshow}>
                <h1>React Meals</h1>
                <span>{cardcontext.message}</span>
                <Button />
            </header>
            <div className="classes['main-image]">
               <img src={res} alt="not found" />
            </div>
        </Fragment>
    )

}

export default Header;