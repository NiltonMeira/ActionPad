const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const pencilSize = document.getElementById('pencilSize');
const eraserBtn = document.getElementById('eraserBtn');
const eraserSize = document.getElementById('eraserSize');
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
    canvas.width = gridCell.clientWidth;
    canvas.height = gridCell.clientHeight - 100;
}

fitCanvasToGridCell();

function draw(e) {
    if (!isDrawing) return;

    ctx.strokeStyle = isErasing ? eraserColor : strokeColor;
    ctx.lineWidth = isErasing ? eraserLineWidth : pencilLineWidth;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;

    saveDrawing();
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

colorPicker.addEventListener('change', () => {
    strokeColor = colorPicker.value;
});

pencilSize.addEventListener('input', () => {
    pencilLineWidth = pencilSize.value;
});

eraserBtn.addEventListener('click', () => {
    isErasing = !isErasing;
    eraserBtn.textContent = isErasing ? 'Eraser' : 'Drawing';
});

eraserSize.addEventListener('input', () => {
    eraserLineWidth = eraserSize.value;
});

function saveDrawing() {
const dataURL = canvas.toDataURL();
localStorage.setItem('drawing', dataURL); 
}

window.addEventListener('load', () => {
const savedDrawing = localStorage.getItem('drawing');
if (savedDrawing) {
    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    };
    img.src = savedDrawing;
}
});

window.addEventListener('resize', fitCanvasToGridCell);