const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//fill listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

//Drag functions
function dragStart(){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    this.className = 'fill';
}