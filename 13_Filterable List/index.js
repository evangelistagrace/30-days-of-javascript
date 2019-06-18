const input = document.getElementById('filterableInput');

input.addEventListener('keyup', searchName);

function searchName(){
    const inputValue = input.value.toUpperCase();
    const ul = document.querySelector('.collection');
    const li = Array.from(ul.querySelectorAll('.collection-item'));


    li.forEach((li) => {
        const a = li.getElementsByTagName('a')[0];

        if(a.textContent.toUpperCase().indexOf(inputValue) > -1){
            li.style.display = '';
        }else{
            li.style.display = 'none';
        }
    })
}