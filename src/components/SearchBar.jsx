import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
export default function SearchBar({onSearch}) {
    const [searchText, setSearchText] = useState(""); // เก็บค่าช่องค้นหา
    const [selectedDate, setSelectedDate] = useState(""); // เก็บค่าวันที่
    const [selectedProvince, setSelectedProvince] = useState(""); // เก็บค่าจังหวัด
    const [autocomplete, setAutocomplete] = useState(null);

     // ฟังก์ชันจัดการเมื่อกดปุ่มค้นหา
  const handleSearch = () => {
    const searchData = {
      searchText,
      selectedDate,
      selectedProvince,
    };

    if (onSearch) {
      onSearch(searchData); // ส่งข้อมูลไปยังคอมโพเนนต์แม่
    }
  };

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setSearchText(place.formatted_address || place.name);
    }
  };

    return (
      <div className="relative -mt-16 mx-auto max-w-4xl bg-white p-4 rounded-lg shadow-lg flex justify-center">
         <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-l-md"
          value={searchText}
        onChange={(e) => setSearchText(e.target.value)} // เก็บค่าที่ผู้ใช้กรอก
        />
        </Autocomplete>
        <input 
        type="date" 
        className="px-4 py-2 border" 
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)} // เก็บค่าที่เลือก
      />
        <select 
        className="px-4 py-2 border"
        value={selectedProvince}
        onChange={(e) => setSelectedProvince(e.target.value)} // เก็บค่าจังหวัดที่เลือก
      >
          <option value="">Province</option>
          <option value="Bangkok">Bangkok</option>
          <option value="Phuket">Phuket</option>
        </select>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
        onClick={handleSearch}>
          Search
        </button>
      </div>
    );
  }
  