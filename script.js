let btns = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msgContainer")
let resetBtn = document.querySelector(".reset");
let player0 = false;


winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const disableGame = () => {
    for(let btn of btns){
        btn.disabled = true ;
    }
}

const showWinner = (winner) => {
    msg.innerText = `The Winner Is Player ${winner}`
    msgContainer.classList.remove("hide");
    disableGame();
}


btns.forEach(btn => {
    btn.onclick = () => {
        if(btn.innerText === ""){
            if(player0 === false){
            btn.innerHTML = "0"
            player0 = true;
        }else{
            btn.innerText = "X"
            player0 = false
        }
        checkWinner();
        }
    }
} )

const checkWinner = () => {
    for (let pattern of winningPatterns){
        let pattern1val = btns[pattern[0]].innerText;
        let pattern2val = btns[pattern[1]].innerText;
        let pattern3val = btns[pattern[2]].innerText;

        if(pattern1val != "" && pattern2val != "" && pattern3val != ""){
            if(pattern1val === pattern2val && pattern2val === pattern3val){
                console.log("winner", pattern1val)
                showWinner(pattern1val);
            }
        }
    }
}

