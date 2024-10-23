let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newButton = document.querySelector("#new")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let trun0 = true //PlayerX and Player0
let winPattrens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8,]
];

const resetGame = () => {
    let trun0 = true;
    enabledBox();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(trun0) {
            box.innerText = "O"
            trun0 = false;
        }else {
            box.innerText = "X"
            trun0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
}) 

const disabledBox = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enabledBox = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) =>{
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
}


const checkWinner = () =>{
    for(let pattern of winPattrens){
        // console.log(pattern);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val !== "" && pos2Val !=="" && pos3Val !== "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);