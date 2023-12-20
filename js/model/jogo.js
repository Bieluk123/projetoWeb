class Jogo {
  constructor(id, nome, genero, ano, preco) {
    this.id = id;
    this.nome = nome;
    this.genero = genero;
    this.ano = ano;
    this.preco = preco;
  }

  nomeCompleto() {
    return `${this.nome} ${this.genero}`;
  }
}