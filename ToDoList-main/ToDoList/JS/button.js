const link = document.getElementById('buttonCriar');
const overlay = document.getElementById('overlay');

// Adicione um evento de clique ao link
link.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Exibir overlay/modal
    overlay.style.display = 'flex';
});

// Função para fechar o modal
function fecharModal() {
    overlay.style.display = 'none';
}

const link2 = document.getElementById('buttonCriar');
const overlay2 = document.getElementById('overlay');

// Adicione um evento de clique ao link
link.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Exibir overlay/modal
    overlay.style.display = 'flex';
});

// Função para fechar o modal
function fecharModal() {
    overlay.style.display = 'none';
}