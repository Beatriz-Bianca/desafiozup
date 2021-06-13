const imagem1 = document.querySelector('#imagem1');
const imagem2 = document.querySelector('#imagem2');
const imagem3 = document.querySelector('#imagem3');
const imagem4 = document.querySelector('#imagem4');

const nomeimagem1 = document.querySelector('#nome-imagem-1');
const nomeimagem2 = document.querySelector('#nome-imagem-2');
const nomeimagem3 = document.querySelector('#nome-imagem-3');
const nomeimagem4 = document.querySelector('#nome-imagem-4');


const numeroMaximoDePersonagens = 671;

gerarNumero = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

pegarPersonagem = () => {
    var ids = [gerarNumero(),gerarNumero(),gerarNumero(),gerarNumero()];

    return fetch(`https://rickandmortyapi.com/api/character/${ids}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data[0].image;
        imagem1.alt = 'Imagem do personagem:' + data[0].name;
        nomeimagem1.innerHTML = data[0].name;

        imagem2.src = data[1].image;
        imagem2.alt = 'Imagem do personagem:' + data[1].name;
        nomeimagem2.innerHTML = data[1].name;

        imagem3.src = data[2].image;
        imagem3.alt = 'Imagem do personagem:' + data[2].name;
        nomeimagem3.innerHTML = data[2].name;

        imagem4.src = data[3].image;
        imagem4.alt = 'Imagem do personagem:' + data[3].name;
        nomeimagem4.innerHTML = data[3].name;
    })
}

window.onload = pegarPersonagem();
