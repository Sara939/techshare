import React from "react";

const Filter = (props)=>{

    const selectionHendler=(e)=>{
        props.onselectionHendler(e.target.value)
    };

    return (
    <div class="container">
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <label>Select</label>
                    <div class="select1 green-text">
                        <select onClick={selectionHendler} >
                            <option value=""
                                    disabled selected>
                              Select Topic
                          </option>
                            <option value="1">
                              Machine Learning</option>
                            <option value="2">
                              Web Development</option>
                            <option value="3">
                              Language</option>
                        </select>
                    </div>
                    </div>
                </form>    
            </div>

        
    </div>
    )
};

export default Filter; 
       {/* <div>
            <label htmlFor="subject">Filter by category</label>
            <select id="subject" >
                <option value="js">Java Script</option>
                <option value="react">React</option>
                <option value="node">Node.js</option>
            </select>
        </div>  */}