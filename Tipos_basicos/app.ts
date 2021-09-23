(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum fuerza_heroes{
      Flash = 5,
      Superman = 100,
      Batman = 1,
      Acuaman = 0

    }
    const fuerzaFlash:fuerza_heroes = fuerza_heroes.Flash;
    const fuerzaSuperman:fuerza_heroes = fuerza_heroes.Superman;
    const fuerzaBatman:fuerza_heroes = fuerza_heroes.Batman;
    const fuerzaAcuaman:fuerza_heroes = fuerza_heroes.Acuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  