function init() {
  var ssee = document.getElementById("ssee");
  var li_one = document.getElementById("li-one");
  var li_two = document.getElementById("li-two");
  var select_s = document.getElementById("select-s");
  var sone = document.getElementById("sone");
  var stwo = document.getElementById("stwo");
  var ssee = document.getElementById("ssee");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  stwo.onclick = function () {
    ssee.innerHTML = li_two.innerHTML;
    one.style.display = "none";
    two.style.display = "inline-block";
  };
  sone.onclick = function () {
    ssee.innerHTML = li_one.innerHTML;
    two.style.display = "none";
    one.style.display = "inline-block";
  };
  var bgcstoreme = document.getElementsByTagName("body");
  var bgcsBtnme = document.getElementById("ccbgBtnme");
  bgcsBtnme.addEventListener("click", function () {
    setTimeout(function () {
      if (bgcsBtnme.innerText == "off") {
        bgcsBtnme.innerText = "on";
        for (var i = 0; i <= bgcstoreme.length; i++) {
          bgcstoreme[i].style.backgroundColor = "black";
          bgcstoreme[i].style.color = "white";
        }
      } else if (bgcsBtnme.innerText == "on") {
        bgcsBtnme.innerText = "off";
        for (var c = 0; c <= bgcstoreme.length; c++) {
          bgcstoreme[c].style.backgroundColor = "white";
          bgcstoreme[c].style.color = "black";
        }
      }
    });
  });
}
