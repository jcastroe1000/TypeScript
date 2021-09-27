(()=>{
    class Avenger{
        
        constructor(
                public name:string,
                public realName:string
                ){
            console.log('Constructor avenger llamado')
        }

        protected getFullname(){
            return `${this.name} ${this.realName} `
        }
    }

    class Xmen extends Avenger {
        constructor (
                name:string,
                realName:string,
                public isMutant:boolean
        ){
            super(name,realName)
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullname())
        }

        get fullName(){
            return `${this.name} ${this.realName}`
        }

        set fullName(name:string){
            this.name=name;
        }
    }

    const wolverine = new Xmen ('Wolverine','Logan',true)

    //wolverine.fullName='Jose'
    //console.log(wolverine.fullName)
})()