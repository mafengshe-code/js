var a = 2;
var b = 3.5;
var c = 5e2; //500

console.log(a + b);
console.log(b instanceof Number);
console.log(c);

var str = "欢迎您进入码蜂社前端学习";
console.log(str instanceof String);

var isYouEat = true;
isYouEat = false;

console.log(isYouEat instanceof Boolean);

var myFirstFunction = function (by, time) {
    var t = 1 + 1 + 1;
    console.log(t);
    console.log("哈哈，我们成功的写了第一个js函数。" + "由" + by + "完成。" + "在" + time)
};
console.log(myFirstFunction instanceof Function);

var person = {
    height: 180,
    weight: 70,
    sex: 1
};
console.log(person instanceof Object);

var varNull = null;
console.log( varNull instanceof Object);

console.log(parseInt("xzcvasd") instanceof Number);

var varUndefined;
console.log(varUndefined instanceof undefined);


