import React from "react";
import { useState } from "react";


const Filter = (props)=>{

    const selectionHendler=(e)=>{
        props.onselectionHendler(e.target.value)
    };

    return (
        <div>
            <label htmlFor="subject">Filter by category</label>
            <select id="subject" onClick={selectionHendler} >
                {/* <option value="all">all</option> */}
                <option value="js">js</option>
                <option value="react">react</option>
                <option value="node.js">node.js</option>
            </select>
        </div>
    )
};

export default Filter;