import Header from "../Header/Header";
import Tours from "../Tours/Tours";

const data =require ("/home/mohammad/task16/travels/src/data/db.json")

function Home(prop) {
    return(
<>
<Header/>

 {data.map(element =>{

return (

<Tours images={element.image} names={element.name} />
)
    


 })
}

 
</>
    )

}

export default Home;