// import image1 from "./images/merdian1.jpeg"
// import image2 from "./images/cacun1.jpeg"
// import image3 from "./images/china.jpeg"
// import image4 from "./images/russuan1.jpeg"
// import image5 from "./images/lebanon3.jpeg"
// import image6 from "./images/australia.jpeg"
// import image1 from "."
import React from "react"
import imageList from "../data"



// function imageCom() {
//       return(
//             <div>
//                   {imageList.map((image)=> (
//                         <img key={image.id} src={image.src}></img>
//                   ))}
//             </div>
//       )
// };



const ImageCom = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.src} />
      ))}
    </div>
  );
};

export default ImageCom;
