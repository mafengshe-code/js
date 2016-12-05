var i=10;

function scope(){
    var i=20;
    console.log(i)
}

scope();
console.log(i);