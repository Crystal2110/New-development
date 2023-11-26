import React from "react"
import Spots from "../components/Spots"
import data from "../data"
// import Image from "../components/Image"
// import china from "../images/china.jpeg"
// import russian from "../images/russian.jpeg"
// import image1 from "./images/meridian1.jpeg"
// import image2 from "./images/cacun1.jpeg"
// import image3 from "./images/china.jpeg"
// import image4 from "./images/russuan1.jpeg"
// import image5 from "./images/lebanon3.jpeg"
// import image6 from "./images/australia.jpeg"

export default function Card(){
const cards = data.map(item=> {
      return (
            <Spots
                  key={item.id}
                  {...item}

            />
           
      )
})

return (
      <div>
            <h1>Explore stays in trending destinations</h1>
            <section className="cards-list">
                  {cards}
            </section>
      
            {/* <i src={russian} className="russian" /> */}
      </div>

)
}