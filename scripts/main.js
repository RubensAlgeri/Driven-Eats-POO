let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

const btnConfirmar = document.querySelector(".confirmar");
const btnCancelar = document.querySelector(".cancelar");
const btnPedir = document.querySelector(".fazer-pedido");

class Prato {
  constructor(nome, imagem, descricao, preco) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.view = this.getPratoView(this.selecionarPrato);
  }
  selecionarPrato(elemento, nome, preco) {
    const selecionado = document.querySelector(".prato .selecionado");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    pratoSelecionado = {
      nome,
      preco,
    };
    Pedido.prototype.verificarPedido()
  }

  getPratoView(selecionarPrato) {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener("click", () => {
      selecionarPrato(view, this.nome, this.preco);
    });
    view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>
      `;
    const pratosContainer = document.querySelector(".opcoes.prato");
    pratosContainer.appendChild(view);
    return view;
  }
}

class Bebida {
  constructor(nome, imagem, descricao, preco) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.view = this.getBebidaView(this.selecionarBebida);
  }
  selecionarBebida(elemento, nome, preco) {
    const selecionado = document.querySelector(".bebida .selecionado");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    bebidaSelecionada = { nome, preco };
    Pedido.prototype.verificarPedido()
  }

  getBebidaView(selecionarBebida) {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener("click", () => {
      selecionarBebida(view, this.nome, this.preco);
    });
    view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>
      `;
    const bebidasContainer = document.querySelector(".opcoes.bebida");
    bebidasContainer.appendChild(view);
    return view;
  }
}

class Sobremesa {
  constructor(nome, imagem, descricao, preco) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.view = this.getSobremesaView(this.selecionarSobremesa);
  }
  selecionarSobremesa(elemento, nome, preco, pedido) {
    const selecionado = document.querySelector(".sobremesa .selecionado");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    sobremesaSelecionada = { nome, preco };
    Pedido.prototype.verificarPedido()
  }

getSobremesaView(selecionarSobremesa) {
  const view = document.createElement("div");
  view.classList.add("opcao");
  view.addEventListener("click", () => {
    selecionarSobremesa(view, this.nome, this.preco);
  });
  view.innerHTML = `
        <img src="${this.imagem}" />
        <div class="titulo">${this.nome}</div>
        <div class="descricao">${this.descricao}</div>
        <div class="fundo">
            <div class="preco">R$ ${this.preco.toFixed(2)}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    `;
  const sobremesasContainer = document.querySelector(".opcoes.sobremesa");
  sobremesasContainer.appendChild(view);
  return view;
}
}

class Pedido {
  constructor(){
    this.getPrecoTotal = getPrecoTotal();
  }
  getPrecoTotal() {
    return (
      pratoSelecionado.preco +
      bebidaSelecionada.preco +
      sobremesaSelecionada.preco
    );
  }

  confirmarPedido(getPrecoTotal) {
    const modal = document.querySelector(".overlay");
    modal.classList.remove("escondido");

    document.querySelector(".confirmar-pedido .prato .nome").innerHTML =
      pratoSelecionado.nome;
    document.querySelector(".confirmar-pedido .prato .preco").innerHTML =
      pratoSelecionado.preco.toFixed(2);

    document.querySelector(".confirmar-pedido .bebida .nome").innerHTML =
      bebidaSelecionada.nome;
    document.querySelector(".confirmar-pedido .bebida .preco").innerHTML =
      bebidaSelecionada.preco.toFixed(2);

    document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML =
      sobremesaSelecionada.nome;
    document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML =
      sobremesaSelecionada.preco.toFixed(2);

    document.querySelector(".confirmar-pedido .total .preco").innerHTML =
      getPrecoTotal.toFixed(2);
  }

  cancelarPedido() {
    const modal = document.querySelector(".overlay");
    modal.classList.add("escondido");
  }

  enviarZap(getPrecoTotal) {
    const telefoneRestaurante = 553299999999;
    const encodedText = encodeURIComponent(
      `Olá, gostaria de fazer o pedido: \n- Prato: ${
        pratoSelecionado.nome
      } \n- Bebida: ${bebidaSelecionada.nome} \n- Sobremesa: ${
        sobremesaSelecionada.nome
      } \nTotal: R$ ${getPrecoTotal.toFixed(2)}`
    );

    const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
    window.open(urlWhatsapp);
  }

  verificarPedido() {
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
      btnPedir.classList.add("ativo");
      btnPedir.disabled = false;
      btnPedir.innerHTML = "Fazer pedido";
    }
  }
}

const pratos = [
  new Prato(
    "Estrombelete de Frango",
    "img/frango_yin_yang.png",
    "Um pouco de batata, um pouco de salada",
    13.9
  ),
  new Prato("Asa de Boi", "img/frango_yin_yang.png", "Com molho shoyu", 14.9),
  new Prato(
    "Carne de Monstro",
    "img/frango_yin_yang.png",
    "Com batata assada e farofa",
    15.9
  ),
];

const bebidas = [
  new Bebida("Coquinha gelada", "img/coquinha_gelada.png", "Lata 350ml", 3.9),
  new Bebida("Caldo de Cana", "img/coquinha_gelada.png", "Copo 600ml", 4.9),
  new Bebida("Corote Gelado", "img/coquinha_gelada.png", "Garrafa 400ml", 5.9),
];

const sobremesas = [
  new Sobremesa("Pudim", "img/pudim.png", "Gosto de doce de leite", 6.9),
  new Sobremesa("Flam", "img/pudim.png", "Gosto de chocolate", 7.9),
  new Sobremesa("Brigadeiro", "img/pudim.png", "3 unidades", 8.9),
];

btnConfirmar.addEventListener("click", () => {
  Pedido.prototype.enviarZap(Pedido.prototype.getPrecoTotal());
});

btnCancelar.addEventListener("click", () => {
  Pedido.prototype.cancelarPedido();
});

btnPedir.addEventListener("click", () => {
  Pedido.prototype.confirmarPedido(Pedido.prototype.getPrecoTotal());
});
