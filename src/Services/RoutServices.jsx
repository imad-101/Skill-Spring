import { useState } from "react";
import ServiceCard from "./ServiceCard";
function RoutServices() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Web Development", icon: "💻" },
    { name: "Graphic Design", icon: "🎨" },
    { name: "Digital Marketing", icon: "📈" },
    { name: "Tutouring Services ", icon: "👨‍🏫" },
    { name: "Video Editing", icon: "📹" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-green-100">
      {!selectedCategory ? (
        <>
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            Freelance Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:shadow-xl transition-shadow transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              {selectedCategory}
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-10 mx-12 ">
            <ServiceCard
              img={"pixel.jpg"}
              title={"Web Development"}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aliquid suscipit Praesentium quo soluta quae quia doloribus magnam
            consequuntur aliquid perspiciatis qui cum blanditiis excepturi
            dignissimos itaque numquam ipsa eaque"
              price={"Rs 5500"}
            />
            <ServiceCard
              img={"pixel.jpg"}
              title={"Web Development"}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aliquid suscipit Praesentium quo soluta quae quia doloribus magnam
            consequuntur aliquid perspiciatis qui cum blanditiis excepturi
            dignissimos itaque numquam ipsa eaque"
              price={"Rs 5500"}
            />
            <ServiceCard
              img={"pixel.jpg"}
              title={"Web Development"}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aliquid suscipit Praesentium quo soluta quae quia doloribus magnam
            consequuntur aliquid perspiciatis qui cum blanditiis excepturi
            dignissimos itaque numquam ipsa eaque"
              price={"Rs 5500"}
            />
            <ServiceCard
              img={"pixel.jpg"}
              title={"Web Development"}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aliquid suscipit Praesentium quo soluta quae quia doloribus magnam
            consequuntur aliquid perspiciatis qui cum blanditiis excepturi
            dignissimos itaque numquam ipsa eaque"
              price={"Rs 5500"}
            />
            <ServiceCard
              img={"pixel.jpg"}
              title={"Graphic Designing"}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aliquid suscipit Praesentium quo soluta quae quia doloribus magnam
            consequuntur aliquid perspiciatis qui cum blanditiis excepturi
            dignissimos itaque numquam ipsa eaque"
              price={"Rs 5500"}
            />
          </div>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-6 px-4 mt-10 py-2 bg-blue-200 text-white rounded-lg hover:bg-blue-300 transition-colors"
          >
            Back to Categories
          </button>
        </>
      )}
    </div>
  );
}

export default RoutServices;
