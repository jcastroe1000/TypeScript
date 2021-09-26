(()=>{
     type Avenger ={
         name : string,
         weapon: string;
     }


    const cap_america: Avenger={
        name: 'Cap. America',
        weapon: 'Escudo'
    }

    const viuda_negra: Avenger={
        name: 'Natasha Romanoff',
        weapon: 'Pistola'
    }

    const thor: Avenger={
        name: 'Dios del trueno',
        weapon: 'Martillo'
    }

    const avengers = [cap_america,thor,viuda_negra];

    //for of
    for (const avenger of avengers) {
        console.log({avengers})
    }
    


})()