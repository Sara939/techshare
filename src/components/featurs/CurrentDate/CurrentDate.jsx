import "./CurrentDate.css";

function CurrentDate(){
  const currentDay= new Date().getFullYear()
  const currentMonth= new Date().toLocaleString('default', { month: 'long' })
  const currentYear= new Date().toLocaleString('default', { day: '2-digit' })
 
 return(
  <div className="dates">
    <div>{currentYear}</div>
    <div>{currentMonth}</div>
    <div>{currentDay}</div> 
 
  </div>
 )
}
export default CurrentDate;