
// DARKMODE
const darkEl = document.querySelector('body');
const buttonEl = document.querySelector('button.switch');

function darkMode() {
    if (buttonEl.innerHTML == 'Make lightmode') {
        buttonEl.innerHTML = 'Make darkmode';
    } else {
        buttonEl.innerHTML = 'Make lightmode';
    }

    darkEl.classList.toggle('darkmode')
  
    
}

buttonEl.addEventListener('click', darkMode)

// DRAG AND DROP TRASH HEHE
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')

    })
})


dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', e => {
        
        e.preventDefault();
        const draggableItem = document.querySelector('.dragging');
          dropZone.appendChild(draggableItem).remove();
          
    })
})

//const formItem = document.querySelector('.dragging');
// DELETE ELEMENT INSIDE DIV
