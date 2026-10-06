(function () {
  var ex1_btn = document.getElementById("ex1_button");
  var ex2_text = document.getElementById("ex2_text");
  ex1_btn.onclick = function() {
    var content = document.getElementById("ex1_content");
    content.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      content.innerHTML += i != 9 ? `${i}, ` : i;
    }
  }
  ex2_text.oninput = function() {
    var txt = document.forms["ex2_form"]["ex2_text"].value;
    var content = document.getElementById("ex2_content");
    if (txt.length != 9) {
      content.innerHTML = "Długość numeru musi być równa 9";
      content.classList = ["ex_wrong"]
    } else if (txt.match(/[a-zA-Z]/i)) {
      content.innerHTML = "Numer nie może zawierać liter"; 
      content.classList = ["ex_wrong"]
    } else if (txt.match(/[^0-9]/i)) {
      content.innerHTML = "Numer nie może zawierać znaków specjalnych";
      content.classList = ["ex_wrong"]
    } else {
      content.innerHTML = "Numer telefonu jest poprawny";
      content.classList = ["ex_right"]
    }
  }
})();