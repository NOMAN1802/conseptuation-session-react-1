import React, { useState } from 'react';

const ObjectExample = () => {
    const [value, setValue] = useState({
        name: 'noman',
        age: 28,
        hobby: 'Football',
    });
    const handleShowMe = ()=>{
        setValue({
            ...value,
            age: 29,
            hobby: 'Cricket'
        })
    }

    return (
        <div className='text-center mt-5 text-3xl font bold'>
           <h1>{value.name}</h1>
           <p>{value.age}</p>
           <p>{value.hobby}</p>
           <button className='btn btn-danger' onClick={handleShowMe}>Show Me</button>
        </div>
    );
};

export default ObjectExample;