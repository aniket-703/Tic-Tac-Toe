let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset");
let players_info = document.querySelector(".player");
let gif=document.querySelector(".gif");


let participant1, participant2;
let turn0 = true;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

participant1 = prompt("Enter 1st Player Name");
participant1 = capitalizeFirstLetter(participant1);
participant2 = prompt("Enter 2nd Player Name");
participant2 = capitalizeFirstLetter(participant2);

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
]

players_info.innerText = participant1 + " Turn";

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
            players_info.innerText = participant2 + " Turn";
            box.style.color="#f72585"
        }
        else {
            box.innerText = "X";
            turn0 = true;
            players_info.innerText = participant1 + " Turn";
            box.style.color="#4cc9f0"
        }
        box.disabled = true;
        checkwinner();
    })
})

let count=0;

const checkwinner = () => {

    count++;
    console.log(count);
    for (let pattern of winPatterns) {
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            
            console.log(count)
            if (pos1Val === pos2Val && pos2Val=== pos3Val) {
                console.log("winner");
                //gif.style.display="inline";
                gif.classList.remove("gif");
                Winner_name_display(pos1Val);
            }
            if (pos1Val != pos2Val && pos2Val != pos3Val && count===9) {
                players_info.innerText = " It's a Draw";
                players_info.style.color="red";
                players_info.style.fontWeight="600";
            }
        }

    }
}


const Winner_name_display = (winner_name) => {
    if(winner_name==="O"){
        players_info.innerText = "Winner is "+participant1;
        players_info.style.color="red";
        players_info.style.fontWeight="600";
    }
    else{
        players_info.innerText = "Winner is "+participant2;
        players_info.style.color="red";
        players_info.style.fontWeight="600";
    }
    btn_disable();
}


const btn_disable = () => {
    for(let box of boxes){
       box.disabled=true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
}
const resetgame = () => {
    turn0=true;
    count=0;
    enableBoxes();
    players_info.style.color="black";
    players_info.innerText = participant1 + " Turn";
    players_info.style.fontWeight="100";
    gif.classList.add("gif");
}

reset_btn.addEventListener("click", resetgame)


