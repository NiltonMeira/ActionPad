let themeSwitch = document.getElementById('theme-checkbox');
let addCellBtn = document.getElementById('addCellBtn');
let modal = document.getElementById('myModal');
let textOption = document.getElementById('textOption');
let drawOption = document.getElementById('drawOption');
let gridContent = document.querySelector('.grid_content');
let toolsList = document.querySelector('.tools_list');


const getElements = () => {
    themeSwitch = document.getElementById('theme-checkbox');
    addCellBtn = document.getElementById('addCellBtn');
    modal = document.getElementById('myModal');
    textOption = document.getElementById('textOption');
    drawOption = document.getElementById('drawOption');
    gridContent = document.querySelector('.grid_content');
    toolsList = document.querySelector('.tools_list');
}

let editor_count = 0;

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
        
        initializeDrawing(canvasTool);

        modal.style.display = 'none';

        

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
function toggleTheme() {
    const checkbox = document.getElementById('theme-checkbox');
    const body = document.body;
    
    if (checkbox.checked) {
     
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Verifica a preferência de tema armazenada no localStorage ao carregar a página
  function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('theme-checkbox').checked = true;
    }
  }
  
  // Aplica a preferência de tema armazenada ao carregar a página
  window.onload = applyStoredTheme;


const createListeners = () => {
     
    addCellBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    textOption.addEventListener('click', () => {
        createNewElement('Text');
    });
    
    drawOption.addEventListener('click', () => {
        createNewElement('Drawing');
    });
    
    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    document.getElementById("saveButton").addEventListener("click", () => {
        const html = document.getElementsByTagName("body")[0].innerHTML
    
        const body = new URLSearchParams()
        body.append("html", html)
        fetch("/saveHTML", {
            method: "post",
            body: body
        }).then(res => {
            console.log(res)
        })
    });
}


try {
    editors();  
} catch (e) {
    console.log(e);
}