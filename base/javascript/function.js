

function fun(a, b) {
    console.log(a + 'print in function' + b)
}

fun("hello ", " haha");


var printName = new Function("console.log('Byron');");
printName();

var printName1 = function () {
    console.log('Byron');
};

printName1();