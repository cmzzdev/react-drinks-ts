import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  const { drinks } = useAppStore();
  const hasRecipes = useMemo(() => drinks.drinks.length, [drinks]);
  return (
    <>
      <h1 className="text-6xl font-extrabold">Recipes</h1>
      {hasRecipes ? (
        <>
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </>
      ) : (
        <>
          <p>There are no results, use the form to search recipes</p>
        </>
      )}
    </>
  );
}
