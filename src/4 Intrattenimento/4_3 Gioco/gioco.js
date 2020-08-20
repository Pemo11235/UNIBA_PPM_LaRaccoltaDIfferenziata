$(document).ready(function(){
  
  // Vars
  var score = 0;
  var numBoxesDropped = 0;
  var numBoxes = $('.box').length;

  
  // Creat sounds
  var correctSound = document.createElement('audio');
   correctSound.setAttribute('src', 'http://www.orangefreesounds.com/wp-content/uploads/2017/06/Ting-sound-effect.mp3');
  
  var errorSound = document.createElement('audio');
  errorSound.setAttribute('src', 'http://www.orangefreesounds.com/wp-content/uploads/2016/02/Failure-sound-effect.mp3');
      
    var finishSound = document.createElement('audio');
  finishSound.setAttribute('src', 'http://www.orangefreesounds.com/wp-content/uploads/2018/05/Game-show-winner-bell-sound-effect.mp3');

  // make boxes draggable
  $('.box').draggable({
    revert: true
  });
  
  // make doparea droppable
  $('.droparea').droppable({
    accept : '.box',
    drop : handleBoxDrop
  });
  
  // function that handles the box being droppped
  function handleBoxDrop(event, ui){
    // Vars
    var box = ui.draggable;    
    var boxNumType = box.attr('data-numtype');
    var dropArea = $(this);
    var dropAreaNumType = dropArea.attr('data-area-numtype');
    
    // Check if box number type matches number type of drop area
    if( boxNumType == dropAreaNumType ){
      // num type matches!
      box.addClass('correct');
      correctSound.play();
      score= score+10;
    }else{
      // num type does NOT match!
      box.addClass('incorrect');
      errorSound.play();
    }
    
    // disable dragging
    box.draggable('disable').draggable('option', 'revert', false);
    numBoxesDropped++;
    
    // output score
    $('#score').text(score);
    
    // check if game has ended
    if(numBoxesDropped == numBoxes){
      // game finished!

    finishSound.play();

    document.getElementById("score-container").innerHTML = "<span id = \"score\" style=\"border: 1.4px solid greenyellow; font-size: 2em; width: 20%; padding: 1.4%;; margin-top: 3%; text-align: center; margin-left: 36%; color: white; background-color: #111;\">" + "Punteggio : " + score + " su 100" + "</span>"
    document.getElementById("button1").innerHTML = "<button style=\"margin-left: -145%; font-family: Segoe UI; padding: 5%; background: black; color:greenyellow;\" onclick='location.reload();'>RIPROVA</button>";
    document.getElementById("button2").innerHTML = "<button style=\"margin-left: 62%; font-family: Segoe UI; padding: 5%; background: black; color:greenyellow;\" onclick='window.location = \"../Intrattenimento_Home.html\"'>INDIETRO</button>";
    }
  }
  
});

