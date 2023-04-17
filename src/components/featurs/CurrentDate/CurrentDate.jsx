import "./CurrentDate.css";

function CurrentDate(){
  const currentDay= new Date().getFullYear()
  const currentMonth= new Date().toLocaleString('en-US', { month: 'long' })
  const currentYear= new Date().toLocaleString('default', { day: '2-digit' })
 
 return(
  <div className="btn grey lighten-3 z-depth-0 date">
    <div>{currentYear}</div>
    <div>{currentMonth}</div>
    <div>{currentDay}</div> 
  </div>
 )
}
export default CurrentDate;