var mode;
var category;
var difficulty;
var countdownTimer;

var num1;
var num2;
var answer;
var user_answer;
var lowlimit;
var uplimit;
var score = 0;
var right_answers = 0;
var wrong_answers = 0;
var unattempted = 0;
var accuracy = 0;
var attempted;

var easy_as_min = 10;
var easy_as_max = 100;
var easy_multiply_min = 2;
var easy_multiply_max = 20;
var easy_divide_min = 2;
var easy_divide_max = 50;
var easy_percent_min = 50;
var easy_percent_max = 200;

var medium_as_min = 100;
var medium_as_max = 10000;
var medium_multiply_min = 15;
var medium_multiply_max = 100;
var medium_divide_min = 100;
var medium_divide_max = 10000;
var medium_percent_min = 100;
var medium_percent_max = 2000;

var hard_as_min = 10000;
var hard_as_max = 1000000;
var hard_multiply_min = 50;
var hard_multiply_max = 1000;
var hard_divide_min = 1000;
var hard_divide_max = 100000;
var hard_percent_min = 100;
var hard_percent_max = 1000;

var easy_percent = [10,20,30,40,50,60,70,80,90];
var medium_percent = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];

//random number generator
function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
 }

function startGame() {
    var countdownTimer = setInterval('secondPassed()', 1000);
     
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
    document.getElementById("answer").focus();

    //commands to replace num1 and num2 with numbers
    if(difficulty == "easy"){
        if(category == "add"){
            var num1 = rand(easy_as_min, easy_as_max);
            var num2 = rand(easy_as_min, easy_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " + " + num2;
            if(mode == "accurate"){
                answer = num1+num2;
            }else{
                var temp = num1+num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }else if(category == "percent"){
            var num1 = rand(easy_percent_min, easy_percent_max);
            var t2 = rand(0,8);
            var num2 = easy_percent[t2];
            document.getElementsByClassName('problem-statement')[0].innerHTML = num2 + "% of " + num1;
            if(mode == "accurate"){
                answer = (num1*num2)/100;
            }else{
                var temp = (num1*num2)/100;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "subtract"){
            var num1 = rand(easy_as_min, easy_as_max);
            var num2 = rand(easy_as_min, easy_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " - " + num2;
            if(mode == "accurate"){
                answer = num1-num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "multiply"){
            var num1 = rand(easy_multiply_min, easy_multiply_max);
            var num2 = rand(easy_multiply_min, easy_multiply_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " x " + num2;
            if(mode == "accurate"){
                answer = num1*num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else {
            var num1 = rand(easy_divide_min+1, easy_divide_max);
            var num2 = rand(easy_divide_min, num1/2);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " / " + num2;
            if(mode == "accurate"){
                answer = Math.floor(num1/num2);
            }else{
                var temp = num1/num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }
    }
    else if(difficulty == "medium"){
        if(category == "add"){
            var num1 = rand(medium_as_min, medium_as_max);
            var num2 = rand(medium_as_min, medium_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " + " + num2;
            if(mode == "accurate"){
                answer = num1+num2;
            }else{
                var temp = num1+num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if(category == "percent"){
            var num1 = rand(medium_percent_min, medium_percent_max);
            var t2 = rand(0,18);
            var num2 = medium_percent[t2];
            document.getElementsByClassName('problem-statement')[0].innerHTML = num2 + "% of " + num1;
            if(mode == "accurate"){
                answer = (num1*num2)/100;
            }else{
                var temp = (num1*num2)/100;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }else if (category == "subtract"){
            var num1 = rand(medium_as_min, medium_as_max);
            var num2 = rand(medium_as_min, medium_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " - " + num2;
            if(mode == "accurate"){
                answer = num1-num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "multiply"){
            var num1 = rand(medium_multiply_min, medium_multiply_max);
            var num2 = rand(medium_multiply_min, medium_multiply_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " x " + num2;
            if(mode == "accurate"){
                answer = num1*num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else {
            var num1 = rand(medium_divide_min+1, medium_divide_max);
            var num2 = rand(medium_divide_min, num1/2);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " / " + num2;
            if(mode == "accurate"){
                answer = Math.floor(num1/num2);
            }else{
                var temp = num1/num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }
    }
    else{
        if(category == "add"){
            var num1 = rand(hard_as_min, hard_as_max);
            var num2 = rand(hard_as_min, hard_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " + " + num2;
            if(mode == "accurate"){
                answer = num1+num2;
            }else{
                var temp = num1+num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if(category == "percent"){
            var num1 = rand(hard_percent_min, hard_percent_max);
            var num2 = rand(1,100);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num2 + "% of " + num1;
            if(mode == "accurate"){
                answer = (num1*num2)/100;
            }else{
                var temp = (num1*num2)/100;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }else if (category == "subtract"){
            var num1 = rand(hard_as_min, hard_as_max);
            var num2 = rand(hard_as_min, hard_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " - " + num2;
            if(mode == "accurate"){
                answer = num1-num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "multiply"){
            var num1 = rand(hard_multiply_min, hard_multiply_max);
            var num2 = rand(hard_multiply_min, hard_multiply_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " x " + num2;
            if(mode == "accurate"){
                answer = num1*num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else {
            var num1 = rand(hard_divide_min+1, hard_divide_max);
            var num2 = rand(hard_divide_min, num1/2);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " / " + num2;
            if(mode == "accurate"){
                answer = Math.floor(num1/num2);
            }else{
                var temp = num1/num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }
    }
} 


/*timer*/
var seconds = 120;
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

function nextQuestion() {
    var ua = document.getElementById("answer").value;
    var user_answer = parseInt(ua, 10);
    document.getElementById("answer").focus();
    document.getElementById("answer").value = '';
    if(isNaN(user_answer)){
        unattempted++;
    }
    else{
        if(typeof answer == 'number'){
            if(Math.floor(user_answer) == Math.floor(answer)){
                right_answers++;
            }
            else{
                wrong_answers++;
            }
        }
        else{
            if(user_answer <= answer[1] && user_answer >= answer[0]){
                right_answers++;
            }
            else{
                wrong_answers++;
            }
        }
    }

    // commands to replace num1 and num2 with numbers
    if(difficulty == "easy"){t
        if(category == "add"){
            var num1 = rand(easy_as_min, easy_as_max);
            var num2 = rand(easy_as_min, easy_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " + " + num2;
            if(mode == "accurate"){
                answer = num1+num2;
            }else{
                var temp = num1+num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if(category == "percent"){
            var num1 = rand(easy_percent_min, easy_percent_max);
            var t2 = rand(0,8);
            var num2 = easy_percent[t2];
            document.getElementsByClassName('problem-statement')[0].innerHTML = num2 + "% of " + num1;
            if(mode == "accurate"){
                answer = (num1*num2)/100;
            }else{
                var temp = (num1*num2)/100;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "subtract"){
            var num1 = rand(easy_as_min, easy_as_max);
            var num2 = rand(easy_as_min, easy_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " - " + num2;
            if(mode == "accurate"){
                answer = num1-num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "multiply"){
            var num1 = rand(easy_multiply_min, easy_multiply_max);
            var num2 = rand(easy_multiply_min, easy_multiply_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " x " + num2;
            if(mode == "accurate"){
                answer = num1*num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else {
            var num1 = rand(easy_divide_min+1, easy_divide_max);
            var num2 = rand(easy_divide_min, num1/2);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " / " + num2;
            if(mode == "accurate"){
                answer = Math.floor(num1/num2);
            }else{
                var temp = num1/num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }
    }
    else if(difficulty == "medium"){
        if(category == "add"){
            var num1 = rand(medium_as_min, medium_as_max);
            var num2 = rand(medium_as_min, medium_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " + " + num2;
            if(mode == "accurate"){
                answer = num1+num2;
            }else{
                var temp = num1+num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if(category == "percent"){
            var num1 = rand(medium_percent_min, medium_percent_max);
            var t2 = rand(0,18);
            var num2 = medium_percent[t2];
            document.getElementsByClassName('problem-statement')[0].innerHTML = num2 + "% of " + num1;
            if(mode == "accurate"){
                answer = (num1*num2)/100;
            }else{
                var temp = (num1*num2)/100;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "subtract"){
            var num1 = rand(medium_as_min, medium_as_max);
            var num2 = rand(medium_as_min, medium_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " - " + num2;
            if(mode == "accurate"){
                answer = num1-num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "multiply"){
            var num1 = rand(medium_multiply_min, medium_multiply_max);
            var num2 = rand(medium_multiply_min, medium_multiply_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " x " + num2;
            if(mode == "accurate"){
                answer = num1*num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else {
            var num1 = rand(medium_divide_min+1, medium_divide_max);
            var num2 = rand(medium_divide_min, num1/2);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " / " + num2;
            if(mode == "accurate"){
                answer = Math.floor(num1/num2);
            }else{
                var temp = num1/num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }
    }
    else{
        if(category == "add"){
            var num1 = rand(hard_as_min, hard_as_max);
            var num2 = rand(hard_as_min, hard_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " + " + num2;
            if(mode == "accurate"){
                answer = num1+num2;
            }else{
                var temp = num1+num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if(category == "percent"){
            var num1 = rand(hard_percent_min, hard_percent_max);
            var num2 = rand(1,100);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num2 + "% of " + num1;
            if(mode == "accurate"){
                answer = (num1*num2)/100;
            }else{
                var temp = (num1*num2)/100;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "subtract"){
            var num1 = rand(hard_as_min, hard_as_max);
            var num2 = rand(hard_as_min, hard_as_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " - " + num2;
            if(mode == "accurate"){
                answer = num1-num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else if (category == "multiply"){
            var num1 = rand(hard_multiply_min, hard_multiply_max);
            var num2 = rand(hard_multiply_min, hard_multiply_max);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " x " + num2;
            if(mode == "accurate"){
                answer = num1*num2;
            }else{
                var temp = num1*num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        } else {
            var num1 = rand(hard_divide_min+1, hard_divide_max);
            var num2 = rand(hard_divide_min, num1/2);
            document.getElementsByClassName('problem-statement')[0].innerHTML = num1 + " / " + num2;
            if(mode == "accurate"){
                answer = Math.floor(num1/num2);
            }else{
                var temp = num1/num2;
                var lowlimit = temp*0.9;
                var uplimit = temp*1.1;
                answer = [lowlimit, uplimit];
            }
        }
    }    
}

function endQuiz() {
    document.getElementsByClassName('login-window')[0].style.display = 'block';
    document.getElementsByClassName('login-window')[1].style.display = 'none';
    document.getElementsByClassName('login-window')[2].style.display = 'none';
    document.getElementsByClassName('problem-page')[0].style.display = 'none';
    document.getElementsByClassName('result-page')[0].style.display = 'block';

    var score = right_answers*3 - wrong_answers;
    var attempted = right_answers + wrong_answers;
    var accuracy = (right_answers/attempted)*100;
    //update score
    document.getElementById('result_table').rows[0].cells[1].innerHTML = score;
    //update attempted
    document.getElementById('result_table').rows[1].cells[1].innerHTML = attempted;
    //update correct
    document.getElementById('result_table').rows[2].cells[1].innerHTML = right_answers;
    //update incorrect
    document.getElementById('result_table').rows[3].cells[1].innerHTML = wrong_answers;
    //update accuracy
    document.getElementById('result_table').rows[4].cells[1].innerHTML = accuracy + "%";
}

/*document.getElementById("answer")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        alert("pressed enter");
        //document.getElementById("next-btn").click();
    }
});
*/

function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('next-btn').click();
        return false;
    }
    return true;
}