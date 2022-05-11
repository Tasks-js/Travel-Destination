import { Link } from "react-router-dom";



function Tour(prop){
    return(
        <>
        
    <p>{prop.names}</p>

 <div><Link to={`/city/${prop.ids}`}>Read more about {prop.names}</Link></div> 

 
    <img src= {prop.images} alt="Hello" />
        

        </>
    )
    
    }
    
    export default Tour ;