import React from "react";

const Checklist = ({ items }) => {
    // console.log("items from check list", items)
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">এই কোর্সে যা থাকছে</h2>
      <div>
        <ul className="px-2 py-1">
        {items.map((item, idx) => (
          <li key={idx}>
            <div className="flex items-center gap-4 py-2">
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Checklist;
