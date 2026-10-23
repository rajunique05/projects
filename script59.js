//creat an array of names and use some() and every()  to test  a condition 
let names=["dhaneshwar","sa","kishore","panpati"];
let ans1= names.some(function(val)
{
       return val.length>3;
});
 
    let ans2= names.every(function(val)
{
    return val.length>3;
});
 