import { useEffect, useRef } from "react";
import { Briefcase, ShoppingCart, Building, Tv, FileText } from "lucide-react";

const industries = [
  { name: "FinTech", icon: <Briefcase size={40} />, description: "Financial Services/Technology" },
  { name: "E-commerce", icon: <ShoppingCart size={40} />, description: "Retail/Technology" },
  { name: "RealTech", icon: <Building size={40} />, description: "Real Estate/Technology" },
  { name: "Media", icon: <Tv size={40} />, description: "Entertainment/Communications" },
  { name: "Invoicing", icon: <FileText size={40} />, description: "FinTech/SaaS" },
];

const IndustryExperience = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0; // Reset to create infinite loop effect
        }
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 30); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-6">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Industry Experience</h2>
      <div className="relative w-full overflow-hidden">
        <div ref={sliderRef} className="flex space-x-10 whitespace-nowrap overflow-hidden">
          {[...industries, ...industries].map((industry, index) => ( // Duplicating for smooth loop
            <div key={index} className="flex flex-col items-center min-w-[200px]">
              <div className="bg-white p-4 rounded-full text-blue-800 shadow-md">{industry.icon}</div>
              <p className="text-gray-500 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExperience;
