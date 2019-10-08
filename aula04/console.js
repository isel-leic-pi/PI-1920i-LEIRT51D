"use strict";

/*function f1()
{
    let oldConsoleLog = console.log
    console.log = function(...args){ 
        args.unshift(new Date())
        oldConsoleLog.apply(this, args)
	}
}

f1()*/

(function(){
    let oldConsoleLog = console.log
    console.log = function(...args){
		args.unshift(new Date())
        oldConsoleLog.apply(this, args)
	}
})()

console.log("Test 1")
console.log("Test 2")