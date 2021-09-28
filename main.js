"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validateDate = (fecha) => {
        return (isNaN(fecha.valueOf()))
            ? false
            : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Jose'));
//# sourceMappingURL=main.js.map