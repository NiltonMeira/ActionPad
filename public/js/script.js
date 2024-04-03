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

    if (type === 'Drawing') {
        
        const canvasDiv = document.createElement('div');
        canvasDiv.id = 'canvas_cell';
        newCell.appendChild(canvasDiv);

    } else if (type === 'Text') {

        const textDiv = document.createElement('div');
        textDiv.id = "editor" + editor_count;
        newCell.appendChild(textDiv);

        ClassicEditor
            .create(textDiv)
            .catch(error => {
            console.error(error);
        });
    }

    gridContent.appendChild(newCell);

    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'button');
    newInput.classList.add('tool_option');
    newInput.value = type + ' Tool';
    toolsList.insertBefore(newInput, toolsList.firstChild);

    modal.style.display = 'none';
}

// Close the modal when the user clicks on the close button
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    modal.style.display = 'none';
});

editors();
