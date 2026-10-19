//write a function that uses object destructing inside parameters to extract and print name and age
function abcd({name,age})
{
    console.log(name,age);
}
abcd({name:"harsh",age:27});


//demonstrate the difference between normal function and arrow function when used asa  object methods (this issue)

let  obj={
    name:"harsh",
    fnc:function()
    {
        console.log(this);
    },
 fnc2:()=>  
  {      console.log(this);
 },
};
obj.fnc();
obj.fnc2();
 