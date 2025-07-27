import React from 'react';

// This section for Course exclusive Feature
const PDFDownload = ({sections}) => {
    const exclusiveFeature = sections.find(s => s.type === "feature_explanations");
    // console.log("pdf option", exclusiveFeature);
    const {name, values} = exclusiveFeature;
    return (
        <div className='mt-15'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <div className='border border-gray-300 rounded p-5 mt-5'>
                {
                    values.map((data, index) => <div key={data.id} className={`mt-4 ${index === 1 ? 'border-t border-gray-300 pt-6' : ''}`}>
                        <div className='grid grid-cols-3 gap-6'>
                            <div className='col-span-2'>
                            <p className='my-5 text-lg'>{data.title}</p>
                            <div>
                                {(data.checklist).map((item, i) => <p key={i} className='my-2'><span className='text-blue-500 font-semibold mr-1.5'> &#10003; </span>{item}</p>)}
                            </div>
                        </div>
                        <div>
                            <img src={data.file_url} alt="" />
                        </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PDFDownload;