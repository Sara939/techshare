import BasicVideo from "../components/featurs/CardGuide/BasicVideo";
import CardGuide from "../components/featurs/CardGuide/CardGuide";
import Addchannel from "../components/pages/addchannel/addchannel";


async function Apipost() {

    const postData = async () => {
      try{
        return await fetch("https://my-json-server.typicode.com/sara-likaount/apidata/db", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(video)
        })
        .then(data => data.json())
    }
    catch(err){
        console.log(err);}
    finally{}
}

    return (
    <div className="data">
 
        {
           <div>
               <BasicVideo videoname= {user.videoname}/>
                <CardGuide title= {user.title} text={user.text}/>  
            </div>
        }

    </div>
    )

}
export default Apipost;