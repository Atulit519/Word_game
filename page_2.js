player_1_label = localStorage.getItem("Player_1");
player_2_label = localStorage.getItem("Player_2");
document.getElementById("player_1_name").innerHTML = player_1_label + " : ";
document.getElementById("player_2_name").innerHTML = player_2_label + " : ";

score_1 = 0;
score_2 = 0;
document.getElementById("score_1").innerHTML = score_1;
document.getElementById("score_2").innerHTML = score_2;

document.getElementById("player_question").innerHTML = "Question Turn: " + player_1_label;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_2_label;

question_turn =  "player_1";
answer_turn = "player_2";

function Send(){
    word = document.getElementById("word_input").value;
    lower_word = word.toLowerCase();

    letter_1 = lower_word.charAt(1);

    center_pos = Math.floor(lower_word.length/2);
    letter_2 = lower_word.charAt(center_pos);

    last_pos = lower_word.length - 1;
    letter_3 = lower_word.charAt(last_pos);

    replace_one = lower_word.replace(letter_1, "_");
    replace_two = replace_one.replace(letter_2, "_");
    final_word = replace_two.replace(letter_3, "_");

    question = "<h3>Q. " + final_word + "</h3>";
    input = "<input id = 'answer_input' placeholder = 'Enter your answer'></input>";
    button = "<br> <br> <button id = 'check_button' onclick = 'Check()' class = 'btn btn-success'>Check</button>"

    row = question + input + button;

    document.getElementById("output_division").innerHTML = row;
    document.getElementById("word_input").value = " ";
}

function Check(){
    answer = document.getElementById("answer_input").value;
    console.log(answer);
    next_button = "<br> <button id = 'next_button' onclick = 'Next()' class = 'btn btn-primary'> Next </button>";
    indication = "<br> <h4 id = 'indication_label'></h4>";
    document.getElementById("output_division").innerHTML = next_button + indication;
    if(lower_word == answer){
        document.getElementById("indication_label").innerHTML = "test";
        if(answer_turn == "player_1"){
            score_1 = score_1 + 1;
            document.getElementById("score_1").innerHTML = score_1;
            document.getElementById("indication_label").innerHTML = player_1_label + "is correct!";
        }
        else{
            score_2 = score_2 + 1;
            document.getElementById("score_2").innerHTML = score_2;
            document.getElementById("indication_label").innerHTML = player_2_label + "is correct!";
        }
    }

    if(lower_word != answer){
        document.getElementById("indication_label").innerHTML = "Try Again!";
    }
    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player_2_label;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player_1_label;
    }
    if(answer_turn == "player_1"){
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_2_label;
    }
    else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_1_label;
    }

    document.getElementById("output_division").innerHTML = " ";
}