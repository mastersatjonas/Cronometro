let tempo = 0;
let intervalo;
/*let tempo = 0;: Declara uma variável tempo e inicializa com o valor 0. Essa variável vai armazenar o tempo atual do cronômetro em segundos.
let intervalo;: Declara uma variável intervalo sem inicializar. Essa variável vai armazenar o ID do intervalo de tempo que vamos criar mais tarde.*/

document.getElementById('iniciar').addEventListener('click', iniciar);
document.getElementById('parar').addEventListener('click', parar);
document.getElementById('reiniciar').addEventListener('click', reiniciar);
/* document.getElementById('iniciar'): Seleciona o botão com o id "iniciar" no documento.
addEventListener('click', iniciar): Adiciona um evento de clique ao botão. Quando o botão for clicado, a função iniciar será chamada.
document.getElementById('parar') e document.getElementById('reiniciar'): Selecionam os botões com os ids "parar" e "reiniciar" no documento, respectivamente.
addEventListener('click', parar) e addEventListener('click', reiniciar): Adicionam eventos de clique aos botões. Quando os botões forem clicados, as funções parar e reiniciar serão chamadas, respectivamente.
 */

function iniciar() {
    intervalo = setInterval(() => {
        tempo++;
        document.getElementById('tempo').innerText = formatarTempo(tempo);
    }, 1000);
}
/* function iniciar() { ... }: Declara a função iniciar.
intervalo = setInterval(() => { ... }, 1000): Cria um intervalo de tempo que vai ser executado a cada 1000 milissegundos (ou 1 segundo). O intervalo é armazenado na variável intervalo.
tempo++: Incrementa o tempo atual do cronômetro em 1 segundo.
document.getElementById('tempo').innerText = formatarTempo(tempo): Atualiza o texto do parágrafo com o id "tempo" com o tempo formatado.
 */

function parar() {
    clearInterval(intervalo);
}
/* function parar() { ... }: Declara a função parar.
clearInterval(intervalo): Cancela o intervalo de tempo criado anteriormente.
 */

function reiniciar() {
    tempo = 0;
    document.getElementById('tempo').innerText = '00:00:00';
    clearInterval(intervalo);
}
/* function reiniciar() { ... }: Declara a função reiniciar.
tempo = 0: Reseta o tempo atual do cronômetro para 0.
document.getElementById('tempo').innerText = '00:00:00': Reseta o texto do parágrafo com o id "tempo" para "00:00:00".
clearInterval(intervalo): Cancela o intervalo de tempo criado anteriormente.
 */

function formatarTempo(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;

    return `${pad(horas)}:${pad(minutos)}:${pad(segundosRestantes)}`;
}
/* function formatarTempo(segundos) { ... }: Declara a função formatarTempo.
let horas = Math.floor(segundos / 3600): Calcula o número de horas a partir do tempo em segundos.
let minutos = Math.floor((segundos % 3600) / 60): Calcula o número de minutos a partir do tempo em segundos.
let segundosRestantes = segundos % 60: Calcula o número de segundos restantes a partir do tempo em segundos.
return ${pad(horas)}:${pad(minutos)}:${pad(segundosRestantes)}``: Retorna o tempo formatado como uma string no formato "HH:MM:SS".
 */

function pad(numero) {
    return (numero < 10 ? '0' : '') + numero;
}
/* function pad(numero) { ... }: Declara a função pad.
`return (numero < 10 ?
 */