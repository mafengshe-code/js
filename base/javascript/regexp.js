// var reg = /<%[^%>]+%>/g;
//
// var str = 'hello <%码蜂社%>,regular expression ,<%%> provided <%1%> by <%MFS%>.'
//
// console.log(str.match(reg));

// var reg=/ab\t/;
//
// var str="mfs ab\t ab\t";
//
// console.log(str.match(reg))

// var reg=/^[a-zA-Z]/;
//
// var str="a32a";
//
// console.log(str.match(reg));

// var reg=/^\w+@\w+\.(com)$/;
//
// var str="447381438@vip.qq.com";
//
// console.log(str.match(reg));

// var reg=/a{0,8}b/;
//
// var str="aab";
//
// console.log(str.match(reg));

// console.log('123456789'.match(/\d{3,5}/g)); //["12345", "6789"]
// console.log('123456789'.match(/\d{3,5}?/g)); //["123", "456", "789"]

var reg = /<%.*?%>/g;

var str = 'hello <%码蜂社%>,regular expression ,<%%> provided <%1%> by <%MFS%>.'

console.log(str.match(reg));