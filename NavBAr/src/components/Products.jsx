import React from 'react'

 function Products({metadata, setData}) {
console.log(metadata);
const removeHandler=(id)=>{
    const newData=metadata.filter((item)=>item.id!==id);
    setData(newData);
  }
return (


    <div className='flex flex-wrap gap-4 p-4  '>
        {metadata.map((item)=>(
            <div key={item.id} className='flex  bg-gray-100 border shadow-slate-600 rounded-lg p-4 mb-4'>
                <div><img src={item.thumbnail} alt={item.title} className='w-40 h-40 rounded-lg mb-2' />
                <p className='text-lg font-semibold mb-2' search={item.title}>{item.title}</p>
                <p className='text-xl font-bold mb-2'>{item.price}</p>
                <p> rating: {item.rating}</p>
                </div>
                <div className='cursor-pointer' onClick={() => removeHandler(item.id)}>	&#x274C;</div>
            </div>
        ))}
    </div>
  )
}
export default Products;