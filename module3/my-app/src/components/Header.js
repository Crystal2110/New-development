import React from "react"
import Navbar from "./Navbar"
import myImage from "../images/home-bg.jpg"



export default function Header() {
      
     return (
          <div className="site-heading">
               {/* <section > */}

               {/* <img src={myImage} className="masthead" /> */}
               <Navbar />
               <div className="container">
               <h1>Clean Blog</h1>
               <span className="subheading">A Blog Theme by Start Bootstrap</span>
               {/* </section> */}
               </div>
          </div>     

     )
}