import React from "react"

export default function BlogPost(props) {
      return (
            <div className="BlogPost">
                  <h2 className="post-title">{props.title}</h2>
                  <h3 className="post-subtitle">{props.subTitle}</h3> 
                  <p className="post-meta">Post By {props.author} on {props.date}</p>                


                  <hr />
            </div>
      )
}