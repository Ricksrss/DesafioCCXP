document.addEventListener("DOMContentLoaded", function () {
    const diasElement = document.getElementById('dias');
    const horasElement = document.getElementById('horas');
    const minutosElement = document.getElementById('minutos');
    const segundosElement = document.getElementById('segundos');

    const lancamento = new Date("2023-12-17T00:00:00Z").getTime();

    function countDown() {
        const agora = new Date().getTime();
        const diferenca = lancamento - agora;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        diasElement.textContent = `${formatoTempo(dias)} D`;
        horasElement.textContent = `${formatoTempo(horas)} H`;
        minutosElement.textContent = `${formatoTempo(minutos)} M`;
        segundosElement.textContent = `${formatoTempo(segundos)} S`;
    }

    function formatoTempo(tempo) {
        return tempo < 10 ? `0${tempo}` : tempo;
    }

    countDown();
    setInterval(countDown, 1000);
});