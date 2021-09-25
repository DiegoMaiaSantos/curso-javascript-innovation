function clicou(){
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar!</b>';
    //console.log(document.getElementById('agradecimento'))
    //alert('Obrigado por clicar!');
}

function redirecionar(){
    window.open('https://faculdadecdl.edu.br/');
    //window.location.href = 'https://faculdadecdl.edu.br/'
}

function trocar(elemento){
    //document.getElementById('mousemove').innerHTML = 'Obrigado!'
    elemento.innerHTML = 'Obrigado!'
}

function voltar(elemento){
    elemento.innerHTML = 'Passe o mouse aqui'
    //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui!'
}

function load(){
    alert('Página carregada!')
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    let validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

let idade = prompt('Qual sua idade?');
console.log(validaIdade(idade));
*/

// alert(soma(5, 10));

/*
let nome = ('Hoje é', '/');
let d = new Date();
console.log('nome', + d.getDate() + '/', (d.getMonth()+1))
*/

/*
let d = new Date();
alert(d.getMinutes());
*/

/*
let count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/

/*
let count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
let idade = prompt('Qual sua idade?');
if (idade >= 18){
    alert('Maior de idade.');
}else{
    alert('Menor de idade');
};
*/
 


/*
let fruta = {nome:'maça', cor:'vermelha'};
console.log(fruta);
alert(fruta.nome)*/

// let lista = ['maça', ' pera', ' laranja'];
// lista.push(' uva')
//lista.pop()

// console.log(lista); 
// console.log(lista.toString());
// console.log(lista.join(' | '));
// console.log(lista.length);
// console.log(lista.reverse());
// alert(lista);



// Aula 01  

// let nome = 'Diego Santos';
// let n1 = 5;
// let n2 = 3;
// let frase = 'Japão é o melhor time do mundo';
//alert(nome + ' tem ' + idade + ' anos.');
//alert(idade + idade2)
// console.log(nome)
// console.log(n1 * n2)
// console.log(frase.toUpperCase()) //toLowerCase()
// console.log(frase.replace('Japão', 'Brasil'))
//alert(frase.replace('Japão', 'Brasil')) 