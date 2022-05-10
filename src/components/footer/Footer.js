function Footer(prop) {
    let facebookUrl = "https://www.facebook.com/BestDestinationsToTravel/";
    let youtubeUrl = "https://www.youtube.com/watch?v=Hmu4bQxfpDA";
    let fbImg = "https://kernel.sr/wp-content/uploads/2020/06/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png";
    let ytImg = "https://i.pinimg.com/originals/09/f4/72/09f4726125ab5fa8cbcf754b9ba07e7c.jpg";
    return(
<>
<h4>Qais Almanasra & Mohammad Alhaj</h4>
<a href={facebookUrl}>
<img alt="FB" src={fbImg}
 width="100" height="70"/></a>
 <a href={youtubeUrl}>
<img alt="FB" src={ytImg}
 width="100" height="70"/></a>
</>
    )
}

export default Footer ;