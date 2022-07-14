const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const boardELem = document.querySelector("#board");
const cellElements = document.querySelectorAll("[data-cell]");
const endScreen = document.querySelector("#endscreen");
const endScreenCredits = document.querySelector("[data-winning-text-message]");
const restartButton = document.querySelector('#restartButton');

let circleTurn = false;
startGame()

function startGame(){

    setHover();

    cellElements.forEach(cell => {
        cell.classList.remove(O_CLASS);
        cell.classList.remove(X_CLASS);
        cell.addEventListener("click", onClick, {once: true});
    });

}



function onClick(e){
    const cell = e.target;
    let currentClass = circleTurn ? O_CLASS : X_CLASS;
    if(circleTurn){
        cell.classList.add(O_CLASS);
    } else{
        cell.classList.add(X_CLASS);
    }
    if(checkWin(currentClass)){
        endGame(false);
    }
    else if (isDraw()){
        endGame(true);
    }
    else{
    
        switchTurn();
    
        setHover();
    }

}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every( index => {
            return cellElements[index].classList.contains(currentClass);
            
        })
    })
}
function endGame(draw){

    if(draw){
        endScreenCredits.innerText = 'Draw!'
    }
    else{
        endScreenCredits.innerText = `${circleTurn ? "Os" : "Xs"} Wins!`
    }
     endScreen.classList.add('show');
     restartButton.addEventListener("click", () => { 
        boardELem.classList.remove(X_CLASS);
        boardELem.classList.remove(O_CLASS);
        endScreen.classList.remove('show');
        startGame();
     })
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
    })
}



function setHover()
{
    boardELem.classList.remove(O_CLASS);
    boardELem.classList.remove(X_CLASS);

    if(circleTurn){
        boardELem.classList.add(O_CLASS);
    }
    else{
        boardELem.classList.add(X_CLASS);
    }
}
function switchTurn(){
    circleTurn = !circleTurn;
}






































// const O = "o";
// const X = "x";
// const WINNING_COMBINATIONS = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]

// const board = document.getElementById('board');
// const cellElements = document.querySelectorAll('[data-cell]');
// const endScreen = document.querySelector('#endscreen');
// const endScreenCredits = document.querySelector('[data-winning-text-message]')
// const restartButton = document.querySelector('#restartButton');

// let circleTurn;
// let currentClass;



// startGame();

// function startGame(){
//     circleTurn = false;
//     cellElements.forEach(cell => {
//         cell.addEventListener('click', handleClick, {once : true})
//     });
//     setBoardHoverClass();
    
// }

// function handleClick(e) {
// //place marker
// //check for win
// //check for draw
// //switch turns
//     const cell = e.target;
//     currentClass = circleTurn ? O : X;
//     placeMark(cell, currentClass);

//     if(checkWin(currentClass)){
//         endGame(false);
//     }
//     else if (isDraw()){
//         endGame(true);
//     }
//     else{   
//     switchTurn()
//     setBoardHoverClass()

//     }
// }

// function checkWin(currentClass){
//     return WINNING_COMBINATIONS.some( combination => {
//         return combination.every(index => {
//             return cellElements[index].classList.contains(currentClass);
//         })
//     })
// }

// function isDraw(){
//     return [...cellElements].every( cell => {
//         return cell.classList.contains(X) || cell.classList.contains(O);
//     })
// }

// function endGame(draw){

//     if(draw){
//     endScreenCredits.innerText = `Draw!`;

//     } else{
//     endScreenCredits.innerText = `${circleTurn ? "O's" : "X's"} wins!`;
//     }
//     endScreen.classList.add('show');
// }

// function placeMark(cell, currentClass){
//     cell.classList.add(currentClass);
// }

// function switchTurn(){
//     if(circleTurn){
//         circleTurn = false;
//     }
//     else{
//         circleTurn = true;
//     }
// }

// function setBoardHoverClass(){
//     board.classList.remove(X)
//     board.classList.remove(O)
//     if(circleTurn){
//         board.classList.add(O);
//         }
//         else{
//             board.classList.add(X);
//         }
//   }

//   restartButton.addEventListener('click', () => {
//       board.classList.remove(X);
//       board.classList.remove(O);
//       endScreen.classList.remove('show')
//       cellElements.forEach(cell => {
//         cell.classList.remove(X)
//         cell.classList.remove(O)
//       })
//       startGame();
//   }
//   )