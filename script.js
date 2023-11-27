function generateBoard(){
    let board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    return board;
}


function generatePlayer(name, token){
    let score = 1;
    const incScore = () => {
        return score++;
    };

    return {
        name, token, incScore
    }
}

function PlayRound(){
    let newBoard = generateBoard();
    const player1 = generatePlayer('player1', 'X');
    const player2 = generatePlayer('player2', 'O');

    //take active player as player 1 for now
    let activePlayer = player1;

    const switchPlayer = () => {
        activePlayer == player1 ? activePlayer = player2 : activePlayer = player1;
        return activePlayer;
    }

    const checkforWin = (newBoard) => {
        for (let i = 0; i < 3; i++){
            if (!newBoard[i].includes('') || newBoard[i][i] != ''){
                if(newBoard[i].every((element) => newBoard[i][0] === element) || (newBoard[0][i] == newBoard[1][i] && newBoard[0][i] == newBoard[2][i])){
                    return true;
                }
            }
        }
    }
        return{
        newBoard, player1, player2, activePlayer, switchPlayer, checkforWin
    }
};

function windows_reload(){
    window.location.reload()
}

(function domController(){
    const allnodes = document.querySelectorAll("div.main-container > div")
    const restart_button = document.querySelector('.restart');
    const newGame = PlayRound();
    let index = 0;
    for(let i = 0; i < 3; i++){
        for (let j = 0; j < 3 && index < 9; j++, index++){
            allnodes[index].dataset.row = i;
            allnodes[index].dataset.col = j;
        }
    }
    let clickTimes = 0;

    allnodes.forEach((e) => {
        e.addEventListener('click', () => {
            if (e.innerHTML == ''){
                newGame.newBoard[e.dataset.row][e.dataset.col] = newGame.activePlayer.token
                e.innerHTML = newGame.activePlayer.token;
                clickTimes++
                if(clickTimes >= 5){
                    if (newGame.checkforWin(newGame.newBoard) == true){
                        console.log(`${newGame.activePlayer.name} wins with token ${newGame.activePlayer.token} and has a score of ${newGame.activePlayer.incScore()}`)
                    }
                }
                newGame.activePlayer = newGame.switchPlayer();
            }
        })
    })
    restart_button.addEventListener('click', ()=> {
        windows_reload();
    })
})()