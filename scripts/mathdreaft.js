window.onload = function autoviewtext() {
  var textArea = document.getElementById("text1");
  textArea.value =
    "示例：<br />例题1：方程组<math><mrow><mo>{</mo><mtable><mtr><mtd><mn>x<sup>2</sup>+y=3 &#9312;</mn></mtd></mtr><mtr><mtd><mn>x<sup>2</sup>-y=1 &#9313;</mn></mtd></mtr></mtable></mrow></math>求x,y的值。";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  textArea.selectionEnd = textArea.value.length;
  textArea.focus();
};
function msup() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "<sup></sup>";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length - 6;
  textArea.focus();
}
function msub() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "<sub></sub>";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length - 6;
  textArea.focus();
}
function msqrt() {
  var textArea = document.getElementById("text1");
  textArea.value =
    textArea.value + "<math><mroot><mi></mi><mn></mn></mroot></math>";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length - 29;
  textArea.focus();
}
function mroot3() {
  var textArea = document.getElementById("text1");
  textArea.value =
    textArea.value + "<math><mroot><mi></mi><mn>3</mn></mroot></math>";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length - 30;
  textArea.focus();
}
function mareduce() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#177;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mcone() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#9312;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mctwo() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#9313;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mcthree() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#9314;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mcfour() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#9315;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mcfive() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#9316;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mcesign() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#128;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mpmille() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#137;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mbullet() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#149;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mtrademark() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#153;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mpound() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#163;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function myen() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#165;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mcopyright() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#169;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mrtrademark() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#174;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function minfinity() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8734;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mangle() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8736;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mbecause() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8757;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mtherefore() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8756;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function maequal() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8776;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mnequal() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8800;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mloequal() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8804;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mgoequal() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8805;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mperpendicular() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#8869;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mtlinetable() {
  var textArea = document.getElementById("text1");
  textArea.value =
    textArea.value +
    "<math><mrow><mo>{</mo><mtable><mtr><mtd><mn></mn></mtd></mtr><mtr><mtd><mn></mn></mtd></mtr></mtable></mrow></math>";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length - 71;
  textArea.focus();
}
function mthlinetable() {
  var textArea = document.getElementById("text1");
  textArea.value =
    textArea.value +
    "<math><mrow><mo>{</mo><mtable><mtr><mtd><mn></mn></mtd></mtr><mtr><mtd><mn></mn></mtd></mtr><mtr><mtd><mn></mn></mtd></mtr></mtable></mrow></math>";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length - 102;
  textArea.focus();
}
function mflinetable() {
  var textArea = document.getElementById("text1");
  textArea.value =
    textArea.value +
    "<math><mrow><mo>{</mo><mtable><mtr><mtd><mn></mn></mtd></mtr><mtr><mtd><mn></mn></mtd></mtr><mtr><mtd><mn></mn></mtd></mtr><mtr><mtd><mn></mn></mtd></mtr></mtable></mrow></math>";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length - 133;
  textArea.focus();
}
function nltext() {
  document.getElementById("text1").value =
    document.getElementById("text1").value + "<br />";
  document.getElementById("text1").selectionEnd =
    document.getElementById("text1").value.length;
  document.getElementById("text1").focus();
}
function ctext() {
  document.getElementById("text1").value = "";
  document.getElementById("text1").selectionEnd = 0;
  document.getElementById("text1").focus();
}
function rpage() {
  location.reload();
}
