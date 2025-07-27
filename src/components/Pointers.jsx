import React from 'react';

const Pointers = ({ sections }) => {
    const pointers = sections.find(s => s.type === 'pointers');
    // console.log("from pointer", pointers)
    const {name, values} = pointers
    return (
        <div className='mt-11'>
            <div>
                <p className='text-2xl font-semibold'>{name}</p>
                <div className='grid md:grid-cols-2 gap-10 border border-gray-300  rounded p-5 mt-3'>
                    {
                        values.map(data => <div key={data.id}>
                            <p><span className='text-blue-500 font-semibold'> &#10003; </span> {data.text}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pointers;