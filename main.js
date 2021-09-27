"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo Salvado';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Consquistar Mundo';
        }
    }
    const walverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(magneto);
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avAge = 123) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado');
        }
        getFullname() {
            return `${this.name} ${this.realName} `;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullname());
        }
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApoca() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el mejor');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apoca1 = Apocalipsis.callApoca();
    apoca1.changeName('Xavier');
})();
//# sourceMappingURL=main.js.map