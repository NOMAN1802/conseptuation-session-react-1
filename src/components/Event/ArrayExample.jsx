import React, { useState } from 'react';
import guns from "../../test"
// bonus task of assignment
const ArrayExample = () => {
    const [data, setData] =useState(guns);
    
    const handleRemove = () =>{
        setData([]);
    }
    const handleSingleRemove = (id)=>{
       const filteredData = data.filter((d) => d.id != id);
       setData(filteredData);
    }
    const handleChange = (value) =>{
      console.log(value);
    }
    return (
        <div>
            <div className='text-center text-xl font bold my-2'>
            
            {
             data && data.map((singleData) => 
             (
             <>
             <p>{singleData.name}</p>
             <button className='btn btn-primary mt-4 btn=xs' onClick={()=>handleSingleRemove(singleData.id)}> Remove</button>
             </>

             ) ) }
        </div>
        <div className='text-center'>
        <button className='btn btn-acc
        ' onClick= {()=> handleRemove()}>Remove All</button>
        {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
        <input type="text" onChange={(e)=> handleChange(e.target.value)} />
        </div>
        </div>
    );
};

export default ArrayExample;