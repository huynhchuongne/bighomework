$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $(".menu__item-bigleft , .menu__item_link").addClass(
        "animate__animated animate__flipInX"
      );
    }
    if ($(this).scrollTop() >= 690) {
      $(".addclassfr").addClass("animate__animated animate__flipInY");
    }
    if ($(this).scrollTop() >= 895) {
      $(".addclasscake").addClass("animate__animated animate__fadeInDown");
    }
  });
});
