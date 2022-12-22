
const DeletVideo = async (props) => {
    try{
        console.log(props.myid);
        let result = await fetch(`http://localhost:3001/Api/${props.myid}`, {method: "DELETE"})
        if(result.status <= 200) {window.location.reload(false)} 
    }
    catch(err){
        console.log(err.massage)
    }
    finally{}

}
export default DeletVideo;
