function atualizarContagemRegressiva(id, dataDestino) {
    const elementoContador = document.getElementById(id);

    const intervalo = setInterval(function () {
        const agora = new Date().getTime();
        const diferenca = dataDestino - agora;

        if (diferenca <= 0) {
            elementoContador.innerHTML = `<i class="fa fa-close"></i>` + ' Prazo expirado.';
            elementoContador.style.color = "red";
            clearInterval(intervalo);
        } else {
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            const contagemRegressiva = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
            elementoContador.innerHTML = `<i class="fa-regular fa-clock"></i> ` + contagemRegressiva;
        }
    }, 1000);
}
const dataDestino1 = new Date('2025-02-23T00:00:00').getTime();
const dataDestino2 = new Date('2025-02-27T00:00:00').getTime();
const dataDestino3 = new Date('2025-03-30T00:00:00').getTime();
const dataDestino4 = new Date('2025-02-10T00:00:00').getTime();

atualizarContagemRegressiva('contador1', dataDestino1);
atualizarContagemRegressiva('contador2', dataDestino2);
atualizarContagemRegressiva('contador3', dataDestino3);
atualizarContagemRegressiva('contador4', dataDestino4);

document.addEventListener("DOMContentLoaded", function () {
    let viewCount = localStorage.getItem("views") ? parseInt(localStorage.getItem("views")) : 0;
    let likeCount = localStorage.getItem("likes") ? parseInt(localStorage.getItem("likes")) : 0;

    // Atualiza os valores na tela
    document.getElementById("view-count").textContent = viewCount;
    document.getElementById("like-count").textContent = likeCount;

    // Função para incrementar visualizações
    function addView() {
        viewCount++;
        localStorage.setItem("views", viewCount);
        document.getElementById("view-count").textContent = viewCount;
    }

    // Função para incrementar curtidas
    function addLike() {
        likeCount++;
        localStorage.setItem("likes", likeCount);
        document.getElementById("like-count").textContent = likeCount;
    }

    // Adiciona 1 visualização a cada 1 minuto (60.000 ms)
    setInterval(addView, 60000);

    // Adiciona 1 like a cada 1 minuto (60.000 ms)
    setInterval(addLike, 60000);

    // Adiciona like ao clicar no botão 👍
    document.getElementById("like-button").addEventListener("click", function () {
        addLike();
    });
});
