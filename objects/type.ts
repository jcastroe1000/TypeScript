(()=>{

    type Hero ={
        name:string;
        age?:number;
        powers:number[];
        getName?:()=>string;
    }



    let flash:Hero ={
        name: 'Barry Allen',
        age : 24,
        powers:[2, 4]
    }

    let ironMan:Hero ={
        name: 'Tony Stark',
        age : 40,
        powers:[1 , 5],
        getName(){
            return this.name;
        }
    }





})()