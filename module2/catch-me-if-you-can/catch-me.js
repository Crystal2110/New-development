//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type `number`:

function sum(x, y){
      x = parseFloat(x);
      y = parseFloat(y)

      try {
            if(x === "") throw "x is empty";
            if(y === "") throw "y is empty";
            if(isNaN(x) === true) throw "x is not a number!"
            if(isNaN(y) === true) throw "y is not a number!"
      }

catch(err){
      console.log("Input " + err)
}

finally{
      console.log("I am running no matter what!")
}
return x + y;
}
console.log(sum("5","5"))

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

function sum(a,b) {
      if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error("It must be numbers");}
          
            return a + b;

}
try{
      console.log(sum(1,2))
}
catch(err){
      console.log("Input " + err)
}

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {
      username: "sam",
      password: "123abc",
}

function login(username,password){
      if(username  !== 'sam' ){
            throw new Error("username is incorrect")
      }
      else if(password !== "123abc"){
            throw new Error("password is incorrect")
      }
      else {
            return "login successful!"
      }
}
try{
      console.log(login("sam","123Abc"));
}
catch(err){
      console.log(err)
}
