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

  // Função para abrir o modal principal
  function openModal() {
      document.getElementById('myModal').style.display = 'block';
  }

  // Função para fechar o modal principal
  function closeModal() {
      document.getElementById('myModal').style.display = 'none';
  }

  // Função para abrir o modal secundário
  function openCategoryModal() {
      document.getElementById('tagModal').style.display = 'block';
  }

  // Função para fechar o modal secundário
  function closeCategoryModal() {
      document.getElementById('tagModal').style.display = 'none';
  }

  // Função para abrir o terceiro modal
  function openThirdModal() {
      document.getElementById('thirdModal').style.display = 'block';
  }

  // Função para fechar o terceiro modal
  function closeThirdModal() {
      document.getElementById('thirdModal').style.display = 'none';
  }


