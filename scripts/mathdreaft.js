function vtext() {
  var textArea = document.getElementById("text1");
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  textArea.selectionEnd = textArea.value.length;
  textArea.focus();
}
function madd() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#43;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mreduce() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#45;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mride() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#42;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mdivide() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#47;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mequal() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#61;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
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
function mlparenthesis() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#40;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mrparenthesis() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#41;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mlbracket() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#91;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mrbracket() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#93;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mlbrace() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#123;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mrbrace() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#125;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mlabracket() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#60;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function mrabracket() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "&#62;";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length;
  textArea.focus();
}
function msqrt() {
  var textArea = document.getElementById("text1");
  textArea.value = textArea.value + "<math><msqrt></msqrt></math>";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = event.target.value;
  });
  const length = textArea.value.length;
  textArea.selectionEnd = length - 15;
  textArea.focus();
}
function mroot() {
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
