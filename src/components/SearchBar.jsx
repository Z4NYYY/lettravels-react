export default function SearchBar() {
    return (
      <div className="relative -mt-16 mx-auto max-w-4xl bg-white p-4 rounded-lg shadow-lg flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-l-md"
        />
        <input type="date" className="px-4 py-2 border" />
        <select className="px-4 py-2 border">
          <option value="">Province</option>
          <option value="Bangkok">Bangkok</option>
          <option value="Phuket">Phuket</option>
        </select>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
          Search
        </button>
      </div>
    );
  }
  