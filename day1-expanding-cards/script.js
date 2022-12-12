// const panelContainer = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

// function onPanelClick(event) {
//   const target = event.target;
//   if (!target.className.includes("panel")) return;
//   console.log(target);
//   if (target.matches(".active")) {
//     return;
//   } else {
//     panels.forEach((panel) => {
//       if (panel.matches(".active")) {
//         panel.classList.toggle("active");
//         return;
//       }
//     });
//     target.classList.add("active");
//   }
// }
// panelContainer.addEventListener("click", onPanelClick);
//

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
