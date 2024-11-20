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


// Select all the .grid_item elements within .panigation
const targetDivs = document.querySelectorAll('.panigation .grid_item');

// Callback function for when elements intersect
const onIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Div is visible!');
      // Perform your action here
      entry.target.classList.add('slideup');
    } else {
      console.log('Div is out of view');
      // Reset the action if needed
      entry.target.classList.remove('slideup');
    }
  });
};

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(onIntersect, {
  threshold: 0.5, // Trigger when 50% of the element is visible
});

// Observe each target element
targetDivs.forEach(targetDiv => observer.observe(targetDiv));
