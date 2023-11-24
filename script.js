function generateBoard(){
    let board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    return board;
}


function generatePlayer(name, token){
    let score = 0;
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


    return{
        newBoard, player1, player2, activePlayer
    }

    //now we want to invoke a function continuosly until game is won by a player and round
        //function will take parameters of newboard and active player
            //starts nested loop and places X on [0][0]
                //then checks
                    //if currentplayer is 1
                        //switch to player 2
                    //else => continue filling the loop
    //continuosly player will switch and will mark on board
    

};


function playGame(newBoard, activePlayer, player1, player2){
    let score = 0;
    for (let i = 0; i < newBoard.length; i++){
        for (let j = 0; j < newBoard.length; j++){
            newBoard[i][j] = activePlayer.token;
            score++;
            activePlayer == player1 ? activePlayer = player2 : activePlayer = player1;
        }
    }
    console.log(checkforWin(newBoard))
    return newBoard;
};

function checkforWin(newBoard){
    let sameTOken;
    //for each row
        // if row contains all same elements => return 'TRUE'
    for (let i = 0; i < 3; i++){
        sameTOken = newBoard[i][0]
        if(newBoard[i].every((element) => sameTOken === element)){
            return 'row elements are same'
        }
    }
    for (let j = 0; j < 3; j++){
        sameTOken = newBoard[0][j];
        if (newBoard[0][j] === newBoard[1][j] === newBoard[2][j]){
            return 'column elements are same';
        }
    }
}

(function domController(){

    const allnodes = document.querySelectorAll("div.main-container > div")
    const newGame = PlayRound();
    let index = 0;
    for(let i = 0; i < 3; i++){
        for (let j = 0; j < 3 && index < 9; j++, index++){
            allnodes[index].dataset.row = i;
            allnodes[index].dataset.col = j;
        }
    }

    allnodes.forEach((e) => {
        e.addEventListener('click', () => {
            newGame.newBoard[e.dataset.row][e.dataset.col] = newGame.activePlayer.token
            e.innerHTML = newGame.activePlayer.token;
        })
    })
})()