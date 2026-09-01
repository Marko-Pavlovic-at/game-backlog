
const gameList = document.querySelector("#gameList");
const addGameBtn = document.querySelector("#addGameBtn");
const modalOverlay = document.querySelector("#modalOverlay");
const closeBtn = document.querySelector("#closeBtn");
const nameInput = document.querySelector("#nameInput");
const statusInput = document.querySelector("#statusInput");
const hoursInput = document.querySelector("#hoursInput");
const submitBtn = document.querySelector("#submitBtn");
const errorMsg = document.querySelector("#errorMsg");


let games = [
   
]
const userData = JSON.parse(localStorage.getItem("data"));




const closeModal = () =>{
    modalOverlay.style.display = "none";
}

const showModal = () =>{
    modalOverlay.style.display = "flex";
}




const createCard = () => {


        games.push(
        {name : nameInput.value,
         status: statusInput.value,
         hours:  Number(hoursInput.value),
         id: Date.now()
        }
        
    )
    localStorage.setItem("data", JSON.stringify(games));
    errorMsg.style.display = "none";
    
    
    


}

submitBtn.addEventListener("click", function(){
        if(nameInput.value === "" || statusInput.value === "" || hoursInput.value === ""){
        errorMsg.style.display = "block";
        return;
    }
    createCard();
    
    closeModal();
    render();
    nameInput.value = "";
    statusInput.value = ""
    hoursInput.value = ""
    

    

});




closeBtn.addEventListener("click", function(){
    closeModal();
    errorMsg.style.display = "none";
})

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
        let delBtn = document.createElement("button")
        delBtn.className = "btn redBtn";
        delBtn.textContent = "Delete";
        gameCard.append(delBtn);


        delBtn.addEventListener("click", function(){
            games = games.filter(item => item.id !== game.id);
            render();
            

    })
    
    
    } )
    


    
}

render();