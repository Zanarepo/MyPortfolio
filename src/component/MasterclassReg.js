import { useState } from "react";
import { X } from "lucide-react";

const Registration = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-800 text-white text-center py-3 z-50 flex justify-between items-center px-6">
      <p className="text-sm md:text-base">
        📢 <strong>Zee Product Master-Class Registration Ongoing!</strong> Click to register.
      </p>
      <div className="flex items-center gap-4">
        <button 
          className="bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-200"
          onClick={() => window.location.href = "https://zee-masterclass.netlify.app/"}
        >
          Register Now
        </button>
        <button 
          className="text-white hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default Registration;
