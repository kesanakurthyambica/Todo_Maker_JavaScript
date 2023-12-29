// var button = document.getElementById('para1');

// button.addEventListener('click',function() {
//     document.body.style.backgroundColor='tomato';
// });

// var button = document.getElementById('para2');

// button.addEventListener('dblclick',function() {
//     document.body.style.backgroundColor='blue';
// });

// var button = document.getElementById('para3');

// button.addEventListener('mouseenter',function() {
//     document.body.style.backgroundColor='red';
// });

// var button = document.getElementById('para4');

// button.addEventListener('mouseout',function() {
//     document.body.style.backgroundColor='yellow';
// });

// var first=document.querySelector('.todos');
// first.textContent="wake up";

// var todo=document.createElement('li');
// todo.textContent="go to";

// var list=document.querySelector('ul');
// list.appendChild(todo);


// ----------------------------------------------------

var form=document.querySelector('form');
var todolist=document.querySelector('ul');
var button=document.querySelector('button');
var input=document.getElementById('user-todo');

//var todoArray=[];
var todoArray=localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
localStorage.setItem('todos',JSON.stringify(todoArray));
var storage =JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    todoArray.push(input.value);
    localStorage.setItem('todos',JSON.stringify(todoArray));
    todoMaker(input.value);
    input.value='';
});

var todoMaker=function(text)
{
    var todo=document.createElement('li');
    todo.textContent=text;
    todolist.appendChild(todo);
}

button.addEventListener('click',function()
{
   // localStorage.clear();
    while(todolist.firstChild)
    {
        todolist.removeChild(todolist.firstChild);
    }
});