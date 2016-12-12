/*楼梯有20级，每次走1级或是2级，从底走到顶一共有多少种走法？用代码（递归）实现*/

function goFloor(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return goFloor(n - 1) + goFloor(n - 2);
}
var begin = new Date();

setInterval(function () {
    console.log('active timer:' + (new Date() - begin));
    begin = new Date();
    /*goFloor(30);*/
}, 0);