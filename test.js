// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
   expect(total).toBe(23);
}); 

// one euro is:
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})




test("One dollar should be 106.60 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Yen = fromDollarToYen(4)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 4 * 127.9; 
    
    // hago mi comparacion (la prueba)
            
    expect(expected).toBe(Yen);

    });   







test("One Yen should be 0.11 Pound", function(){
    // importo la funcion desde app.js
    const {  fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Pound =  fromYenToPound(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 0.8 ; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(Pound);

});





