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
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <>
          <p className="mt-6 text-center text-lg">
            There are no results, use the form to search recipes
          </p>
        </>
      )}
    </>
  );
}
