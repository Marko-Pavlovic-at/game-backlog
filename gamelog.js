
const gameList = document.querySelector("#gameList");
const addGameBtn = document.querySelector("#addGameBtn");
const modalOverlay = document.querySelector("#modalOverlay");


const showModal = () =>{
    modalOverlay.style.display = "flex";
}

addGameBtn.addEventListener("click", showModal);

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
        gameName.textContent = `Name: ${game.name}`
        gameCard.append(gameName);
        let gameStatus = document.createElement("p");
        gameStatus.textContent = `Status: ${game.status}`;
        gameCard.append(gameStatus);
        let gameHours = document.createElement("p");
        gameHours.textContent = `Time Played: ${game.hours}h`;
        gameCard.append(gameHours);
    } )
}

render();