//const darkEl = document.querySelector('body');
// const buttonEl = document.querySelector('button.switch');
// const draggables = document.querySelectorAll('.border');
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');


// function darkMode() {
//     darkEl.classList.toggle('darkmode')
// }

draggables.forEach(draggable => {
   //console.log(draggable);
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')

    })

})

console.log(dropZones)


dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        const draggableItem = document.querySelector('.dragging');
        dropZone.appendChild(draggableItem)
    })
    //   draggables.remove();
})

// buttonEl.addEventListener('click', darkMode)