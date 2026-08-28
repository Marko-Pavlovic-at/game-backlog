
const gameList = document.querySelector("#gameList");

let games = [
    {name : "Elden Ring", status: "done", hours: 200},
     {name : "Wuthering Waves", status: "playing", hours: 700},
      {name : "Omori", status: "backlog", hours: 0},
       {name : "Rocket League", status: "backlog", hours: 1000},
        {name : "Digimon Time Stranger", status: "done", hours: 50},
]

function render(){
    gameList.innerHTML = "";
    games.forEach((game) => {
        let gameCard = document.createElement("div");
        gameCard.className = "gameCard"
        gameList.append(gameCard);
        let gameName = document.createElement("p");
        gameName.textContent = game.name;
        gameCard.append(gameName);
        let gameStatus = document.createElement("p");
        gameStatus.textContent = game.status;
        gameCard.append(gameStatus);
        let gameHours = document.createElement("p");
        gameHours.textContent = game.hours + "h";
        gameCard.append(gameHours);
    } )
}

render();