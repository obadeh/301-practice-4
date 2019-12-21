'use strict' ;

let people={
    "name": "John",
    "pets": ["Rosie", "Rocky", "Luna"],
    "children": {
      "zach": {"age": 21},
      "allie": {"age": 14}
    },
    "job": "Instructor"
  }

Object.keys(people).forEach((key)=>{
    console.log(`${key} : ${people[key]}`)
})

let petsR= people.pets.filter((pet)=>{
   return pet.charAt(0)=='R';
})
console.log(petsR)

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.render=function(){return (this.age)*7}

let zach= new Person('zach',21);
let allie= new Person('allie',14)

console.log(`name: ${zach.name}, age: ${zach.age}, age in dog years: ${zach.render()}`)
console.log(`name: ${allie.name}, age: ${allie.age}, age in dog years: ${allie.render()}`)