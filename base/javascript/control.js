/**
 * Created by zl on 2016/12/1.
 */
if (true) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

var a = 2;
switch (a) {
    case 1:
        console.log(a);
        break;

    case 2:
        console.log(a);
        break;

    case 3:
        console.log(a);
        break;

    default:
        console.log(NaN);
}


var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}

do {
    i--;
    console.log(i);
} while (i > 0);


for (var i = 10; i > 0; i--) {
    console.log(i);
}

for (var prop in {a: 1, b: 2}) {
    console.log(prop);
}


for (var i = 1; i < 10; i++) {
    if (i % 4 == 0) {
        break;
    }

    console.log(i);
}

for (var i = 1; i < 10; i++) {
    if (i % 4 == 0) {
        continue;
    }

    console.log(i);
}

