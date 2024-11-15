let input_field = document.querySelector(".filter_input input");
let items = document.querySelectorAll(".list_item");
let slide_control = document.querySelector("nav > i");
let link_box = document.querySelector(".links");

input_field.addEventListener('input', () => {

    let val = input_field.value ? input_field.value.toLowerCase() : " ";

    items.forEach(item => {
        let compare_text = item.querySelector(".list_title b").textContent ? item.querySelector(".list_title b").textContent.toLowerCase() : ' ';

        if(!val || compare_text.includes(val)){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    });
});

slide_control.addEventListener('click', () => {
    link_box.classList.toggle('slide');
});