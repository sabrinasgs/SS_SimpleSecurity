// Gerador de senhas - Segurança Simples

var minusculas = "abcdefghijklmnopqrstuvwxyz";
var maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeros = "0123456789";
var simbolos = "!@#$%&*()?";

function gerarSenha() {
  var tamanho = document.getElementById("tamanho").value;
  var todos = minusculas + maiusculas + numeros + simbolos;
  var senha = "";

  // garante pelo menos um de cada tipo
  senha += pegarLetra(minusculas);
  senha += pegarLetra(maiusculas);
  senha += pegarLetra(numeros);
  senha += pegarLetra(simbolos);

  // completa o resto da senha
  while (senha.length < tamanho) {
    senha += pegarLetra(todos);
  }

  document.getElementById("senha").innerText = senha;
  mostrarComposicao(senha);
  mostrarForca(tamanho);
}

// escolhe uma letra aleatória de um texto
function pegarLetra(texto) {
  var posicao = Math.floor(Math.random() * texto.length);
  return texto[posicao];
}

// conta quantos caracteres de cada tipo a senha tem
function mostrarComposicao(senha) {
  var qtdMin = 0;
  var qtdMai = 0;
  var qtdNum = 0;
  var qtdSim = 0;

  for (var i = 0; i < senha.length; i++) {
    var letra = senha[i];
    if (minusculas.includes(letra)) {
      qtdMin++;
    } else if (maiusculas.includes(letra)) {
      qtdMai++;
    } else if (numeros.includes(letra)) {
      qtdNum++;
    } else {
      qtdSim++;
    }
  }

  document.getElementById("composicao").innerHTML =
    '<div class="chip"><strong>' + qtdMin + "</strong>Minúsculas</div>" +
    '<div class="chip"><strong>' + qtdMai + "</strong>Maiúsculas</div>" +
    '<div class="chip"><strong>' + qtdNum + "</strong>Números</div>" +
    '<div class="chip"><strong>' + qtdSim + "</strong>Símbolos</div>";
}

// mostra o número do controle deslizante
function mostrarTamanho() {
  document.getElementById("valorTamanho").innerText =
    document.getElementById("tamanho").value;
}

// barra de força: quanto maior a senha, mais forte
function mostrarForca(tamanho) {
  var barra = document.getElementById("forca");
  var texto = document.getElementById("textoForca");

  if (tamanho < 10) {
    barra.style.width = "50%";
    texto.innerText = "Média";
  } else if (tamanho < 14) {
    barra.style.width = "75%";
    texto.innerText = "Forte";
  } else {
    barra.style.width = "100%";
    texto.innerText = "Muito forte";
  }
}

function copiarSenha() {
  var senha = document.getElementById("senha").innerText;
  navigator.clipboard.writeText(senha);
  alert("Senha copiada!");
}
