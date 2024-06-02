let container = document.querySelector(".container")
let Play = document.querySelector('.Play')
let boxes = document.querySelectorAll(".box")
let turn = false
let result = ""

let winCheck = () => {
    let drawCheck = 0
    let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
    [8, 4, 0],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    ]

    for (let i = 0; i < winCondition.length; i++) {
        if (
            boxes[winCondition[i] [0]].innerHTML == 'X' &&
            boxes[winCondition[i] [1]].innerHTML == 'X' &&
            boxes[winCondition[i] [2]].innerHTML == 'X' 

        ) {
            result = 'X победили'
            information.innerHTML = result
            alert("X победили")
        } else if (
            boxes[winCondition[i] [0]].innerHTML == 'O' &&
            boxes[winCondition[i] [1]].innerHTML == 'O' &&
            boxes[winCondition[i] [2]].innerHTML == 'O' 
        ){
            result = 'O победили'
            information.innerHTML = result
            alert("O победили")
        }
    }

    for (let i = 0; i < 9; i++){
        if(boxes[i].innerHTML){
            drawCheck++
        }
    }
    
    if (drawCheck == 9 && result == "") {
    information.innerHTML = 'ничья'
    drawCheck = 0
}
}



container.addEventListener('click', (e) => {
    if (
        e.target.innerHTML == "" &&
        (result == ""  || result == "выбранная клетка занята")
    ){
        if(turn == false){
            e.target.innerHTML = 'X'
        }
        else if (turn == true){
            e.target.innerHTML = 'O'
        }

        turn = !turn
        winCheck()
    } else if (result) {

        information.innerHTML = 'игра окончена'

    }else {
        information.innerHTML = 'выбранная клетка занята'
    }


})
