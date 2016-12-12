var interval = setInterval(function () {
    console.log('hello interval')
}, 200);

setTimeout(function () {
    clearInterval(interval)
}, 1000);