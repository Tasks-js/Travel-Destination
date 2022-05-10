import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Footer from "../footer/Footer"
import data from "../data/db.json";
//const data =require ("/home/qaismaher/Tasks/task16/Travel-Destination/src/data/db.json");

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
<Footer/>

 
</>
    )

}

export default Home;