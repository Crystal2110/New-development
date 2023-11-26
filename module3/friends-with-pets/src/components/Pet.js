import React from "react"
import data from "../friendData"

export default function Pet({Petsname, Petsbreed}) {
      let petIcon = null
       if (Petsbreed.includes('cat') ) {
            petIcon = <i className="fa-solid fa-cat"></i>
       } else {
            petIcon = <i className="fa-solid fa-dog"></i>
       }
      return (
           <div>
           
            {/* <h3 className="pets">
                <a href="./" className="Pets-icon">
                <i className="fa-solid fa-paw"></i>
                </a>
                &nbsp; Pets: 
            </h3> */}
                  {/* {petIcon && <div className="petIcon">{petIcon}</div>} */}
                  <p className="pet-name">
                       {petIcon} name: {Petsname}
                  </p>

                  <p className="pet-breed">
                        breed: {Petsbreed}
                  </p>
            
            <hr />      
           </div>
      )
}
