document.addEventListener("DOMContentLoaded", () => {
    const elementoImagem = document.querySelector("img");
    const horaAtual = new Date().getHours();

    if (horaAtual >= 5 && horaAtual < 7) {
        elementoImagem.src = "assets/nascerdosol.jpg";
        elementoImagem.alt = "Imagem do Nascer do Sol";
    } else if (horaAtual >= 7 && horaAtual < 12) {
        elementoImagem.src = "assets/manha.jpg";
        elementoImagem.alt = "Imagem da Manhã";
    } else if (horaAtual >= 12 && horaAtual < 17) {
        elementoImagem.src = "assets/tarde.png";
        elementoImagem.alt = "Imagem da Tarde";
    } else if (horaAtual >= 17 && horaAtual < 19) {
        elementoImagem.src = "assets/pordosol.jpg";
        elementoImagem.alt = "Imagem do Pôr do Sol";
    } else if (horaAtual >= 19 || horaAtual < 5) {
        elementoImagem.src = "assets/noite.png";
        elementoImagem.alt = "Imagem da Noite";
    } else {
        elementoImagem.src = "assets/madrugada.png";
        elementoImagem.alt = "Imagem da Madrugada";
    }
});