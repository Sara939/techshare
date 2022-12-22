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
                <option value="js">Java Script</option>
                <option value="react">React</option>
                <option value="node">Node.js</option>
            </select>
        </div>
    )
};

export default Filter;