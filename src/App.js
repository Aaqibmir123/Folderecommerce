import { useState } from 'react';
import Model from './Ui/Model';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Card from './Card/Cards';
import CardProvider from './Layout/store/CardProvider';
function App() {

  const [CardShow,setcardHide]=useState(false);

  const cardhandlerShow=()=>{
    setcardHide(true);
  }
const cardhandlerHide=()=>{
  setcardHide(false);
}


  return (
    <CardProvider>
      {CardShow && <Card  onclose={cardhandlerHide}/>}
      <Header  onshow={cardhandlerShow}/>
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;