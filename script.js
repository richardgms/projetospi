document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector("#imagem img");
    const horaDiv = document.querySelector("#hora h2");
    const titulo = document.querySelector("h1");
    const body = document.body;

    function atualizarImagem() {
        const hora = new Date().getHours();

        if (hora >= 5 && hora < 7) {
            img.src = "assets/nascerdosol.jpg";
            img.alt = "Nascer do Sol";
            body.className = "nascerdosol";
            horaDiv.style.color = "#555";
            titulo.style.color = "#333";
        } else if (hora >= 7 && hora < 12) {
            img.src = "assets/manha.jpg";
            img.alt = "Manhã";
            body.className = "manha";
            horaDiv.style.color = "#555";
            titulo.style.color = "#333";
        } else if (hora >= 12 && hora < 17) {
            img.src = "assets/tarde.png";
            img.alt = "Tarde";
            body.className = "tarde";
            horaDiv.style.color = "#555";
            titulo.style.color = "#333";
        } else if (hora >= 17 && hora < 19) {
            img.src = "assets/pordosol.jpg";
            img.alt = "Pôr do Sol";
            body.className = "pordosol";
            horaDiv.style.color = "#555";
            titulo.style.color = "#333";
        } else if (hora >= 19 || hora < 5) {
            img.src = "assets/noite.png";
            img.alt = "Noite";
            body.className = "noite";
            horaDiv.style.color = "#fff";
            titulo.style.color = "#fff";
        } else if (hora >= 0 && hora < 5) {
            img.src = "assets/madrugada.png";
            img.alt = "Madrugada";
            body.className = "madrugada";
            horaDiv.style.color = "#fff";
            titulo.style.color = "#fff";
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