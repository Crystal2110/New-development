

// class Player {
//       constructor(name) {
//           this.name = name
//           this.totalCoins = 0
//           this.status = "small"
//           this.hasStar = false
//           this.gameActive = true
  
//       }
  
  
//   gotHit(){
//       if (this.status === "poweredUp") {
//           this.status = "big"
//       }
//       if (this.hasStar) {
//           this.hasStar = false
//           this.status = "big"
//       }
//       else if (this.status = "big") {
//           this.status = "small"
//       }
//       else {
//           this.status = "dead"
//           this.gameActive = false
//       }
//   }
  
//   gotBuff(){
//       if (this.status === "big"){
//           this.status ="poweredUp"
//           this.hasStar = true
//       }
//       else if (this.status === "small"){
//           this.status = "big"
//       }
//   }
  
//   addCoin(){
//       this.totalCoins += 1
//   }
  
//   print(){console.log(`Name: ${this.name}, Coins: ${this.totalCoins}, Status: ${this.status}, Stars: ${this.hasStar} `)}
//   }
  
//   const user = new Player("Luigi")
  
//   const game =(user) =>{
//       let random = Math.ceil(Math.random()*3)
//       if(this.status === "dead"){
//       clearInterval (gameStart)}
  
//       else if(random === 1){
//       user.gotHit();
//       user.print();
//       }
  
//       else if(random === 2){
//           user.addCoin();
//           user.print();
//       }
  
//       else if(random === 3){
//           user.gotBuff();
//           user.print();
//       }
//   }
//      const gameStart = setInterval(()=> game(user), 1500)

class Player {
  constructor(name) {
    this.name = name;
    this.totalCoins = 0;
    this.status = "Small";
    this.hasStar = false;
  }

  setName(namePicked) {
    if (namePicked === "Mario" || namePicked === "Luigi") {
      this.name = namePicked;
    }
  }

  
  
  
  
    gotHit() {
      switch (this.status) {
        case "Powered Up":
          this.status = "Big";
          break;
        case "Big":
          this.status = "Small";
          break;
        case "Small":
          this.status = "Dead";
          break;
      }
    }
  
    gotPowerup() {
      switch (this.status) {
        case "Small":
          this.status = "Big";
          break;
        case "Big":
          this.status = "Powered Up";
          break;
        default:
          this.hasStar = true;
          break;
      }
    }
  
    addCoin() {
      this.totalCoins++;
    }
  
    print() {
      console.log(`Name: ${this.name}`);
      
      if (this.status === "Power Up" && this.hasStar) {
        console.log("Status: Power Up");
        console.log("Total Coins: " + this.totalCoins);
        console.log("Congratulation! You got a Star!");
      } else {this.status === "Big" 
        console.log(`Status: ${this.status}`);
        console.log(`Total Coins: ${this.totalCoins}`);
        console.log("Your star protected you!");
        if (this.status === "Small") {
        console.log("You've Died. Game Over") 
        }
      }
      console.log('\n'); 
    }
  }
  
  
  function getRandomRange() {
    return Math.floor(Math.random() * 3);
  }
  
  function simulateGame(player) {
    const randomValue = getRandomRange();
    if (randomValue === 0) {
      player.gotHit();
    } else if (randomValue === 1) {
      player.gotPowerup();
    } else {
      player.addCoin();
    }
    player.print();
  
    if (player.status !== "Dead") {
      setTimeout(() => {
        simulateGame(player);
      }, 1000); // Adjust the interval as needed
    } else {
      console.log("Game Over!");
    }
  }
  
  const player = new Player("Mario");
  simulateGame(player);
  