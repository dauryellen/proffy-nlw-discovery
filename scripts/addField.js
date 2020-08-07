// Procurar o botao
document.querySelector('#add-time')
  .addEventListener('click', cloneField);
// Quando clicar no botao

//executar uma acao
function cloneField() {
  // Duplicar os campos. Que campo?
  const newFieldContainer = document.querySelector('.schedule-item')
    .cloneNode(true);
  // Pegar os campos. Que campos?
  const fields = newFieldContainer
    .querySelectorAll('input');
  // Para cada campo, limpar
  fields.forEach(function(field) {
    // Pega o field do momento e limpa ele
    field.value = "";
  });
  // Colocar na pagina. Onde?
  document.querySelector('#schedule-items')
    .appendChild(newFieldContainer);
}
 
