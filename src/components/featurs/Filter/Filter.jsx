import React from "react";

const Filter = ()=>{

    const selectionHendler=(e)=>{
        console.log(e.target.value);
    };

    return (
        <div>
            <label htmlFor="subject">Filter by subject</label>
            <select id="subject" onClick={selectionHendler} >  
                <option value="js">js</option>
                <option value="react">react</option>
                <option value="node.js">node.js</option>
            </select>
        </div>
    )
};

export default Filter;