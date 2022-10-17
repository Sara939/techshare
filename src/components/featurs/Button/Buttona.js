import "../Button/Button.css"

function Buttona(props){
    return (
        <button className="button">{props.children}</button>
    )
}

export default Buttona;