const container = document.querySelector(".container");

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
let i = 0;

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});


//array.from in order to transform the nodelist with the querySelectorAll to an array so that we can itreate throw it with the method forEach
Array.from(document.querySelectorAll(".nav-link")).forEach((link) => {
  link.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(
  document.querySelectorAll(".navigation-btn").forEach((btn) => {
    btn.onclick = () => {
      btn.parentElement.parentElement.classList.toggle("change");
    };
  })
);

