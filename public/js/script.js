const text = require("../../src/controllers/text");

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

        const formDiv = document.createElement('form');
        formDiv.method = "post";
        formDiv.action = "/text";
        newCell.appendChild(formDiv);

        const textDiv = document.createElement('div');
        textDiv.id = "editor" + editor_count;
        textDiv.name = "content";
        formDiv.appendChild(textDiv);

        const button = document.createElement("button");
        button.classList.add("bookmarkBtn");
        button.type = "submit";
        formDiv.appendChild(button)

        const span = document.createElement("span");
        span.classList.add("IconContainer");
        button.appendChild(span);

        const svg = document.createElement("svg");
        svg.setAttribute("viewBox", "0 0 384 512");
        svg.setAttribute("height", "0.9em");
        svg.classList.add("icon")
        span.appendChild(svg)

        const path = document.createElement("path")
        path.setAttribute("d", "M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z")
        svg.appendChild(path);

        const p =  document.createElement("p");
        p.classList.add("text");
        p.textContent = 'Save'

        button.appendChild(p);
        



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



