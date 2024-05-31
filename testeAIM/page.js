const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
});

document.addEventListener('DOMContentLoaded', (event) => {
    aplicarDesconto();
});

function aplicarDesconto() {            
    const precoOriginal = document.getElementById('price1').textContent;            
    const precoOriginalNumero = parseFloat(precoOriginal.replace('.', '').replace(',', '.'));            
    const desconto = precoOriginalNumero * 0.05;            
    const precoComDesconto = precoOriginalNumero - desconto;            
    const precoComDescontoFormatado = precoComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });   

    const elementosDesconto = document.querySelectorAll('#pix-desconto');
    elementosDesconto.forEach(elemento => {
        elemento.textContent = precoComDescontoFormatado;
    });
}


window.addEventListener('scroll', function() {
    const divHidden = document.getElementById('divHidden');
    const scrollPosition = window.scrollY;
    
    const triggerPosition = 100;
    
    if (scrollPosition > triggerPosition) {
        divHidden.style.display = 'block';
    } else {
        divHidden.style.display = 'none';
    }
});