// Obtém referências para o modal e o link de abertura
var modal = document.getElementById("myModal");
var linkAbrirModal = document.getElementById("plus");

// Quando o link é clicado, mostra o modal
linkAbrirModal.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica no botão de fechar, fecha o modal
modal.getElementsByClassName("close")[0].onclick = function() {
  modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//category
var categorymodal = document.getElementById("tagModal");
var linkcategoryModal = document.getElementById("tag");

linkcategoryModal.onclick = function() {
    categorymodal.category.display = "block";
  }

