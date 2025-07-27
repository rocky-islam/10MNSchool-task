import React from "react";

const CourseDetails = ({ sections }) => {
  const details = sections.find((s) => s.type === "about");
  const { name, values } = details;
//   console.log("form details", details);
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <div className="border border-gray-300 mt-5 px-5">
        {values.map((data, i) => (
          <div key={i} className={`${i !== values.length - 1 ? 'border-b border-gray-300' : ''}`}>
            <div className="collapse collapse-arrow bg-base-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold" dangerouslySetInnerHTML={{__html: data.title}}>
                
              </div>
              <div className="collapse-content text-sm" dangerouslySetInnerHTML={{__html: data.description}}>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
