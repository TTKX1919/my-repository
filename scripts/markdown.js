window.onload = function autoviewtext() {
  var textArea = document.getElementById("text1");
  textArea.value = "示例：*斜体* **加粗**";
  textArea.addEventListener("input", (event) => {
    var output = document.getElementById("viewarea");
    output.innerHTML = marked.parse(event.target.value);
  });
  textArea.selectionEnd = textArea.value.length;
  textArea.focus();
};
function ctext() {
  document.getElementById("text1").value = "";
  document.getElementById("text1").selectionEnd = 0;
  document.getElementById("text1").focus();
}
function rpage() {
  location.reload();
}
