var add_book = document.getElementById('add_book');
var box_overlay = document.getElementById('box_overlay');
var add = document.getElementById('add');
var cancel = document.getElementById('cancel');
var container = document.querySelector('.container');
var book_name = document.getElementById('book_name');
var author_name = document.getElementById('author_name');
var description = document.getElementById('description');

add_book.addEventListener("click",function() {
    box_overlay.style.display='block';
}) 

add.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement('div');
    div.setAttribute('class','book-wrapper');
    div.innerHTML=`<h2>${book_name.value}</h2><h4>${author_name.value}</h4><p>${description.value}</p><button onclick="deletebox(event)">Delete</button>`
    container.append(div);
    book_name.value="";
    author_name.value="";
    description.value="";
    box_overlay.style.display='none';

})
cancel.addEventListener('click', function(event) {
    event.preventDefault();
    box_overlay.style.display='none';
})
function deletebox(event) {
    event.target.parentElement.remove();
}
