const canvas = Array.from( document.getElementsByClassName('myCanvas'))

// const ctx = canvas.forEach( x=> {
//     x.getContext('2d');
// });

const ctx = canvas.map(x=>x.getContext('2d'))

const colorPicker = Array.from(document.getElementsByClassName('colorPicker'));
const pencilSize = Array.from(document.getElementsByClassName('pencilSize'));
const eraserBtn = Array.from(document.getElementsByClassName('eraserBtn'));
const eraserSize = Array.from(document.getElementsByClassName('eraserSize'));
const gridCell = document.querySelector('.grid_cell');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let strokeColor = '#6C3287'; 
let isErasing = false;
let eraserColor = '#f6f7fa'; 
let eraserLineWidth = 10; 
let pencilLineWidth = 1;

function fitCanvasToGridCell() {

    canvas.forEach(x => {
        x.width = gridCell.clientWidth;
        x.height = gridCell.clientHeight - 100;
    });
}

fitCanvasToGridCell();

function draw(e) {
    if (!isDrawing) return;

    ctx[0].strokeStyle = isErasing ? eraserColor : strokeColor;
    ctx[0].lineWidth = isErasing ? eraserLineWidth : pencilLineWidth;
    ctx[0].beginPath();
    ctx[0].moveTo(lastX, lastY);
    ctx[0].lineTo(e.offsetX, e.offsetY);
    ctx[0].stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;

    saveDrawing();
}

canvas.forEach( x => {
    x.addEventListener('mousedown', (e) => {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    });
});


canvas.forEach( x=> {
    x.addEventListener('mousemove', draw); 
});

canvas.forEach( x=> {
    x.addEventListener('mousemove', draw);
});

canvas.forEach( x=> {
    x.addEventListener('mouseup', () => isDrawing = false);
});

canvas.forEach( x=> {
    x.addEventListener('mouseout', () => isDrawing = false);
});

colorPicker.forEach(x => {
    x.addEventListener('change', () => {
        strokeColor = x.value;
    });
});

pencilSize.forEach(x => {
    x.addEventListener('input', () => {
        pencilLineWidth = pencilSize.value;
    });
});

eraserBtn.forEach(x => {
    x.addEventListener('click', () => {
        isErasing = !isErasing;
        x.textContent = isErasing ? 'Eraser' : 'Drawing';
    });
});

eraserSize.forEach(x => {
    x.addEventListener('input', () => {
        eraserLineWidth = x.value;
    });
});

function saveDrawing() {
const dataURL = canvas.forEach(x => {
    x.toDataURL();
});
localStorage.setItem('drawing', dataURL); 
}

window.addEventListener('load', () => {
const savedDrawing = localStorage.getItem('drawing');
if (savedDrawing) {
    const img = new Image();
    img.onload = function() {
        ctx[0].drawImage(img, 0, 0);
    };
    img.src = savedDrawing;
}
});

window.addEventListener('resize', fitCanvasToGridCell);