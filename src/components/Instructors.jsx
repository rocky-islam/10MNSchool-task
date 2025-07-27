import React from "react";

const Instructors = ({ sections }) => {
//   console.log("inst", sections);
  const inst = sections.find((s) => s.type == "instructors");
//   console.log(inst.name);
//   console.log(inst.values[0].description);
  //   const description = inst.values[0].description;
  const { name, description, image } = inst.values[0];
  return (
    <div>
      <h2 className="text-2xl mt-10 font-semibold">{inst.name}</h2>
      <div>
        <div className="flex gap-6 items-center border border-gray-300 mt-2 p-5">
            <img src={image} alt="" className="rounded-full w-20"/>
          <div>
            <p>{name}</p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
