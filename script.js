document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector("#imagem img");
    const horaDiv = document.querySelector("#hora");

    function atualizarImagem() {
        const hora = new Date().getHours();

        if (hora >= 5 && hora < 7) {
            img.src = "assets/nascerdosol.jpg";
            img.alt = "Nascer do Sol";
        } else if (hora >= 7 && hora < 12) {
            img.src = "assets/manha.jpg";
            img.alt = "Manhã";
        } else if (hora >= 12 && hora < 17) {
            img.src = "assets/tarde.png";
            img.alt = "Tarde";
        } else if (hora >= 17 && hora < 19) {
            img.src = "assets/pordosol.jpg";
            img.alt = "Pôr do Sol";
        } else if (hora >= 19 || hora < 5) {
            img.src = "assets/noite.png";
            img.alt = "Noite";
        } else {
            img.src = "assets/madrugada.png";
            img.alt = "Madrugada";
        }
    }

    function atualizarHora() {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, "0");
        const minutos = String(agora.getMinutes()).padStart(2, "0");
        const segundos = String(agora.getSeconds()).padStart(2, "0");
        horaDiv.textContent = `${horas}:${minutos}:${segundos}`;
    }

    atualizarImagem();
    setInterval(atualizarHora, 1000);
});