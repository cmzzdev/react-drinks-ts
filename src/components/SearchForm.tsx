export default function SearchForm() {
  return (
    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
      <div className="space-y-4">
        <label
          htmlFor="ingredient"
          className="block text-white uppercase font-extrabold text-lg"
        >
          Nombre o Ingredientes
        </label>
        <input
          id="ingredient"
          type="text"
          name="ingredient"
          className="p-3 w-full rounded-lg focus:outline-none"
          placeholder="Nombre o Ingrediente. Ej. Vodka, tequila, café"
        />
      </div>
      <div className="space-y-4">
        <label
          htmlFor="category"
          className="block text-white uppercase font-extrabold text-lg"
        >
          Categoría
        </label>
        <select
          id="category"
          name="v"
          className="p-3 w-full rounded-lg focus:outline-none"
        >
          <option value="">-- Seleccione --</option>
        </select>
      </div>
      <input
        type="submit"
        value={"Buscar recetas"}
        className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-bold w-full p-2 rounded-lg uppercase"
      />
    </form>
  );
}
