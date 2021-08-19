let blockEl = document.querySelector("#block");
let verticalPosotion = document.querySelector("#position-y");
let horizontalPosotion = document.querySelector("#position-x");

//vertical posotion changer
verticalPosotion.addEventListener("change", function () {
  blockEl.style.top = verticalPosotion.value + "px";
});

//horizontal posotion changer
horizontalPosotion.addEventListener("change", function () {
  blockEl.style.left = horizontalPosotion.value + "px";
});
