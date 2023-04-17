
const DeletVideo = async (props) => {
    try{
        console.log(props.myid);
        let result = await fetch(`http://localhost:5000/Topchart`,
         {
        method: "DELETE",
         body: JSON.stringify({"title": props.myid})})
        // if(result.status <= 200) console.log("good");
        // {window.location.reload(false)} 
    }
    catch(err){
        console.log(err.massage)
    }
    finally{}

}
export default DeletVideo;
