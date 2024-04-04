const themeSwitch = document.getElementById('theme-checkbox');
const addCellBtn = document.getElementById('addCellBtn');
const modal = document.getElementById('myModal');
const textOption = document.getElementById('textOption');
const drawOption = document.getElementById('drawOption');
const gridContent = document.querySelector('.grid_content');
const toolsList = document.querySelector('.tools_list');

let editor_count = 0;

themeSwitch.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.classList.add('dark-mode');
        window.isDarkMode = true;
        
    } else {
        document.documentElement.classList.remove('dark-mode');
        window.isDarkMode = false;
       
    }
});

addCellBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

textOption.addEventListener('click', () => {
    createNewElement('Text');
});

drawOption.addEventListener('click', () => {
    createNewElement('Drawing');
});

function createNewElement(type) {
    const newCell = document.createElement('div');
    newCell.classList.add('grid_cell');
    var name = document.getElementById("nameInput").value;

    if (!name && !name.value) {
        name = 'Tool';
    }

    if (type === 'Drawing') {
        
        const canvasDiv = document.createElement('div');
        canvasDiv.classList.add('canvas_cell');
        newCell.appendChild(canvasDiv);

        const canvasTool = document.createElement('canvas');
        canvasTool.classList.add('myCanvas');
        canvasTool.setAttribute('height', '260');
        canvasDiv.appendChild(canvasTool);

        const canvasSettings = document.createElement('div');
        canvasSettings.classList.add('canva_settings');
        canvasDiv.appendChild(canvasSettings);

        const eraserBtn = document.createElement('button');
        eraserBtn.classList.add('eraserBtn');
        eraserBtn.textContent = 'Drawing';
        canvasSettings.appendChild(eraserBtn);

        const eraserSizeInput = document.createElement('input');
        eraserSizeInput.type = 'range';
        eraserSizeInput.classList.add('eraserSize');
        eraserSizeInput.min = '1';
        eraserSizeInput.max = '50';
        eraserSizeInput.value = '10';
        canvasSettings.appendChild(eraserSizeInput);

        const labelEraser = document.createElement('label');
        labelEraser.textContent = 'Eraser Size';
        labelEraser.setAttribute('for', 'eraserSizeInput');
        canvasSettings.appendChild(labelEraser);

        const colorPickerInput = document.createElement('input');
        colorPickerInput.type = 'color';
        colorPickerInput.classList.add('colorPicker');
        colorPickerInput.value = '#6C3287';
        canvasSettings.appendChild(colorPickerInput);

        const pencilSizeInput = document.createElement('input');
        pencilSizeInput.type = 'range';
        pencilSizeInput.classList.add('pencilSize');
        pencilSizeInput.min = '1';
        pencilSizeInput.max = '20';
        pencilSizeInput.value = '1';
        canvasSettings.appendChild(pencilSizeInput);

        const labelPencil = document.createElement('label');
        labelPencil.textContent = 'Pencil Size';
        labelPencil.setAttribute('for', 'pencilSizeInput');
        canvasSettings.appendChild(labelPencil);

        gridContent.appendChild(newCell);


        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'button');
        newInput.classList.add('tool_option');
        newInput.value = name;
        toolsList.insertBefore(newInput, toolsList.firstChild);

        modal.style.display = 'none';

        initializeDrawing(canvasTool);

    } else if (type === 'Text') {

        const textDiv = document.createElement('div');
        textDiv.id = "editor" + editor_count;
        newCell.appendChild(textDiv);

        ClassicEditor
            .create(textDiv)
            .catch(error => {
            console.error(error);
        });

        gridContent.appendChild(newCell);

        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'button');    
        newInput.classList.add('tool_option');
        newInput.value = name;
        toolsList.insertBefore(newInput, toolsList.firstChild);

        modal.style.display = 'none';
    }
}

// Close the modal when the user clicks on the close button
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    modal.style.display = 'none';
});

editors();