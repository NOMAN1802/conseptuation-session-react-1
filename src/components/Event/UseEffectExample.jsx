import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        // fetch(`https://api.github.com/users`)
        // .then(res => res.json())
        // .then(data => setData(data))
        const loadData = async() =>{
           const res = await fetch(`https://api.github.com/users`) 
           const data = await res.json();
           setData(data);
        }
        loadData();
    },[]);
    // console.log(data)
    
    return (
        <div>
            <h1>Hello</h1>
            {
                data.map((singleData) =>{
                  return<img src={singleData.avatar_url} alt="" /> 
                })
            }
        </div>
    );
};

export default UseEffectExample;