//1. a new board is generated
    //1.1 Create a function which generates a new board everytime restart button is created
/*
[
    [0,0,0]
    [0,0,0]
    [0,0,0]
]

2. Both players score is zero currently
3. Current player is player1
4. Player1 draws 'x' at [1][1]

[
    [0,0,0]
    [0,X,0]
    [0,0,0]
]

5. Now, current players is player2
6. Player2 draws 'o' at [0][1]

[
    [0,O,0]
    [0,X,0]
    [0,0,0]
]

7. Current player switches back to player1
8. Repeat from step 2 until any players win and once wins update that player score;
*/

function generateBoard(){
    return board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];


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

function gameController(){
    const newBoard = generateBoard();
    const player1 = generateBoard('player1', 'X');
    const player2 = generateBoard('player2', 'O');

    let CurrentActivePlayer = player1;
}