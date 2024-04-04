function initializeDrawing(canvas) {
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let strokeColor = '#6C3287'; 
    let isErasing = false;
    let eraserColor = '#f6f7fa'; 
    let eraserLineWidth = 10; 
    let pencilLineWidth = 1;

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight - 100;

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

    const colorPicker = canvas.parentElement.querySelector('.colorPicker');
    colorPicker.addEventListener('change', () => {
        strokeColor = colorPicker.value;
    });

    const pencilSize = canvas.parentElement.querySelector('.pencilSize');
    pencilSize.addEventListener('input', () => {
        pencilLineWidth = pencilSize.value;
    });

    const eraserBtn = canvas.parentElement.querySelector('.eraserBtn');
    eraserBtn.addEventListener('click', () => {
        isErasing = !isErasing;
        eraserBtn.textContent = isErasing ? 'Eraser' : 'Drawing';
    });

    const eraserSize = canvas.parentElement.querySelector('.eraserSize');
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
}
