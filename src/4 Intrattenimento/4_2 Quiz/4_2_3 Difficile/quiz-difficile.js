var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, chE, correct = 0;

var questions = [
  ["Quali conseguenze derivano dall’inquinamento dell’aria?", "Le piogge acide e l’aumento delle temperature", "Avvertire di meno il bisogno di bere e fumare", "La miopia infantile", "La riduzione del buco dell'ozono", "Aumento dell'inclinazione dell'asse terrestre", "A"],
  ["Quali rischi sulla salute può evitare la raccolta differenziata?", "Il rischio di dover portare mascherine sul viso", "Ingerire rifiuti attraversi i pasti", "La selezione di ceppi batterici resistenti agli antibiotici", "Che ci venga la febbre 3 volte l’anno", "Le mezze stagioni", "C"],
  ["Quale materiale NON perde peso durante il processo di riciclaggio?", "Plastica", "Organico", "Carta", "Alluminio", "Vetro", "E"],
  ["Quale è la modalità di raccolta che permette di abbinare nello stesso contenitore rifiuti non omogenei fra di loro? (vetro e alluminio)", "La raccolta stradale", "La raccolta multimateriale", "La raccolta porta-a-porta", "La raccolta multi-contenitore", "La raccolta multi-oggetto", "B"],
  ["Quale metodo di raccolta garantisce il raggiungimento di percentuali di raccolta differenziata più alte nella popolazione?", "La raccolta mediante cassonetti privati", "La raccolta strada-per-strada", "La raccolta multimateriale", "La raccolta stradale", "La raccolta porta-a-porta", "E"],
  ["Quale prodotto è stato costruito per il 98% di materiale PET riciclato da alcune nazionalità durante gli Europei di calcio?", "Le divise", "Il pallone", "Le bandierine", "La rete della porta", "Le vuvuzela", "A"],
  ["Quale rifiuto, se viene conferito in modo indifferenziato, comporta ulteriore inquinamento di falde acquifere e aria?", "Il vetro", "La carta", "L'organico", "Il legno", "Alluminio", "C"],
  ["Il polistirolo dove va buttato?", "Indifferenziato solo per i comuni abilitati alla raccolta differenziata", "Plastica per i comuni non abilitati alla raccolta differenziata", "Carta", "Va portato all'isola ecologica", "Plastica solo per i comuni abilitati alla raccolta differenziata", "E"],
  ["Sono vantaggi della raccolta differenziata:", "Strade più pulite e il dispendio di energia e acqua", "Risparmio di elettricità e aumento economico dei costi di gestione dei rifiuti", "Aumento dei costi di smaltimento e di riciclaggio di nuovi prodotti", "Creazione di nuovi posti di lavoro e strade senza rifiuti", "Riduzione di emissione di gas co2", "E"],
  ["Quale metodo di smaltimento per materiali non riciclabili permette di produrre energia mediante il calore sprigionato dalla loro combustione?", "Termovalorizzatore", "Deposito in discarica sotto il sole", "Smaltimento mediante centrifuga", "Vaporizzatore", "Inceneritore", "A"]
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
  chE = questions[pos][5];

  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='E'> "+chE+"<br><br>";
  test.innerHTML += "<button style=\"font-family: Segoe UI; padding: -1%; background: black; color:greenyellow;\" onclick='checkAnswer()'>Conferma Risposta</button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][6]){
    correct++;
  }
  pos++;
  choice = undefined;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);