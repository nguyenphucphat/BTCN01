
const newsOpenWraps = document.querySelectorAll('.newsOpenWrap');
const icon1 = document.querySelectorAll('.icon1');
const icon2 = document.querySelectorAll('.icon2');
const newsContent = document.querySelectorAll('.newsContent');
const newsNames = document.querySelectorAll('.newsName');
const newHeaders = document.querySelectorAll('.newsHeader');
const upDownIcons = document.querySelectorAll('.newsUpDown svg');
const listNews = document.querySelectorAll('.news');

newsOpenWraps.forEach((newsOpenWrap,i) => {
    newsOpenWrap.addEventListener('click', function() {

        if(icon1[i].classList.contains('active')) {
            newHeaders[i].classList.add('backgroundGrey');
            newsNames[i].classList.add('colorGrey');
            upDownIcons[i].classList.add('fillGrey');
            icon1[i].classList.remove('active');
            icon2[i].classList.add('active');
            newsContent[i].setAttribute('style', 'display: none;');
        } else {
            newHeaders[i].classList.remove('backgroundGrey');
            newsNames[i].classList.remove('colorGrey');
            upDownIcons[i].classList.remove('fillGrey');
            icon1[i].classList.add('active');
            icon2[i].classList.remove('active');
            newsContent[i].setAttribute('style', 'display: block;');
        }
    });
    
});

let draggedElement = null;
let draggedElementIndex = null;
let dropElementIndex = null;

const newsWraper = document.querySelector('.newsWraper');



listNews.forEach((news)=>{
    news.draggable = true;
    news.addEventListener('dragstart', dragStart);
    news.addEventListener('dragover', dragOver);
    news.addEventListener('dragend', dragEnd);
    news.addEventListener('drop', drop);
})

function dragStart(e) {
    draggedElement = e.target;
    draggedElement.style.opacity = 0.5;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnd(e) {
    draggedElement.style.opacity = 1;
}

function drop(e){
    var element = e.target;
    
    while(element.classList.contains('news')===false){
        element = element.parentElement;
    }
 
    if(draggedElement!==null && draggedElement!==element){
        const items = Array.from(element.parentElement.children);
        dropElementIndex = items.indexOf(element);
        draggedElementIndex = items.indexOf(draggedElement);
        if(draggedElementIndex>dropElementIndex){
            element.parentElement.insertBefore(draggedElement, element);
        }
        else{
            element.parentElement.insertBefore(draggedElement, element.nextElementSibling);
        }
    }
}
