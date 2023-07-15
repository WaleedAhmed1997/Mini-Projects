const testimonials = [
  {
    name: "George I",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    text: "Keep up the excellent work. I am really satisfied with my apple. It'sexactly what I've been looking for.",
  },
  {
    name: "Harrie V",
    photoUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    text: "I could probably go into sales for you. Thanks for the great service. Apple is both attractive and highly adaptable.",
  },
  {
    name: " Claus Q",
    photoUrl:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    text: "I will let my mum know about this, she could really make use of apple! I am really satisfied with my apple. It fits our needs perfectly. I love apple.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  nameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
