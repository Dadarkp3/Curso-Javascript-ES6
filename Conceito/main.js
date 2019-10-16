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
