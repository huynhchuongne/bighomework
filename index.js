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
}
