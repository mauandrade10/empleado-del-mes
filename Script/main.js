//productos vendidos por pedro

const pedroAgua = document.querySelector('#pedro-agua');
const pedroEmocion = document.querySelector('#pedro-emocion');
const pedroAlegria = document.querySelector('#pedro-alegria');
const pedrofrescura = document.querySelector('#pedro-frescura');

//productos vendidos por juana

const juanaAgua = document.querySelector('#juana-agua');
const juanEmocion = document.querySelector('#juana-emocion');
const juanaAlegria = document.querySelector('#juana-alegria');
const juanafrescura = document.querySelector('#juana-frescura');

//otros elementos del programa

const resultSection = document.querySelector('#result-section');
const submit = document.querySelector('#submit-button');
const imgPedro = document.querySelector('#img-pedro');
const imgJuana = document.querySelector('#img-juana');

//funcion para calcular la venta total por cada trabajador 
function calcularVentaTotal(producto1,producto2,producto3,producto4){
    return producto1*200+producto2*180+producto3*160+producto4*50;
}

//funcion para definir el ganardor e imprimir el mensaje del ganador
function printGanador(resultado1,resultado2){

    eliminarElementos(resultSection);

    const result = document.createElement('h2');

    if(resultado1 == resultado2){
        result.innerText = `Es un empate, ambos vendieron ${resultado1} usd`;
        imgPedro.setAttribute('src','./Images/pedro-empate.jpg');
        imgJuana.setAttribute('src','./Images/juana-empate.jpg');
    } 
    else if (resultado1 > resultado2){
        result.innerText = `El empleado del mes es Pedro, vendió ${resultado1} usd`;
        imgPedro.setAttribute('src','./Images/gana-pedro.jpeg');
        imgJuana.setAttribute('src','./Images/juana-pierde.jpg');
    }

    else{
        result.innerText = `La empleada del mes es Juana, vendió ${resultado2} usd`;
        imgPedro.setAttribute('src','./Images/pedro-perdio.jpg');
        imgJuana.setAttribute('src','./Images/juana-gana.jpg');
    } 

    resultSection.append(result);
    console.log(`Pedro vendió: ${resultado1}`);
    console.log(`Juana vendió: ${resultado2}`);
}

//funcion para llamar a la función que imprime el ganador y calcular los resultados
function elegirGanador(){
    const resultadosPedro = calcularVentaTotal(pedroAgua.value,pedroEmocion.value,pedroAlegria.value,pedrofrescura.value);
    const resultadosJuana = calcularVentaTotal(juanaAgua.value,juanEmocion.value,juanaAlegria.value,juanafrescura.value);

    printGanador(resultadosPedro,resultadosJuana);
}


//funcion para eliminar todos los elementos de una sección
function eliminarElementos(section){
    while(section.firstChild){
        section.removeChild(section.firstChild);
    };
};



//event listener que se llama cuando oprimes el boton 
submit.addEventListener('click', elegirGanador);


