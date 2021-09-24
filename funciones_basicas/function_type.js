"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return " El Mundo esta salvado!"; };
    //myFunction=10;
    //console.log(myFunction);
    //let myFunction:(a:number,b:number)=>number;
    //myFunction=addNumbers
    //console.log(myFunction(1,2))
    //let myFunction:(a:string)=>string;
    //myFunction=greet
    //console.log(myFunction('Jose'))
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
