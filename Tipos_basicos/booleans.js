"use strict";
(function () {
    var isSuperman = true;
    var isSpider = false;
    isSuperman = true && false;
    isSuperman = (isSpider) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
