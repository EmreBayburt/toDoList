/**
 * To Do List'i genel olarak let uzerinden yaptim. Sabit degerler olduklari icin
 * let yerine const da kullanilabilirdi diye tahmin ediyorum const ile henuz denemesi
 * yapmadim.
 */
let addToDoButton = document.getElementById('addToDo');
let todoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

    /**
     * addEventListener tek click ile To Do List ekleme
     */
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    /**
     * append child methodu tam olarak istedigim isi yapiyor form icine yazilan bir texti alt satira aliyor
     * isime yaradigi icin baska bir method arasyisinda bulunmadim
     */
    todoContainer.appendChild(paragraph);
    inputField.value = "";
    /**
     * addEventListener tek click ile yazilan texti ustunu ciziyor
     */
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    /**
     * addEventListener ile db click kullanarak yazilan texti silebiliyoruz
     */
    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph)
    })
})