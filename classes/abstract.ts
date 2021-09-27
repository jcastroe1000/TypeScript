(()=>{
    abstract class Mutante{
        constructor(
                public name:string,
                public realName:string
        ){}
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo Salvado'
        }
    }
    class Villian extends Mutante{
        conquistarMundo(){
            return 'Consquistar Mundo'
        }
    }

    const walverine = new Xmen ('Wolverine', 'Logan');
    const magneto   = new Villian ('Magneto' , 'magnus');

    const printName = (character:Mutante) =>{
        console.log(character.realName);
    }

    printName(magneto);

    // console.log(walverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
})()