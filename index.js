var TopLeft = document.getElementById("top-left");
var TopRight = document.getElementById("top-right");
var BottomLeft = document.getElementById("bottom-left");
var BottomRight = document.getElementById("bottom-right");

var btn = document.getElementById("btn");

var base = document.getElementById("base");

function borderRadious() {
  if (TopLeft.value > 0) {
    base.style.borderTopLeftRadius = `${TopLeft.value}px`;
  }
  if (TopRight.value > 0) {
    base.style.borderTopRightRadius = `${TopRight.value}px`;
  }
  if (BottomLeft.value > 0) {
    base.style.borderBottomLeftRadius = `${BottomLeft.value}px`;
  }
  if (BottomRight.value > 0) {
    base.style.borderBottomRightRadius = `${BottomRight.value}px`;
  } else {
    alert('insira um valor maior que ZERO')
  }
}

btn.addEventListener("click", borderRadious);
