// Create an object ‘Person’ in Java Script,  which will have 
//  ‘FirstName’, ’LastName’ and ‘Office Address’ as properties within it.
// Create three Persons and print all those three properties.

function Person(FirstName,LastName,OfficeAddress){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.OfficeAddress=OfficeAddress
}

var person1 = new Person("Amrendra","Kumar","Patna");
var person2 = new Person("Amit","/Kumar","Chennai");
var person3 = new Person("Manish","Kumar","Mumbai");

console.log(person1);
console.log(person2);
console.log(person3);
