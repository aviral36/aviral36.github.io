var mode = "nothing";
var category = "nothing";
var difficulty = "nothing";

function startGame() { 
    var player_mode = document.getElementsByName('mode'); 
    for(i = 0; i < player_mode.length; i++) { 
        if(player_mode[i].checked)
        mode = player_mode[i].value; 
    }
    var player_cat = document.getElementsByName('category'); 
    for(i = 0; i < player_cat.length; i++) { 
        if(player_cat[i].checked)
        category = player_cat[i].value; 
    }
    var player_diff = document.getElementsByName('difficulty'); 
    for(i = 0; i < player_diff.length; i++) { 
        if(player_diff[i].checked)
        difficulty = player_diff[i].value; 
    }

    document.getElementsByClassName('login-window')[0].style.display = 'none';
    document.getElementsByClassName('login-window')[1].style.display = 'none';
    document.getElementsByClassName('login-window')[2].style.display = 'none';
    document.getElementsByClassName('problem-page')[0].style.display = 'block';
} 


/*timer*/
var seconds = 10;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60),
        remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        endQuiz();
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 1000);

function endQuiz() {

}

var input = document.getElementById("answer");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("next-btn").click();
  }
});