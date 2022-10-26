
export const DeletVideo = async (props) => {
    try{
        let result = await fetch(`http://localhost:3001/Api/${props.id}`, {method: "DELETE"})
        if(result.status <= 200) {console.log("Deleted");}
    }
    catch(err){console.log(err)}
    finally{}

}
