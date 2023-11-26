import React from "react"
import Friend from "./Friend"
import data from "../friendData"


export default function FriendList() {
      // const posts = data.map(owner => {
            const posts = data.map((owner) => (
            // return (
                  <Friend
                      key={owner.age}
                  //     ownerName={owner.name}
                  //     ownerAge={owner.age}
                  //     ownerPets={owner.pets}
                        ownerName={owner.name}
                        ownerAge={owner.age}
                        ownerPets={owner.pets}
                  />
                      )
      )

      return (
            <div>
                  <section className="post-preview">
                        {posts}
                  </section>

                  
            </div>
      );
}


