import { useState, useEffect } from "react";

const Welcome = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center animate-fadeIn">
        <h2 className="text-xl font-bold">Welcome to My Website! 🎉</h2>
        <p className="text-gray-600 mt-2">We’re glad to have you here.</p>
      </div>
    </div>
  );
};

export default Welcome;
