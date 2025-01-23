// Variáveis globais
const imagens = document.querySelectorAll('.imagens img');
const indicadores = document.querySelectorAll('.indicador');
const botaoAnterior = document.querySelector('.botao-anterior');
const botaoProximo = document.querySelector('.botao-proximo');
let imagemAtual = 0;
let temporizador;

// Função para mudar a imagem
function mudarImagem(indice) {
    // Remove as classes ativas
    document.querySelector('.imagens img.ativa').classList.remove('ativa');
    document.querySelector('.indicador.ativo').classList.remove('ativo');
    
    // Adiciona as classes ativas nos elementos corretos
    imagens[indice].classList.add('ativa');
    indicadores[indice].classList.add('ativo');
    
    // Atualiza o índice atual
    imagemAtual = indice;
}

// Função para ir para a próxima imagem
function proximaImagem() {
    let proximo = imagemAtual + 1;
    if (proximo >= imagens.length) proximo = 0;
    mudarImagem(proximo);
}

// Função para ir para a imagem anterior
function imagemAnterior() {
    let anterior = imagemAtual - 1;
    if (anterior < 0) anterior = imagens.length - 1;
    mudarImagem(anterior);
}

// Adiciona os eventos de clique nos botões
botaoProximo.addEventListener('click', proximaImagem);
botaoAnterior.addEventListener('click', imagemAnterior);

// Adiciona os eventos de clique nos indicadores
indicadores.forEach((indicador, indice) => {
    indicador.addEventListener('click', () => mudarImagem(indice));
});

// Inicia o carrossel automático
function iniciarCarrossel() {
    temporizador = setInterval(proximaImagem, 5000); // Muda a imagem a cada 5 segundos
}

// Para o carrossel quando o mouse está sobre ele
document.querySelector('.carrossel').addEventListener('mouseenter', () => {
    clearInterval(temporizador);
});

// Reinicia o carrossel quando o mouse sai
document.querySelector('.carrossel').addEventListener('mouseleave', iniciarCarrossel);

// Inicia o carrossel quando a página carrega
iniciarCarrossel();