function gameBoard(){
    let row = 3;
    let column = 3;
    let board = [];

    for (let i = 0; i < row; i++){
        board[i] = [];
        for (let j = 0; j < column; j++){
            board[i].push(0);
        }
    }

    return board;
}