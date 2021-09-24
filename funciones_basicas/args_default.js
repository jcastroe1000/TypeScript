"use strict";
(function () {
    var fullName = function (fisrtName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (fisrtName + " " + (lastName || 'no lastName')).toUpperCase();
        }
        else {
            return fisrtName + " " + (lastName || 'no lastName');
        }
        var name = fullName('Tony', 'Stark', true);
    };
})();
