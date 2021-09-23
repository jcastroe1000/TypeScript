//funcion anonima autoinvocada, sirve para crear varios archivos en un mismo proyecto y no caen dentro del scope global

(() => {
    const a:number =10;
    console.log(a)

})()



