var mode;
var category;
var difficulty;

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
    document.body.innerHTML = "";
    document.getElementById("result").innerHTML
                        = "Mode: "+mode + " Category: "+category+" Difficulty: "+difficulty;
} 