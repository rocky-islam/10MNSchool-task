import React from "react";

const CTA = ({ cta }) => {
//   console.log(cta);
  return (
    <div>
      
      <div className="py-6 rounded-lg text-center">
        <h1 className="text-xl font-semibold">৳1000</h1>
        <button className="mt-4 w-full px-6 py-2 bg-[#15803D] text-white rounded hover:bg-blue-700">
          {cta.name || "Enroll Now"}
        </button>
      </div>
    </div>
  );
};

export default CTA;
