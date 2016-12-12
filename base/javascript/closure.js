var array = [{}, {}, {}, {}, {}];

// for (var i = 0; i < 5; i++) {
//     array[i].click = (function (i) {
//         var t = i;
//         return function () {
//             console.log(t);
//         }
//     })(i);
// }

for (var i = 0; i < 5; i++) {
    (function (i) {
        array[i].click = function () {
            console.log(i);
        }
    })(i)
}


for (var j = 0; j < 5; j++) {
    array[j].click();
}
