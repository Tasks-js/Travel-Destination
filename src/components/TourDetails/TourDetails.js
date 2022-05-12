import { useParams } from "react-router-dom" ;
import { useState } from "react";
import React from "react";
import data from "../../data/db.json"
export default function TourDetails(prop){

    const [seeMore,setseeMore] = useState(false);

function Click(){

    setseeMore(!seeMore) ;
}

    const {id}=useParams() ;

    return(

 data.map(ele =>{

   if(ele.id===id)
{

    return (
        <div>
        <img src={ele.image} alt={ele.name}  />
        <h2>{ele.name}</h2>
        <h3>{seeMore ? ele.info : `${ele.info.substring(0, 300)}....`}
         <button  onClick={Click}>{seeMore? "See Less":"See More"}</button>
        </h3>
        <h3>{ele.price}</h3>
        </div>
    )
}

 }) 
 )
}