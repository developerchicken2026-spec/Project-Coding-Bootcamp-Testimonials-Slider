const john = {
  name: "John Tarkpor",
  job: "Junior Front-end Developer",
  text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  image: "images/image-john.jpg",
};

const tanya = {
  name: "Tanya Sinclair",
  job: "UX Engineer",
  text: "I've been interred in coding for a while but never taken the jumb, until now. I'm couldn't recommend this course enough, I'm now in the job of my dreams and so excited about the future.",
  image: "./images/image-tanya.jpg",
};
function changeToJohn() {
  document.querySelector("#name").textContent = john.name;
  document.querySelector("#job").textContent = john.job;
  document.querySelector("#content").textContent = john.text;
  document.querySelector("#image").src = john.image;
}

function changeToTanya() {
  document.querySelector("#name").textContent = tanya.name;
  document.querySelector("#job").textContent = tanya.job;
  document.querySelector("#content").textContent = tanya.text;
  document.querySelector("#image").src = tanya.image;
}

const btnPrev = document.querySelector(".button-prev");
const btnNext = document.querySelector(".button-next");
console.log(btnNext, btnPrev);
let isValue = true;

btnPrev.addEventListener("click", () => {
  if (isValue) {
    changeToJohn();
    isValue = false;
  } else {
    changeToTanya();
    isValue = true;
  }
});

btnNext.addEventListener("click", () => {
  if (isValue) {
    changeToTanya();
    isValue = false;
  } else {
    changeToJohn();
    isValue = true;
  }
});
