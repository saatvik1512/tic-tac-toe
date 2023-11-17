function generateBoard(){
    let board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
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
    console.log('Welcome to our new round')
    const newBoard = generateBoard();
    const player1 = generatePlayer('player1', 'X');
    const player2 = generatePlayer('player2', 'O');

    //take active player as player 1 for now
    let activePlayer = player1;

    //now we want to invoke a function continuosly until game is won by a player and round
        //function will take parameters of newboard and active player
            //starts nested loop and places X on [0][0]
                //then checks
                    //if currentplayer is 1
                        //switch to player 2
                    //else => continue filling the loop
    //continuosly player will switch and will mark on board


};
