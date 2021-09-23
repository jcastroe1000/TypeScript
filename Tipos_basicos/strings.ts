(() => {

    const Batman:string = 'Batman';
    const Spider:string =  "Spiderman";
    const DrStrange:string = `Dr. Stange`;
    const abc = 123;

    console.log(`I'm ${Batman} , ${abc}`)
    console.log(Batman.toLocaleUpperCase())

    console.log (Batman[10]?.toLocaleUpperCase()||'No está presente' )


})()