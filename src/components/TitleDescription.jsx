

const TitleDescription = ({ title, description }) => {
  // console.log("check desc",title, description)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default TitleDescription;
