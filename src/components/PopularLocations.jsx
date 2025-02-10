import Slider from "react-slick";

const locations = [
  {
    name: "เกาะกระดาน",
    image: "/images/beach1.jpg",
    description: "น้ำทะเลใส หาดทรายขาว",
  },
  {
    name: "อ่าวมาหยา",
    image: "/images/beach2.jpg",
    description: "หาดสวยงาม โอบล้อมด้วยภูเขา",
  },
  {
    name: "เกาะสีชัง",
    image: "/images/beach3.jpg",
    description: "ธรรมชาติสมบูรณ์เหมาะแก่การพักผ่อน",
  },
  {
    name: "เกาะหลีเป๊ะ",
    image: "/images/beach4.jpg",
    description: "ทะเลสีครามใส หาดทรายละเอียด",
  },
];

export default function PopularLocations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Popular Locations</h2>
      <Slider {...settings} className="px-6">
        {locations.map((loc, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{loc.name}</h3>
                <p className="text-sm text-gray-600">{loc.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
