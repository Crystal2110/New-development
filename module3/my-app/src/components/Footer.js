import React from "react"
import twitter from "../images/twitter_icon.png"
import bird from "../images/twitter-circle.svg"

export default function Footer() {
      return (
            <footer>
                  
                  <a href="./" className="twitter">
                  {/* <i src={bird} className="t-brands"  /> */}
                  <i className="fa-brands fa-twitter"></i>
                  </a>

                  <a href="./" className="facebook">  
                  <i className="fa-brands fa-facebook"></i>
                  </a>


                  <a href="./" className="github">
                  <i className="fa-brands fa-github"></i>
                  </a>
                  <div className="copyright">Copyright © Your Website 2023</div>
                  {/* <ul className="list-logo">
                      <li className="list-logo-item">
                        
                      </li>
                      <li className="list-logo">
                        
                      </li>
                      <li className="list-logo">
                        
                      </li>
                  </ul> */}
            </footer>
      )
}

// import React from "react"
// import style from "./style.css"

// function Footer(){
//     return(
        
//         <div>
//             <h1>Footer</h1>
//             {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link> */}
//             <h3>
//                 <i className="glyphicon glyphicon-cloud"></i>
//                 <i className="glyphicon glyphicon-remove"></i>
//                 <i className="glyphicon glyphicon-user"></i>
//                 <i className="glyphicon glyphicon-envelope"></i>
//                 <i className="glyphicon glyphicon-thumbs-up"></i>
//             </h3>
//         </div>
//     )
// }

// export default Footer


