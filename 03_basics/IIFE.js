//////////////immediately invoked function expressions (IIFE)//////////////////////////////////
// to remove global scope pollution
(function chai(){
    console.log(`DB connected`);
})();

///js is single threaded

/* execution context**********************
1) global
2) function
3) eval
************************************/