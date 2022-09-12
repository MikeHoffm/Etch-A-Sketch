let container = document.querySelector('.grid-container');
let resize = document.querySelector('.resize');


//Create grid of cells
//Use CSS flex-wrap to make them wrap once at a certain width
function drawGrid(cellNum) {
for (let i = 0; i < (cellNum * cellNum); i++) {
    let gridCell = document.createElement('div');
    gridCell.style.width = ((672 / cellNum) -2) + 'px';
    gridCell.classList.add('cells');
    container.appendChild(gridCell);
}
}

drawGrid(10);

//Remove all children from the original container element, clearing grid https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
// Then take user input to draw a new grid
function removeOld() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//Button will prompt user for number 1-100
//if input isnt within those parameters nothing will change
// else the grid is changed with new dimensions
resize.addEventListener('click', function (){
    let input = prompt("Enter new dimensions for the grid: 1-100");
    if (input < 1 || input > 100) {
        let pText = document.querySelector('.p-text');
        removeOld();
        drawGrid(10);
        return;
    } else {
      removeOld();
        drawGrid(input);  
    }
})

//DOM select all divs with the 'cells' class from above for loop
//querySelectorAll returns a list of the cells in an array
//iterate through the array, passing a function to change the color

let cells = document.querySelectorAll('.cells');
let black = document.querySelector('.black');
black.addEventListener('click', changeColor);



//Create function to change color
//Select the all cells in the dom, this selects them after new cells are made w/new grid
//iterate and add mouseover function to change the color
function changeColor(){
    let cells = document.querySelectorAll('.cells');
    for(let cell of cells) {
        cell.onmouseover = function(color) {
            cell.style.backgroundColor = 'black';
            cell.style.opacity = "1";
        }
    }
    }

//random color generator mirrors changecolor function
let randomButton = document.querySelector('.random');
randomButton.addEventListener("click", randomColor);
function randomColor() {
    let cells = document.querySelectorAll('.cells');
    for(let cell of cells) {
        cell.onmouseover = function(color) {
            const newColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = "#" + newColor;
            cell.style.opacity = "1";
        }
    }
}
//eraser functionality mirrors changecolor function
let eraser = document.querySelector('.eraser');
eraser.addEventListener("click", function(){
    let cells = document.querySelectorAll('.cells');
    for(let cell of cells) {
        cell.onmouseover = function() {
            cell.style.backgroundColor = 'white';
            cell.style.opacity = "1";
        }
    }
})

//clear entire board
function resetBoard() {
    let cells = document.querySelectorAll('.cells');
    for(let cell of cells) {
        cell.style.backgroundColor = 'white';
    }
}

let resetButton = document.querySelector('.reset')
resetButton.addEventListener('click',function(){
    let cells = document.querySelectorAll('.cells');
    for(let cell of cells) {
        cell.style.backgroundColor = 'white';
    }
})
