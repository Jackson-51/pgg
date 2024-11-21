let input_field = document.querySelector(".filter_input input");
let items = document.querySelectorAll(".list_item");
let slide_control = document.querySelector("nav > i");
let link_box = document.querySelector(".links");
let number_one = document.querySelector(".number_one");
let input = document.querySelector("#title");
let textarea = document.querySelector("#subtitle");
let new_btn = document.querySelector(".new_btn");
let create_btn = document.querySelector(".create_btn");

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

new_btn.addEventListener('click', () => {
  number_one.scrollLeft = number_one.scrollWidth / 2;
});

create_btn.addEventListener('click', () => {

  let list = document.querySelector('.list');

  if(input.value.length > 0 && textarea.value.length > 0){
      let new_project = document.createElement('div');
      new_project.className = 'list_item';

      let new_project_content = `
          <div class="list_title">
              <b>${input.value}</b>
              <small>${textarea.value}</small>
          </div>
          <ul class="images">
              <li style="--position:0;"><img src="images/img-one.jpg" alt=""></li>
              <li style="--position:1;"><img src="images/img-two.jpg" alt=""></li>
              <li style="--position:2;"><img src="images/img-three.jpg" alt=""></li>
              <li style="--position:3;"><img src="images/img-four.jpg" alt=""></li>
              <li style="--position:4;"><img src="images/img-five.jpg" alt=""></li>
              <li style="--position:5;"><img src="images/img-six.jpg" alt=""></li>
          </ul>
      `;

      new_project.innerHTML = new_project_content;

    list.appendChild(new_project);

    number_one.scrollLeft = 0;
  }

  input.value = '';
  textarea.value = '';
  
});