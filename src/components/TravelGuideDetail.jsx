import React from "react";
import { useParams } from "react-router-dom";
import travelGuides from "../data/travelGuides";

export default function TravelGuideDetail() {
  const { id } = useParams();
  const guide = travelGuides.find((item) => item.id === parseInt(id));

  if (!guide) return <div>ไม่พบข้อมูล</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 mt-24">
      <h1 className="text-2xl font-bold mb-4 text-center">{guide.title}</h1>
      <img
        src={guide.image}
        alt={guide.title}
        className="w-full h-auto rounded-lg mb-4 shadow-md"
      />
      <div
        className="text-base leading-relaxed"
        dangerouslySetInnerHTML={{ __html: guide.content }}
      />
    </div>
  );
}
