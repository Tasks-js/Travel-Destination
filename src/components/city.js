import data from "../data/db.json"
import TourDetails from "./TourDetails/TourDetails"


export default function Test (prop) {
    return(
        <>
      {
data.map(ele=>{
 
 return(


<TourDetails one={ele.info} />

 )


})


      }  
        
        </>
    )
    
}