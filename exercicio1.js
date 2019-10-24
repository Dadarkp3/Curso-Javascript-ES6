class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = "Diego";
  }

  mostrarUsuario() {
    console.log(this.usuario);
  }
}

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}
const a = 1;
let b = 2;
b = 4;
const MinhaLista = new TodoList();
document.getElementById("novoTodo").onclick = function() {
  MinhaLista.add(Matematica.soma(a, b));
};

class Usuario {
  constructor(email, senha, admin = false) {
    this.email = email;
    this.senha = senha;
    this.admin = admin;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha, true);
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const ArrayIdades = usuarios.map(({ idade }) => idade);
console.log(ArrayIdades);
const maiorDeIdade = usuarios.filter(({ idade }) => idade >= 18);
console.log(maiorDeIdade);
const google = usuarios.find(({ empresa }) => empresa === "Google");
console.log(google);

console.log(
  usuarios
    .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(({ idade }) => idade <= 50)
);

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item > item + 10);
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
mostraIdade(usuario);
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => ({ nome, idade });
mostraUsuario(nome, idade);
mostraUsuario(nome);
// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: "Diego", idade: 23 }));

const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "Daiane" };
