function numeros(numero1: number, numero2:number ):number{
    return numero1 * numero2;

}


function mutiplicar(){
    const resultado = numeros(22,32);
    console.log('O resultado da mutiplicação é: '+ resultado);
}


function nome(nome:string){
    return 'Ola ' + nome;

}
function saudacao(){
    const name = nome('Jose');
    console.log(name);
}

mutiplicar();

saudacao();


