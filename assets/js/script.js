function validacaoArray(array,num){
    try {
        if(!array && !num) throw new ReferenceError('Parametros enviados de forma errada');

        if(typeof array !== 'object') throw new TypeError('Tipo do array não é objeto');

        if(typeof num !== 'number') throw new TypeError('Tipo do num não é um number');

        if(array.length !== num) throw new RangeError('Tamanho inválido');
    
        return array;

    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError")
            console.log(e.name);
            //console.log(e.stack);
        }else if (e instanceof TypeError){
            console.log("Este erro é um TyperError")
            console.log(e.name);
            //console.log(e.stack);
        }else if (e instanceof RangeError){
            console.log("Este erro é um RangeError")
            console.log(e.name);
            //console.log(e.stack);
        }else{
            console.log(`Ocorreu um erro inesperado sendo ele: ${e}`)
        }

    }
    
}

const nomes = ['Kagura','Shirogane'];

const numeros = [1,2,3,4,5];

const numeros2 = [1,2];

const pessoas = {};

let a = "";
let b = 1;



//console.log(validacaoArray());

//console.log(validacaoArray(nomes,a));

//console.log(validacaoArray(numeros,a));

console.log(validacaoArray(numeros,5));


//console.log(typeof pessoas);

