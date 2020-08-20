var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
  ["Fare la raccolta differenziata significa..?", "Ridurre la quantità di rifiuti da smaltire e di agenti inquinanti", "Mantenere più puliti i nostri appartamenti e le nostre strade", "Avere meno tempo libero", "A"],
  ["Cosa si evita gestendo correttamente i rifiuti?", "Che il cattivo odore si diffonda anche su di noi", "Che finiscano in discarica e inquinino il suolo", "Che occupino troppo spazio su suolo pubblico", "B"],
  ["Quale di questi NON è una tipologia di rifiuto urbano?", "Speciale", "Pericoloso", "Alluminio", "A"],
  ["Quale di questi NON è un rifiuto da buttare nel contenitore della CARTA?", "Portauova in cartone", "Portauova in plastica", "Cartoni da imballaggio", "B"],
  ["Quale tipo di raccolta avviene a domicilio?", "La raccolta stradale", "La raccolta multimateriale", "La raccolta porta-a-porta", "C"],
  ["Quale tipo di raccolta avviene mediante l’uso di diversi contenitori, dette ‘campane’, posizionati nelle strade?", "La raccolta mediante cassonetti privati", "La raccolta stradale", "La raccolta porta-a-porta", "B"],
  ["Circa un terzo dei rifiuti prodotti da una persona è composta da?", "Rifiuti Organici", "Metallo", "Legno", "A"],
  ["Quale materiale è riciclato da millenni?", "Scorie nucleari", "Vetro", "Plastica", "B"],
  ["Dove si butta il tappo a vite dei barattoli di vetro?", "Metallo", "Indifferenziato", "Plastica", "A"],
  ["I vantaggi sulla raccolta differenziata sono:", "Esclusivamente Ambientali", "Non ci sono vantaggi nel fare la raccolta differenziata", "Economici e ambientali", "C"]
  ];

questions = shuffle(questions);

function shuffle(questions) {
  var currentIndex = questions.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = questions[currentIndex];
    questions[currentIndex] = questions[randomIndex];
    questions[randomIndex] = temporaryValue;
  }
  return questions;
}

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  button = get("button");
  if(pos >= questions.length){
    if(correct <= 3){
        test.innerHTML = "<h2>Hai risposto correttamente al "+correct+"0% delle domande! <br> Impegnati di più!</h2>"
    }
    if(correct >= 4 && correct <=6 && correct !=0){
        test.innerHTML = "<h2>Hai risposto correttamente al "+correct+"0% delle domande! <br> Puoi fare di meglio!</h2>"
    }
        if(correct >= 7 && correct <=9 && correct !=0){
        test.innerHTML = "<h2>Hai risposto correttamente al "+correct+"0% delle domande! <br> Stai scalando la vetta, ci sei quasi!</h2>"
    }
        if(correct == 10 && correct !=0){
        test.innerHTML = "<h2>Hai risposto correttamente al "+correct+"0% delle domande!<br> WOW SEI UN DRAGO!</h2>"
    }
    
    document.getElementById("button1").innerHTML = "<button style=\"margin-left: -175%; font-family: Segoe UI; padding: 15%; background: black; color:greenyellow;\" onclick='location.reload();'>RIPROVA</button>";
    document.getElementById("button2").innerHTML = "<button style=\"margin-left: 62%; font-family: Segoe UI; padding: -1%; background: black; color:greenyellow;\" onclick='window.location = \"../Quiz_Home.html\"'>CAMBIA DIFFICOLTA'</button>";

    get("test_status").innerHTML = "Quiz Completato!";
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML = "Domanda "+(pos+1)+" di "+ questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];

  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button style=\"font-family: Segoe UI; padding: -1%; background: black; color:greenyellow;\" onclick='checkAnswer()'>Conferma Risposta</button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][4]){
    correct++;
  }
  pos++;
  choice = undefined;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);