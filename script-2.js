var a=50;
function func1(){
   console.log("Global value of a is :"+ a);//global variable
   func2();
}
function func2(){
    a=100;
console.log(" local value of a is : "+ a);//local variable
}
console.log(a++);
func1();
