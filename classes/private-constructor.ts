(()=>{
    
    class Apocalipsis{

        static instance:Apocalipsis;
        private constructor (public name:string) {

        }

        static callApoca():Apocalipsis{
            if (!Apocalipsis.instance){
                Apocalipsis.instance= new Apocalipsis('Soy el mejor')
            }
            return Apocalipsis.instance;
        }

        changeName (newName:string):void{
            this.name= newName;
        }

    }

    const apoca1 = Apocalipsis.callApoca();

    apoca1.changeName('Xavier');
   
})()