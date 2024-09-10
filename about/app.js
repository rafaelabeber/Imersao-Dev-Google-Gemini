function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  console.log(section);

  let barraPesquisa = document.getElementById("barra-pesquisa").value;

  // if (barraPesquisa) {
  //   section.innerHTML = "<p>Nenhum livro foi encontrado.</p>";
  //   return;
  // }

  console.log(barraPesquisa)
  barraPesquisa = barraPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let autor = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    autor = dado.autor.toLowerCase();

    if (
      titulo.includes(barraPesquisa)
    ) {
      resultados = resultados + `<div class="item-resultado">
        <div class="capa-livro">
          <img src="${dado.capa}" />
        </div>
        <h2>
          <a class="nome-livro">${dado.titulo}</a>
          <p>${dado.autor}</p>
          <p>${dado.descricao}</p>
          <div class="link-compra">
            <a href="${dado.link}" target="_blank">
              Compre na Amazon
            </a>
          </div>
        </h2>
      </div>`;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  section.innerHTML = resultados;
}
// function pesquisar(){
//   alert("clicado");
// }