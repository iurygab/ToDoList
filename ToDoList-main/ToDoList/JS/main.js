// Obtém referências para o modal e o link de abertura do modal principal
var modal = document.getElementById("myModal");
var linkAbrirModal = document.getElementById("plus");

// Quando o link é clicado, mostra o modal principal
linkAbrirModal.onclick = function(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  modal.style.display = "block";
}

// Quando o usuário clica no botão de fechar do modal principal, fecha o modal
modal.getElementsByClassName("close")[0].onclick = function() {
  modal.style.display = "none";
}

// Fecha o modal principal se o usuário clicar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Obtém referências para o modal secundário e o link de abertura do modal secundário
var categorymodal = document.getElementById("tagModal");
var linkcategoryModal = document.getElementById("tag");

// Quando o link é clicado, mostra o modal secundário
linkcategoryModal.onclick = function(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  categorymodal.style.display = "block";
}

// Quando o usuário clica no botão de fechar do modal secundário, fecha o modal secundário
categorymodal.getElementsByClassName("close")[0].onclick = function() {
  categorymodal.style.display = "none";
}

// Fecha o modal secundário se o usuário clicar fora dele
window.onclick = function(event) {
  if (event.target == categorymodal) {
    categorymodal.style.display = "none";
  }
}

// Funções para abrir e fechar o modal principal e o modal terciário permanecem as mesmas
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function openCategoryModal() {
  document.getElementById('tagModal').style.display = 'block';
}

function closeCategoryModal() {
  document.getElementById('tagModal').style.display = 'none';
}

function openThirdModal() {
  document.getElementById('thirdModal').style.display = 'block';
}

function closeThirdModal() {
  document.getElementById('thirdModal').style.display = 'none';
}

//adicionar texto
function mostrarTexto() {
  var texto = document.getElementById("texto").value;
  var novoElemento = document.createElement("div");
  novoElemento.className = "info"; // Adiciona a classe "info" à nova div
  var novoH1 = document.createElement("h1");
  novoH1.innerText = texto;
  novoElemento.appendChild(novoH1);
  document.getElementById("containertask").appendChild(novoElemento);
}
