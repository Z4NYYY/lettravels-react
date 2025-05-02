import React from "react";
import { Link } from "react-router-dom";
import travelGuides from "../data/travelGuides";

export default function TravelGuide() {
  return (
    <div className="pt-24 pb-12 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        คู่มือท่องเที่ยวแนะนำ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelGuides.map((guide) => (
          <Link
            to={`/guide/${guide.id}`}
            key={guide.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
            />
            
            <div className="p-4">
              <h3 className="text-md sm:text-lg font-semibold text-gray-800 leading-tight mb-1 line-clamp-2">
                {guide.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {guide.description}
              </p>
              <span className="text-blue-500 text-sm mt-2 inline-block hover:underline">
                อ่านเพิ่มเติม
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
