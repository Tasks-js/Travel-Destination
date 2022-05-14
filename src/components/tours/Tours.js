import Tour from "./tour/Tour";
import data from "../../data/db.json";


function Tours(prop){
return(
    <>
    
    {data.map(element =>{

return (

<Tour images={element.image} names={element.name} ids={element.id} />
)
})
}
  
    </>
)

}

export default Tours ;