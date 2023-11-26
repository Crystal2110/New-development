import React from "react"
// import Image from "../components/Image"




export default function spots(props) {

      

      const timeToGoColors = {
            Spring: 'paleturquoise',
            Summer: 'plum',
            Fall: '#FF6666',
            Winter: 'silver',
      };

      const backgroundColor = timeToGoColors[props.timeToGo]
      
      let dollarSigns;

      if (props.price < 500) {
            dollarSigns = '$';
      }else if (props.price < 1000) {
            dollarSigns = '$$';
      }else {
            dollarSigns = '$$$';
      }
console.log(props)

      return (
            <div className="spots" style={{backgroundColor}}>
                  
                  {/* <img
                      src={`${props.coverImg}`}
                      className="spots-image"
                  /> */}
                  {/* <img key={props.id} src={props.src}/> */}
                  <span className="spots-place">{props.place}</span>

                  <span className="dollarSigns">{dollarSigns}</span>
                  <p className="spots-price">
                        <span className="bold">${props.price}</span>
                  </p>
                  <p className="seasons">
                        <span className="time-seasons" >
                              {props.timeToGo}
                        </span>
                  </p>
                  


               
            <div className="spots-">
            {/* <i src={russian} /> */}
            </div>

            </div>
      )
}
