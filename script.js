const botao = document.querySelector('button');
const imagem01 = document.querySelector('#img01');
const imagem02 = document.querySelector('#img02');
const imagem03 = document.querySelector('#img03');
const nomeDoPersonagem01 = document.querySelector('#nome01');
const nomeDoPersonagem02 = document.querySelector('#nome02');
const nomeDoPersonagem03 = document.querySelector('#nome03');
const especie01 = document.querySelector('#especie01');
const especie02 = document.querySelector('#especie02');
const especie03 = document.querySelector('#especie03');
const condicao01 = document.querySelector('#status01');
const condicao02 = document.querySelector('#status02');
const condicao03 = document.querySelector('#status03');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagem01 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem01.src = data.image;
        nomeDoPersonagem01.innerHTML = data.name;
        especie01.innerHTML = data.species;
        condicao01.innerHTML = data.status;

    });
}

pegarPersonagem02 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem02.src = data.image;
        nomeDoPersonagem02.innerHTML = data.name;
        especie02.innerHTML = data.species;
        condicao02.innerHTML = data.status;

    });
}

pegarPersonagem03 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem03.src = data.image;
        nomeDoPersonagem03.innerHTML = data.name;
        especie03.innerHTML = data.species;
        condicao03.innerHTML = data.status;

    });
}

atualizarTela = () => {
    pegarPersonagem01();
    pegarPersonagem02();
    pegarPersonagem03();

}


botao.onclick = atualizarTela;