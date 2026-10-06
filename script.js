(function () {
  var ex1_btn = document.getElementById("ex1_button");
  
  ex1_btn.onclick = function() {
    var content = document.getElementById("ex1_content");
    content.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      content.innerHTML += i != 9 ? `${i}, ` : i;
    }
  }
  
})();