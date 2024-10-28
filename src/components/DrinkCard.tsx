import { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <div className="border shadow-lg">
      <div>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      <div>
        <h2>{drink.strDrink}</h2>
      </div>
    </div>
  );
}
