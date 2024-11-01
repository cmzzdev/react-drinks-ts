import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const { selectRecipe } = useAppStore();
  return (
    <div className="border shadow-lg">
      <div className="overflow-x-hidden">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          See details
        </button>
      </div>
    </div>
  );
}
