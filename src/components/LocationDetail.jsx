import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations.json";

export default function LocationDetail() {
  const { id } = useParams();
  const location = locations.find((loc) => loc.id === parseInt(id));

  if (!location) {
    return (
      <div className="p-10 text-center text-red-500 font-bold">
        ❌ ไม่พบข้อมูลสถานที่
      </div>
    );
  }

  const getBadgeColor = (tag) => {
    switch (tag) {
      case "ยอดนิยม":
        return "bg-yellow-100 text-yellow-800";
      case "เงียบสงบ":
        return "bg-indigo-100 text-indigo-800";
      case "เหมาะกับครอบครัว":
        return "bg-pink-100 text-pink-800";
      case "ทะเลใส":
        return "bg-blue-100 text-blue-800";
      case "ธรรมชาติ":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <img
        src={location.image}
        alt={location.name}
        className="w-full h-96 object-cover rounded-xl shadow-md mb-6"
      />

      <h1 className="text-3xl font-bold text-gray-900">{location.name}</h1>

      <div className="flex flex-wrap items-center gap-3 mt-3 mb-6">
        {location.rating && (
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            ⭐ {location.rating} คะแนนรีวิว
          </span>
        )}
        {location.tags?.map((tag, index) => (
          <span
            key={index}
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${getBadgeColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-10">{location.details}</p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">ภาพบรรยากาศ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(location.gallery || [location.image]).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg h-40 object-cover w-full shadow"
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">สิ่งที่คุณจะได้สัมผัส</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>หาดทรายขาวละเอียด น้ำทะเลใส</li>
          <li>กิจกรรมดำน้ำตื้นและดำน้ำลึก</li>
          <li>บรรยากาศเงียบสงบ เป็นส่วนตัว</li>
          <li>สามารถเดินป่าศึกษาธรรมชาติ</li>
        </ul>
      </div>

      {location.activities && (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow border">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">กิจกรรมแนะนำ</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {location.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      )}

      {location.mapEmbedUrl && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">แผนที่สถานที่</h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow">
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      )}

      {location.travelGuide && (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-3 text-blue-900">การเดินทาง</h3>
          <p className="text-gray-700 leading-relaxed">{location.travelGuide}</p>
        </div>
      )}
    </div>
  );
}
