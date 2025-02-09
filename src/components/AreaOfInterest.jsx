import React from "react";

const areasOfInterest = [
  "Machine Learning",
  "Artificial Intelligence",
  "Natural Language Processing",
  "Cloud Computing",
  "Data Mining",
  "Networking",
  "Web Designing",
  "Data Structure",
];

const AreaOfInterest = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 ">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Area of Interest
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {areasOfInterest.map((interest, index) => (
          <li key={index} className="text-lg text-gray-800">
            {interest}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AreaOfInterest;
