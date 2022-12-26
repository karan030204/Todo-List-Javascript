const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');    
const search = document.querySelector('.inputTag');
const searchForm = document.querySelector('.search');

searchForm.addEventListener('submit', e=>{
    e.preventDefault();
})

//when we have to add the complex html template then use the template string
const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  ul.innerHTML+= html;
};




addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();

    }

});

///Event Delegation appply kairu che to enhance the performance 
// //Because javascript ko har list ke icon me eventListener add 
// karna padta agar eventdelegation model use na kare toh par agar 
// eventdelgation model use kar rahe hai which is event bubbling concept 
// inside it when eventlistener is added to any child elemnent of the tag 
// then after firing the call back function of the child then it goes 
// to parent and searching for the eventlistener if eventlistener 
// is added to that parent element then it will also fire that callback function of that parent element
ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


 
const filterTodos = (term) => {

    // console.log(ul.children);
    Array.from(ul.children)
     .filter( (todo) =>  !todo.textContent.toLowerCase().includes(term))
     .forEach( (todo) =>todo.classList.add('filtered'));


     Array.from(ul.children)
     .filter( (todo) => {
        return todo.textContent.toLowerCase().includes(term);
     }).forEach( (todo) => {
        todo.classList.remove('filtered');
     })
} ;


//Keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    // console.log(term);
    filterTodos(term);

});


