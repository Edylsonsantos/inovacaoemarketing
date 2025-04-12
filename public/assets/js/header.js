document.getElementById("btn").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block";
    }
});

// Verifica a largura da tela e ajusta o menu ao mudar de tamanho
window.addEventListener("resize", function () {
    var menu = document.getElementById("menu");
    if (window.innerWidth > 880) {
        menu.style.display = ""; // Volta ao estilo padrão do CSS
    }
});
