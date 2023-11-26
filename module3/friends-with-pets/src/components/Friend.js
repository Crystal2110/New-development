import React from "react"
// import data from "../friendData"
import Pet from "./Pet"


export default function Friend(props) {
      // const postPet = props.pets.map(pet => (
      //    const postPet = array.isArray(props.pets)
      //    ? props.pets.map((pet) => (

      const postPet = props.ownerPets.map(pet => (
                  <Pet
                  key={pet.name}
                  Petsname={pet.name}
                  Petsbreed={pet.breed}

                  
                  
                  
              />
            )
      )
      
      return (
           
                  <div className="Friend">



                        <h3 className="post-name">
                        <a href="./" className="Pets-icon">
                        <i className="fa-solid fa-user"></i>
                        </a>
                        &nbsp; Name: {props.ownerName}
                        </h3>

                        <h3 className="post-age">
                        Age: {props.ownerAge}
                        </h3>
                         
                        <div className="Pets">
                        <h3>
                        <a href="./" className="Pets-icon">
                        <i className="fa-solid fa-paw"></i>
                        </a>
                        &nbsp; Pets: 
                        </h3>

                        <div className="post-pets">
                        {postPet}
                        </div>



                        </div>
                  </div>

      )
}

