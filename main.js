"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    class Avenger {
        constructor(name = 'No name', power = 1) {
            this.name = name;
            this.power = power;
        }
    }
    class flyingAvenger extends Avenger {
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }
    const hulk = new Avenger('hulk', 9001);
    console.log(hulk);
})();
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: ' Robert Downey jr',
        vision: 'Paul  Bettant',
        activo: true,
        poder: 1500
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, restAv = __rest(_a, ["ironman"]);
        console.log(ironman, restAv);
    };
    printAvenger(avengers);
})();
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: ' Robert Downey jr',
        vision: 'Paul  Bettant',
        activo: true,
        poder: 1500
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, restAv = __rest(_a, ["ironman"]);
        console.log(ironman, restAv);
    };
    const AvengersArr = ['Cap. America', 'Ironman', 'Hulk'];
    const [, iroman,] = AvengersArr;
    console.log({ iroman });
})();
(() => {
    const cap_america = {
        name: 'Cap. America',
        weapon: 'Escudo'
    };
    const viuda_negra = {
        name: 'Natasha Romanoff',
        weapon: 'Pistola'
    };
    const thor = {
        name: 'Dios del trueno',
        weapon: 'Martillo'
    };
    const avengers = [cap_america, thor, viuda_negra];
    for (const avenger of avengers) {
        console.log({ avengers });
    }
})();
(() => {
    const nombre = 'Antonio';
    const getName = () => {
        console.log('Viejo getName');
    };
})();
//# sourceMappingURL=main.js.map