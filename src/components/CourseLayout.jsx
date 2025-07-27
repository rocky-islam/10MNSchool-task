import React from 'react';

const CourseLayout = ({ sections }) => {
      const layout = sections.find(s => s.type === 'features');
    //   console.log(layout)

      const {name, values} = layout;
    //   console.log(values)

    return (
        <div className='mt-15'>
            <h2 className='font-semibold text-2xl'>{name}</h2>
            <div className='grid md:grid-cols-2 gap-6 mt-5 bg-[#111827] p-5 rounded'>
                {values.map(data => <div key={data.id}>
                    <div className='flex items-start gap-6'>
                        <img src={data.icon} alt="" />
                        <div>
                            <h3 className='text-white'>{data.title}</h3>
                            <p className='text-gray-300'>{data.subtitle}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default CourseLayout;