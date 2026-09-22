const x = 5 //const cannot be redeclared and updated i.e. we cannot declare the same variable again and again and we cannot update the value of the variable
var y = 10 //prefer not to use var
var y = 15  //var can be redeclared and updated i.e. we can declare the same variable again and again and it will not throw any error but it will update the value of the variable
let z=25    //let cannot be redeclared but can be updated i.e. we cannot declare the same variable again and again but we can update the value of the variable
z=30
let u //if we declare a variable using let and do not assign any value to it then it will be undefined
console.table({ x, y, z, u })