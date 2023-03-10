import Meals from "./Meals";
import "./MealsComponent.css";
import Card from "../Card/Cards";
import MealItems from "./MealItem";
import MealItemForm from "./MealItemForm";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <li>
     
      <MealItems key={Math.random().id}  name={meal.name}
      description= {meal.description}
      price= {meal.price}/>
    
    </li>
  ));
  

  return (
    <div>
    <section className="meals">
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
    </div>
  );
};

export default AvailableMeals;
