import React from "react";
import { Context } from "react";
const Cardcontext = React.createContext({
    items:[],
    amount:0,
    addItem:(item)=>{},
    removeitem:(id)=>{}
    
});
export default Cardcontext;