const Form = document.querySelector('.add');
const ul = document.querySelector('.todos');

Form.addEventListener('submit', e => {
    e.preventDefault();  

    const textValue = Form.add.value.trim();
    Form.add.value = '';
    const li = document.createElement('li');
    li.innerHTML += `<span>${textValue}</span>
                    <i class="far fa-trash-alt delete"></i>`;
    li.setAttribute('class','list-group-item d-flex justify-content-between align-items-center');
    
    ul.append(li);
});

const icons = document.querySelectorAll('i');

icons.forEach( (icon) => {
    icon.addEventListener('click', e => {
        if(icon.parentElement.tagName === 'LI'){
            icon.parentElement.remove();
        }
    });
})