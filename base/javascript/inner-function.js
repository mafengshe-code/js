function outerFn() {
    console.log("Outer function");
    function innerFn() {
        console.log("Inner function");
    }
    innerFn();
}
outerFn();
innerFn();
