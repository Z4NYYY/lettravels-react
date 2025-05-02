import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination.trim()) {
      onSearch(destination);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative -mt-16 mx-auto max-w-4xl bg-white p-4 rounded-lg shadow-lg flex justify-center"
    >
      <input
        type="text"
        placeholder="ค้นหาสถานที่"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="px-4 py-2 border rounded-l-md w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
      >
        ค้นหา
      </button>
    </form>
  );
}
