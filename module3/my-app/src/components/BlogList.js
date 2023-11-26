import React from "react"
import BlogPost from "./BlogPost"
import data from "../data"

export default function (){
      const posts = data.map(item => {
            return (
                  <BlogPost
                        key={item.date}
                        {...item}

                  />

                  
            )
      })
      return (
            <div>
                  <section className="post-preview">
                  {posts}
                  </section>

                  <div className="btn">
                        <a className="text-uppercase" href="#!">Older Posts →</a>
                  </div>  
                  <hr />
            </div>
      )
   
      
}