// "certa" é o número da alternativa correta ^^

var perguntas = [
  {
    texto: "O que é segurança da informação?",
    alternativas: [
      "Instalar programas em vários computadores",
      "Proteção de informações e sistemas contra acesso, uso, divulgação e etc.",
      "Usar apenas um antivírus",
      "Alterar senha"
    ],
    certa: 1
  },
  {
    texto: "Quais são os pilares de S.I?",
    alternativas: [
      "Velocidade, memória e armazenamento",
      "Autenticação, senha e firewall",
      "Confidencialidade, Integridade e Disponibilidade",
      "Criptografia, backup e antivírus"
    ],
    certa: 2
  },
  {
    texto: "O que é engenharia social?",
    alternativas: [
      "Técnica de manipulação psicológica que explora o fator humano",
      "Um curso de engenharia de redes",
      "Um tipo de vírus que apaga arquivos",
      "Uma rede social para engenheiros"
    ],
    certa: 0
  },
  {
    texto: "Qual senha abaixo pode ser considerada forte?",
    alternativas: [
      "123456",
      "senha123",
      "admin2026",
      "!nT3rn3t9(" 
    ],
    certa: 3
  },
  {
    texto: "O que é phishing?",
    alternativas: [
      "Um antivírus gratuito",
      "É a prática de envio de e-mails fraudulentos que se assemelham a e-mails confiáveis",
      "Um backup automático na nuvem",
      "Uma técnica de criptografia"
    ],
    certa: 1
  }
];

// função das perguntas
function mostrarPerguntas() {
  var html = "";

  for (var i = 0; i < perguntas.length; i++) {
    html += '<div class="caixa pergunta">';
    html += "<h3>" + (i + 1) + ". " + perguntas[i].texto + "</h3>";

    for (var j = 0; j < perguntas[i].alternativas.length; j++) {
      html += '<label class="opcao" id="op' + i + "_" + j + '">';
      html += '<input type="radio" name="p' + i + '" value="' + j + '">';
      html += "<span>" + perguntas[i].alternativas[j] + "</span>";
      html += "</label>";
    }

    html += '<p class="feedback" id="resp' + i + '"></p>';
    html += "</div>";
  }

  document.getElementById("perguntas").innerHTML = html;
}

// confere as respostas
function verResultado() {
  var acertos = 0;

  for (var i = 0; i < perguntas.length; i++) {
    var marcada = document.querySelector('input[name="p' + i + '"]:checked');
    var mensagem = document.getElementById("resp" + i);
    var certa = perguntas[i].certa;

    document.getElementById("op" + i + "_" + certa).classList.add("certa");

    if (marcada == null) {
      mensagem.className = "feedback errado";
      mensagem.innerText = "Você não respondeu :|";
    } else if (marcada.value == certa) {
      mensagem.className = "feedback certo";
      mensagem.innerText = "Acertou! ✔";
      acertos++;
    } else {
      document.getElementById("op" + i + "_" + marcada.value).classList.add("errada");
      mensagem.className = "feedback errado";
      mensagem.innerText = "Errou :(";
    }
  }

  var caixa = document.getElementById("resultado");
  caixa.style.display = "block";
  caixa.innerHTML =
    "<strong>" + acertos + " / " + perguntas.length + "</strong>" +
    "perguntas certas<br><br>" +
    '<button class="claro" onclick="refazerQuiz()">Tentar de novo</button>';
  caixa.scrollIntoView({ behavior: "smooth" });
}

// começa o quiz de novo, sem sair da página
function refazerQuiz() {
  mostrarPerguntas();
  document.getElementById("resultado").style.display = "none";
  window.scrollTo(0, 0);
}

mostrarPerguntas();
