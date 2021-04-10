import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
    const [img, setimg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setimg(data);
    }


    return (
        <>
        <div className="Search">
        <input type="text" 
        placeholder="search anything" 
        onChange={inputEvent}
        value={img}
        />
        {img === "" ? null : <Sresult name={img}/>}
        
        </div>

        </>
    )
}
export default Search;