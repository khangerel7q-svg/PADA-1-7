//     console.log("car")
//     const car ={
//         brand: "Benz",
//         model:"Maybach",
//         year:2026,
//     }   ;
//     console.log(car.brand); //car
//     console.log(car.model);//model
//     console.log(car.year); //year
// conosole.log(Object.keys(car));

// const human ={
//     firstname:'Iphone',
//     lastname:'mac',
//     age: 17,
//     isstudent: "true",
//     city:"Dublin",
//     position:"water street",
//     ismarried : "never",
// }
// human.city='ub';
// console.log(human);
// console.log(Object.keys(human));



// const person1={
//     firstName:"beb",
//     lastName:"baab",
    
//     getFullName: function  a (){
//         return `${this.firstName} ${this.lastName}`
//     },
// };
// console.log(person1.getFullName())





// const movie={
//     title:"hello world",
//     director:"hi",
//     year:"2000",
//     genre:"3th",
    
// };
// console.log(Object.entries(movie));






// const address={
//     street:"water street",
//     city:"Ulaanbaatar",
//     zipcode:"14000",
// }
// const student={
//     name:"mac",
//     age:"17",
//     address:"Ub", 
// }
// console.log(Object.entries(address,));
// console.log(Object.entries(student));




let user = {
  name: "Bat",
  age: 20,

  
  greet: function() {
    return + this.name + "!";
  },

  
  updateName: function(newName) {
    this.name = newName;
  }
};


console.log(user.greet());  

user.updateName("Bold");    
console.log(user.greet());  



