import React from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import BlogPost from "./components/BlogPost"
import Footer from "./components/Footer"
import data from "./data"

export default function App() {
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
                  <Header />
                     <Navbar />

                  <section className="post-preview">
                        {posts}
                  </section>

                  <Footer />
                     

                  
            </div>
      )
}