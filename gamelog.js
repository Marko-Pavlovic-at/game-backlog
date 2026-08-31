
const gameList = document.querySelector("#gameList");
const addGameBtn = document.querySelector("#addGameBtn");
const modalOverlay = document.querySelector("#modalOverlay");
const closeBtn = document.querySelector("#closeBtn");
const nameInput = document.querySelector("#nameInput");
const statusInput = document.querySelector("#statusInput");
const hoursInput = document.querySelector("#hoursInput");
const submitBtn = document.querySelector("#submitBtn");


const closeModal = () =>{
    modalOverlay.style.display = "none";
}

const showModal = () =>{
    modalOverlay.style.display = "flex";
}

let games = [
    {name : "Elden Ring", status: "done", hours: 200},
     {name : "Wuthering Waves", status: "playing", hours: 700},
      {name : "Omori", status: "backlog", hours: 0},
       {name : "Rocket League", status: "backlog", hours: 1000},
        {name : "Digimon Time Stranger", status: "done", hours: 50},
]


const createCard = () => {
    games.push(
        {name : nameInput.value,
         status: statusInput.value,
         hours:  hoursInput.value  
        }
    )
}

submitBtn.addEventListener("click", function(){
    createCard();
    closeModal();
    render();
    nameInput.value = "";
    statusInput.value = ""
    hoursInput.value = ""

});




closeBtn.addEventListener("click", closeModal);

addGameBtn.addEventListener("click", showModal);


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