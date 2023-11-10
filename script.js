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

    /*
    you have to make a function which takes a argument (either 1 or 2) and then prints a updated array
    
    */
   const filler = () => {
    board = board.filter((elements) => {
        return elements.filter((item) => {
            if(item == 0){
                item = 'x';
            }
        })
    })
    return board
   }

   return {
    board, filler
   }
}

console.log(gameBoard())