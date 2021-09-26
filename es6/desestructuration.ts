(()=>{
    type Avengers ={
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers:Avengers ={
        nick: 'Samuel L. Jackson',
        ironman : ' Robert Downey jr',
        vision: 'Paul  Bettant',
        activo: true,
        poder:1500
    }

    //const printAvenger =(avengers:Avengers)=>{
    //    console.log(avengers.vision);
    //}

    const printAvenger =({ironman,...restAv}:Avengers)=>{
        console.log(ironman,restAv);
    }
    
    printAvenger(avengers)

  
})()