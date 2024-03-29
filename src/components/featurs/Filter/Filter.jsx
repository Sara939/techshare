import React from "react";

const Filter = (props)=>{

    const selectionHendler=(e)=>{
        props.onselectionHendler(e.target.value)
    };

    return (
    <div className="container browser-default">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="select1 green-text">
                        <select  className="browser-default" onClick={selectionHendler} >
                            <option value=""
                                    disabled selected>
                              Search by Category
                          </option>
                            <option value="js">
                              Java Script</option>
                            <option value="react">
                              React</option>
                            <option value="node">
                              Node.JS</option>
                        </select>
                    </div>
                    </div>
                </form>    
            </div>

        
    </div>
    )
};

export default Filter; 
