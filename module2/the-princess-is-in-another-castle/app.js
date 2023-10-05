// const playerStatus = ['Small', 'Big', 'Powered Up', 'Dead']
// class player {
//       constructor(name,totalCoins,status,hasStar) {
//             this.name = name
//             this.totalCoins = totalCoins
//             this.status = status
//             this.hasStar = hasStar
//       }


//       setName(namePicked) {
//           const randomSetName = Math.floor(Math.random()*2)
//           if(randomSetName === 0) {
//             return namePicked = "Mario"
//          }else if (randomSetName === 1){
//             return namePicked = "Luigi"
//          }

//      }

//      gotHit() {
//       if(this.hasStar === true){
//          console.log("The star protectd you!")
//          this.hasStar = false;
//       }     
//       if(this.status === 'Powered Up') {  this.status = playerStatus[1]
      
//       }else if(this.status === 'Big')
//       {  this.status = playerStatus[0]
      
//       }else this(this.status === 'Small')
//       {  this.status = playerStatus[3]
//       }
// } 
      
//       gotPowerUp() {
//             console.log('Got Power Up');
//       if(this.status === playerStatus[2]){
//             console.log('You have a Star!');
//          this.hasStar = true;
//       }else if(this.status === playerStatus[1]){
//          this.status = playerStatus[2];
//       }else if(this.status === playerStatus[0]){
//          this.status = playerStatus[1]
//       }else{
//             this.status = playerStatus[3]
//                   console.log(`You've Died. Game Over`);

//             }
//       }

//       addCoin() {
//       this.totalCoins += 1
//       if(this.tatolCoin >= 1){
//          this.totalCoins ++
//          return totalCoins
//       }

//       print() 
//       {console.log(
//       `Name: ${this.name}, 
//        Status: ${this.status}, 
//        Coins: ${this.totalCoins},
//        ${this.hasStar} `)}
//       }
// }

class Player {    
      constructor(name) {
            this.name = name
            this.totalCoins = 0
            this.status = "Small"
            this.hasStar = false
      }


setName(namePicked) {
      if (namePicked === "Mario" || namePicked === "Luigi") {
      this.name = namePicked;
}
}


gotHit () {
      if(this.hasStar === true) {
            this.hasStar = false;
      }
      if(this.status === "Powered Up") {
            this.status = "Big";
      }else if(this.status === "Big") {
            this.status = "Small";
      }else if(this.status === "Small") {
            this.status = "Dead"; 
      console.log(`Your final score is: ${this.totalCoins}`)    
      }
}

gotPoweredup() {
    
      if(this.status === "Small") {
            this.status = "Big";
      }else 
      if(this.status ==="Big") {
            this.status = "Powered Up";
            this.hasStar = true;
            console.log("Congratulation! You got a Star!")
           
      }
}

addCoin() {
      this.totalCoins ++
}

// print() {
//       // let statusText = this.status;

//       console.log(`Name: ${this.name}`);
//       console.log(`Status: ${this.status}`);
//       console.log(`Total Coins: ${this.totalCoins}`);
//       console.log(`Has Star: ${this.hasStar}`);
//     }

// print() {
//       console.log(`Name: ${this.name}`);
      
//       if (this.status === "Powered Up" && this.hasStar) {
//         console.log("Status: Powered Up");
//         console.log("Total Coins: " + this.totalCoins);
//         console.log("Congratulation! You got a Star!");
//       } else if (this.status === "Big") {
//         console.log(`Status: ${this.status}`);
//         console.log(`Total Coins: ${this.totalCoins}`);
//         if (this.hasStar) {
//           console.log("Your star protected you!");
//         }
//       } else if (this.status === "Small") {
//         console.log(`Status: ${this.status}`);
//         console.log(`Total Coins: ${this.totalCoins}`);
        
//       }
//       console.log('\n'); 
//     }

print() {
      console.log(`Name: ${this.name}`);
      console.log(`Status: ${this.status}`);
      console.log(`Total Coins: ${this.totalCoins}`);
      if (this.hasStar) {
        console.log("Your star protected you!");
      }
      console.log("\n");
    }

}

function game(player) {
      let score = 0;
      const random = Math.floor(Math.random() * 3);
      
     if (random === 0) {
          player.gotHit();
        } else if (random === 1) {
          player.gotPoweredup();
        } else {
          player.addCoin();
          score++;
        }
        player.print();
    
     
    if (player.status !== "Dead") {
      setTimeout(() => {
        game(player);
      }, 1000);
      } else {
     
      console.log("You lost the game. Game Over!");
        
      }
    }
const player = new Player("Mario");
game(player);