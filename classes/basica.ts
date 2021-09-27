(()=>{
    class Avenger {
        static  avgAge:number=35;
        static  getAvAge(){
            return this.name;
        }
        constructor (
                    private name:string,
                    private team:string,
                    public realName?:string,
                    avAge:number =123,
                    ){}
        
                    
        private bio(){
            return `${this.name} (${this.team})`
        }
    }
    // const antMan:Avenger = new Avenger('Antman','Capitan','Scott');
    // console.log(antMan)

    // console.log(Avenger.getAvAge())
})()