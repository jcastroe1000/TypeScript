"use strict";
//funcion anonima autoinvocada, sirve para crear varios archivos en un mismo proyecto y no caen dentro del scope global
(function () {
    var a = 10;
    console.log(a);
})();
