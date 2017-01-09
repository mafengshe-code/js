
console.log(window.innerHeight)
console.log(window.innerWidth)

// setTimeout(function(){
//     console.log(window.scrollX)
//     console.log(window.scrollY)
// },2000)

window.scrollTo(0,0)
// setTimeout(function(){
//     window.scrollBy(100,100)
//     console.log(window.scrollX)
//     console.log(window.scrollY)
// },3000)

// var timer = setInterval(function(){
//     if(window.scrollX != 0 || window.scrollY != 0)
//         window.scrollBy(-1,-1)
//     else
//         clearInterval(timer)
// },1)

// console.log(window.navigator)
//
// console.log(window.screen.height)
// console.log(window.screen.width)

// window.open('http://www.baidu.com')

if(confirm("你最近好吗？"))
    console.log('good')
else
    console.log('no')