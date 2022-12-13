const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
// let percentage = 0;
let currentActive = 1;

// next.addeventlistener("click", (event) => {
//   const target = event.target;

//   if (target.tagname !== "button") return;

//   percentage += 33;
//   progress.style.width = `${percentage}%`;

//   if (percentage === 99) {
//     next.setattribute("disabled", "");
//     return;
//   }
// });
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }

    const actives = document.querySelectorAll(".active");
    let widthValue = ((actives.length - 1) / (circles.length - 1)) * 100;

    progress.style.width = `${widthValue}%`;

    // if (currentActive === 1) {
    //   prev.disabled = true;
    // } else if (currentActive === circles.length) {
    //   next.disabled = true;
    // } else {
    //   prev.disabled = false;
    //   next.disabled = false;
    // }

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
  });
}

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
