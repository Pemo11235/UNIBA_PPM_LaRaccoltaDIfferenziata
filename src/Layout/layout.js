/*---HEADER---*/
function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

function chiusura() {
   var conferma = confirm("Vuoi davvero chiudere l'applicazione?");
        if(conferma==true){
            window.close();
}
}

/*visualizza informazioni bottoni*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

/*---FOOTER---*/
/*attivazione/disattivazione overlay*/
function onMap() {
    document.getElementById("overlayMap").style.display = "block";
}
function offMap() {
    document.getElementById("overlayMap").style.display = "none";
}

function onAiuto() {
    document.getElementById("overlayAiuto").style.display = "block";
}

function offAiuto() {
    document.getElementById("overlayAiuto").style.display = "none";
}

function onCredits() {
    document.getElementById("overlayCredits").style.display = "block";
}

function offCredits() {
    document.getElementById("overlayCredits").style.display = "none";
}