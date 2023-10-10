document.addEventListener("DOMContentLoaded", function () {
    const diasElement = document.getElementById('dias');
    const horasElement = document.getElementById('horas');
    const minutosElement = document.getElementById('minutos');
    const segundosElement = document.getElementById('segundos');

    const lancamento = "17 dec 2023";

    function countDown() {
        const dataLanc = new Date(lancamento);
        const hoje = new Date();

        const segTotal = (dataLanc - hoje) / 1000;

        const finalDias = Math.floor(segTotal / 60 / 60 / 24);
        const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
        const finalMinutos = Math.floor(segTotal / 60) % 60;
        const finalSegundos = Math.floor(segTotal) % 60;

        
        diasElement.innerHTML = `${formatoTempo(finalDias)} D`;
        horasElement.innerHTML = `${formatoTempo(finalHoras)} H`;
        minutosElement.innerHTML = `${formatoTempo(finalMinutos)} M`;
        segundosElement.innerHTML = `${formatoTempo(finalSegundos)} S`;
    }

    function formatoTempo(tempo) {
        return tempo < 10 ? `0${tempo}` : tempo;
    }

    countDown();
    setInterval(countDown, 1000);
});