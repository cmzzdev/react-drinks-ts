import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";
import { SearchFilter } from "../types";

export default function SearchForm() {
  const { categories, fetchCategories, searchRecipes } = useAppStore();
  const [searchFilters, setSearchFilters] = useState<SearchFilter>({
    ingredient: "",
    category: "",
  });
  const [error, setError] = useState("");
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(searchFilters).includes("")) {
      setError("All fields are mandatory");
      return;
    }
    // Api call
    searchRecipes(searchFilters);
  };

  return (
    <form
      className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-4">
        <label
          htmlFor="ingredient"
          className="block text-white uppercase font-extrabold text-lg"
        >
          Name or ingredients
        </label>
        <input
          id="ingredient"
          type="text"
          name="ingredient"
          className="p-3 w-full rounded-lg focus:outline-none"
          placeholder="Eg. Vodka, tequila, café"
          onChange={handleChange}
          value={searchFilters.ingredient}
        />
      </div>
      <div className="space-y-4">
        <label
          htmlFor="category"
          className="block text-white uppercase font-extrabold text-lg"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="p-3 w-full rounded-lg focus:outline-none"
          onChange={handleChange}
          value={searchFilters.category}
        >
          <option value="">-- Select one --</option>
          {categories.drinks.map((cat) => (
            <option value={cat.strCategory} key={cat.strCategory}>
              {cat.strCategory}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        value={"Find recipes"}
        className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-bold w-full p-2 rounded-lg uppercase"
      />
    </form>
  );
}
