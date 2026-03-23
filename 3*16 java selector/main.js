// class Person {
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender = gender;
//     }

//   greet() {
//     console.log("hi, my name is " + this.name);
//   }
// }

// const person = new Person("Hulan", 12, "female");
// person.greet()
 


class Student extends Person{
    constructor(name,age,gender,StudentId) {
    super(name,age,gender)
    this.StudentId=StudentId;
    }   ;
    study(){
        console.log(this.name+"hicheel");
    }

}