let blockEl = document.querySelector("#block");
let verticalPosotion = document.querySelector("#position-y");
let horizontalPosotion = document.querySelector("#position-x");
let blockSize = document.querySelector("#size");
let shapeSelector = document.querySelector("#shape-select");
let okBtn = document.querySelector("#ok-btn");

//vertical posotion changer
verticalPosotion.addEventListener("change", function () {
  blockEl.style.top = verticalPosotion.value + "px";
});

//horizontal posotion changer
horizontalPosotion.addEventListener("change", function () {
  blockEl.style.left = horizontalPosotion.value + "px";
});

//size changer
blockSize.addEventListener("change", function () {
  blockEl.style.transform = "scale(" + blockSize.value + ")";
});

//shape changer
okBtn.addEventListener("click", function () {
  let shapeOption = shapeSelector.value;
  if (shapeOption === "1") {
    blockEl.style.borderRadius = "0";
  } else if (shapeOption === "2") {
    blockEl.style.borderRadius = "50%";
  }
});
