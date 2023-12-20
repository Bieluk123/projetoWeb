class JogoController {
  constructor() {
    this.jogos = [];
  }

  // Create operation
  createJogo(jogo) {
    this.jogos.push(jogo);
  }

  // Read operation
  getJogoById(id) {
    return this.jogos.find(jogo => jogo.id === id);
  }

  getAllJogos() {
    return this.jogos;
  }

  // Update operation
  updateJogo(id, updatedJogo) {
    const jogoIndex = this.jogos.findIndex(jogo => jogo.id === id);
    if (jogoIndex !== -1) {
      this.jogos[jogoIndex] = updatedJogo;
    }
  }

  // Delete operation
  deleteJogo(id) {
    this.jogos = this.jogos.filter(jogo => jogo.id !== id);
  }

  // Método para preencher a tabela no HTML com os jogos existentes
  renderTable() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    this.jogos.forEach(jogo => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${jogo.id}</td>
        <td>${jogo.nome}</td>
        <td>${jogo.genero}</td>
        <td>${jogo.ano}</td>
        <td>${jogo.preco}</td>
        <td>${jogo.nomeCompleto()}</td>
        <td>
          <button onclick="editarJogo(${jogo.id})">Editar</button>
          <button onclick="excluirJogo(${jogo.id})">Excluir</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
}

// Função para inicializar o controlador e renderizar a tabela
const jogoController = new JogoController();
jogoController.renderTable();

// Função para adicionar um novo jogo a partir dos dados do formulário
function adicionarJogo() {
  const nome = document.getElementById('inpNome').value;
  const genero = document.getElementById('inpGenero').value;
  const ano = document.getElementById('inpAno').value;
  const preco = document.getElementById('inpPreco').value;

  jogoController.createJogo(nome, genero, ano, preco);
  jogoController.renderTable();
}

// Função para editar um jogo
function editarJogo(id) {
  const jogo = jogoController.getJogoById(id);
  if (jogo) {
    document.getElementById('inpCodigo').value = jogo.id;
    document.getElementById('inpNome').value = jogo.nome;
    document.getElementById('inpGenero').value = jogo.genero;
    document.getElementById('inpAno').value = jogo.ano;
    document.getElementById('inpPreco').value = jogo.preco;
  }
}

// Função para excluir um jogo
function excluirJogo(id) {
  jogoController.deleteJogo(id);
  jogoController.renderTable();
}
