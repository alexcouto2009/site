let slideIndex = 0;
let slidesPerView = 3; // Exibir 3 slides por vez
let slides = document.getElementsByClassName("slide");

showSlides();

// Função para exibir os slides
function showSlides() {
    // Ocultar todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrementar o índice de slides
    slideIndex++;

    // Se for o último grupo de slides, voltar ao primeiro
    if (slideIndex > slides.length - slidesPerView) {
        slideIndex = 0;
    }

    // Exibir os próximos 3 slides
    for (let i = 0; i < slidesPerView; i++) {
        let index = (slideIndex + i) % slides.length;
        slides[index].style.display = "block";
    }

    // Configurar o próximo slide a ser exibido após 3 segundos
    setTimeout(showSlides, 3000); // 3 segundos de intervalo
}








