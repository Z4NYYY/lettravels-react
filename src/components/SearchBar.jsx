import React, { useState } from "react";
export default function SearchBar() {
    const [searchText, setSearchText] = useState(""); // เก็บค่าช่องค้นหา
    const [selectedDate, setSelectedDate] = useState(""); // เก็บค่าวันที่
    const [selectedProvince, setSelectedProvince] = useState(""); // เก็บค่าจังหวัด

     // ฟังก์ชันจัดการเมื่อกดปุ่มค้นหา
  const handleSearch = () => {
    console.log("Search Text:", searchText);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Province:", selectedProvince);
    // สามารถเพิ่ม logic การค้นหาหรือการกรองข้อมูลได้ที่นี่
    alert(`Searching for: 
    Text: ${searchText}, 
    Date: ${selectedDate}, 
    Province: ${selectedProvince}`);
  };
    return (
      <div className="relative -mt-16 mx-auto max-w-4xl bg-white p-4 rounded-lg shadow-lg flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-l-md"
          value={searchText}
        onChange={(e) => setSearchText(e.target.value)} // เก็บค่าที่ผู้ใช้กรอก
        />
        <input type="date" className="px-4 py-2 border" value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)} // เก็บค่าที่เลือก
      />
        <select className="px-4 py-2 border">
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
  