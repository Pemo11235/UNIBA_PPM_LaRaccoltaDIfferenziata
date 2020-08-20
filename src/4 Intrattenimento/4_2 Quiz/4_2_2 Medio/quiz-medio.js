var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  ["Quante particelle di plastica circa, contiene un chilometro quadrato di mare?", "10", "46.000", "100.000", "500", "B"],
  ["La plastica se correttamente riciclata..", "Può essere trasformata in oro", "Ha il vantaggio di essere più resistente", "Non finisce in mare, dove mete a rischio la vita animale e vegetale", "Può essere riutilizzata per creare palloni che costano di meno", "C"],
  ["Quale tipologia di rifiuto urbano NON può essere interamente riciclato?", "Secco", "Vetro", "Plastica", "Alluminio", "A"],
  ["Quale tipologia di rifiuto segue il processo di compostaggio durante la sua fase di riciclo?", "Alluminio", "Secco", "Carta", "Organico", "D"],
  ["Quanti metodi di raccolta esistono? ", "2", "4", "3", "1", "C"],
  ["Quale metodo di raccolta è considerabile via di mezzo fra la raccolta a domicilio e quella stradale?", "La raccolta mediante cassonetti privati", "La raccolta porta-a-porta", "La raccolta strada-per-strada", "La raccolta mediante campane", "A"],
  ["Quale prodotto italiano è costruito solo con materiale riciclato (circa 7 milioni di pezzi l’anno)?", "Le pistole Beretta", "Le caffettiere moka", "Le biciclette da corsa ", "Scatole dei pelati ", "B"],
  ["Le posate di plastica non biodegradabili vanno buttate in:", "Plastica", "Indifferenziato ", "Plastica/Metallo", "Organico", "B"],
  ["Quali sono i benefici di tipo economico che porta la raccolta differenziata?", "Risparmio di materie prime per riciclare nuovi prodotti", "Meno posti di lavoro, quindi meno spese", "Risparmio di tempo e risorse per effetuare il riciclo", "Uso più efficente di materie prime", "A"],
  ["Cosa si intende per “isole di plastica”?", "Le zone di raccolta della plastica", "Le isole ecologiche galleggianti di Venezia", "Isole galleggianti in mare composte da rifiuti plastici", "Centri di raccolta della plastica", "C"]
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
  get("test_status").innerHTML = "Domanda "+(pos+1)+" di "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];

  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  test.innerHTML += "<button style=\"font-family: Segoe UI; padding: -1%; background: black; color:greenyellow;\" onclick='checkAnswer()'>Conferma Risposta</button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][5]){
    correct++;
  }
  pos++;
  choice = undefined;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);