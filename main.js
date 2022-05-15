function Login(){
    var player_1 = document.getElementById("player_1_input").value;
    var player_2 = document.getElementById("player_2_input").value;

    localStorage.setItem("Player_1", player_1);
    localStorage.setItem("Player_2", player_2);

    window.location = "Game_Page.html";
}