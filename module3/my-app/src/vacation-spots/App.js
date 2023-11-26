import React from "react"
import Card from "../../../vacation-spots/src/components/Card"
import data from "./data"

export default function App() {
      const cards = data.map(item => {
            return (
                  <Card 
                  {...item}

                  />

            )
      })

      return (
            <div>
                  {cards}
            </div>
      )
}