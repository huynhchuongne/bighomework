window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidersLength = sliderItems.length;
  let positionX = 0;
  let check = 1;
  console.log("sliderItemWidth", sliderItemWidth);
  console.log("slidersLength", slidersLength);
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  function handleChangeSlide(direction) {
    if (direction === 1) {
      check++;
      if (check > 3) {
        check = 3;
        return;
      }
      positionX = positionX - sliderItemWidth;
      console.log(check);
      console.log("handleChangeSlide ~ positionX", positionX);
      sliderMain.style = `transform: translateX(${positionX}px)`;
    } else if (direction === -1) {
      check--;
      if (check < 1) {
        check = 1;
        return;
      }
      positionX = positionX + sliderItemWidth;
      console.log("prev slide");
      console.log(check);
      console.log("handleChangeSlide ~ positionX", positionX);
      sliderMain.style = `transform: translateX(${positionX}px)`;
    }
  }

  const slider1 = document.querySelector(".slider1");
  const sliderMain1 = document.querySelector(".slider-main1");
  const sliderItems1 = document.querySelectorAll(".slider-item1");
  const nextBtn1 = document.querySelector(".slider-next1");
  const prevBtn1 = document.querySelector(".slider-prev1");
  const dotItems1 = document.querySelectorAll(".slider-dot-item1");
  const sliderItemWidth1 = sliderItems1[0].offsetWidth;
  const slidersLength1 = sliderItems1.length;
  let positionX1 = 0;
  let check1 = 1;
  console.log("sliderItemWidth1", sliderItemWidth1);
  console.log("slidersLength1", slidersLength1);
  nextBtn1.addEventListener("click", function () {
    handleChangeSlide1(1);
  });
  prevBtn1.addEventListener("click", function () {
    handleChangeSlide1(-1);
  });
  function handleChangeSlide1(direction) {
    if (direction === 1) {
      check1++;
      if (check1 > 3) {
        check1 = 3;
        return;
      }
      positionX1 = positionX1 - sliderItemWidth1;
      console.log(check1);
      console.log("handleChangeSlide ~ positionX", positionX1);
      sliderMain1.style = `transform: translateX(${positionX1}px)`;
    } else if (direction === -1) {
      check1--;
      if (check1 < 1) {
        check1 = 1;
        return;
      }
      positionX1 = positionX1 + sliderItemWidth1;
      console.log("prev slide");
      console.log(check1);
      console.log("handleChangeSlide ~ positionX", positionX1);
      sliderMain1.style = `transform: translateX(${positionX1}px)`;
    }
  }

  const slider2 = document.querySelector(".slider2");
  const sliderMain2 = document.querySelector(".slider-main2");
  const sliderItems2 = document.querySelectorAll(".slider-item2");
  const nextBtn2 = document.querySelector(".slider-next2");
  const prevBtn2 = document.querySelector(".slider-prev2");
  const dotItems2 = document.querySelectorAll(".slider-dot-item2");
  const sliderItemWidth2 = sliderItems2[0].offsetWidth;
  const slidersLength2 = sliderItems2.length;
  let positionX2 = 0;
  let check2 = 1;
  console.log("sliderItemWidth2", sliderItemWidth2);
  console.log("slidersLength2", slidersLength2);
  nextBtn2.addEventListener("click", function () {
    handleChangeSlide2(1);
  });
  prevBtn2.addEventListener("click", function () {
    handleChangeSlide2(-1);
  });
  function handleChangeSlide2(direction) {
    if (direction === 1) {
      check2++;
      if (check2 > 3) {
        check2 = 3;
        return;
      }
      positionX2 = positionX2 - sliderItemWidth2;
      console.log(check2);
      console.log("handleChangeSlide ~ positionX", positionX2);
      sliderMain2.style = `transform: translateX(${positionX2}px)`;
    } else if (direction === -1) {
      check2--;
      if (check2 < 1) {
        check2 = 1;
        return;
      }
      positionX2 = positionX2 + sliderItemWidth2;
      console.log("prev slide");
      console.log(check2);
      console.log("handleChangeSlide ~ positionX", positionX2);
      sliderMain2.style = `transform: translateX(${positionX2}px)`;
    }
  }

  const slider3 = document.querySelector(".slider3");
  const sliderMain3 = document.querySelector(".slider-main3");
  const sliderItems3 = document.querySelectorAll(".slider-item3");
  const nextBtn3 = document.querySelector(".slider-next3");
  const prevBtn3 = document.querySelector(".slider-prev3");
  const dotItems3 = document.querySelectorAll(".slider-dot-item3");
  const sliderItemWidth3 = sliderItems3[0].offsetWidth;
  const slidersLength3 = sliderItems3.length;
  let positionX3 = 0;
  let check3 = 1;
  console.log("sliderItemWidth3", sliderItemWidth3);
  console.log("slidersLength3", slidersLength3);
  nextBtn3.addEventListener("click", function () {
    handleChangeSlide3(1);
  });
  prevBtn3.addEventListener("click", function () {
    handleChangeSlide3(-1);
  });
  function handleChangeSlide3(direction) {
    if (direction === 1) {
      check3++;
      if (check3 > 3) {
        check3 = 3;
        return;
      }
      positionX3 = positionX3 - sliderItemWidth3;
      console.log(check3);
      console.log("handleChangeSlide ~ positionX", positionX3);
      sliderMain3.style = `transform: translateX(${positionX3}px)`;
    } else if (direction === -1) {
      check3--;
      if (check3 < 1) {
        check3 = 1;
        return;
      }
      positionX3 = positionX3 + sliderItemWidth3;
      console.log("prev slide");
      console.log(check3);
      console.log("handleChangeSlide ~ positionX", positionX3);
      sliderMain3.style = `transform: translateX(${positionX3}px)`;
    }
  }

  const slider4 = document.querySelector(".slider4");
  const sliderMain4 = document.querySelector(".slider-main4");
  const sliderItems4 = document.querySelectorAll(".slider-item4");
  const nextBtn4 = document.querySelector(".slider-next4");
  const prevBtn4 = document.querySelector(".slider-prev4");
  const dotItems4 = document.querySelectorAll(".slider-dot-item4");
  const sliderItemWidth4 = sliderItems4[0].offsetWidth;
  const slidersLength4 = sliderItems4.length;
  let positionX4 = 0;
  let check4 = 1;
  console.log("sliderItemWidth4", sliderItemWidth4);
  console.log("slidersLength4", slidersLength4);
  nextBtn4.addEventListener("click", function () {
    handleChangeSlide4(1);
  });
  prevBtn4.addEventListener("click", function () {
    handleChangeSlide4(-1);
  });
  function handleChangeSlide4(direction) {
    if (direction === 1) {
      check4++;
      if (check4 > 3) {
        check4 = 3;
        return;
      }
      positionX4 = positionX4 - sliderItemWidth4;
      console.log(check4);
      console.log("handleChangeSlide ~ positionX", positionX4);
      sliderMain4.style = `transform: translateX(${positionX4}px)`;
    } else if (direction === -1) {
      check4--;
      if (check4 < 1) {
        check4 = 1;
        return;
      }
      positionX4 = positionX4 + sliderItemWidth4;
      console.log("prev slide");
      console.log(check4);
      console.log("handleChangeSlide ~ positionX", positionX4);
      sliderMain4.style = `transform: translateX(${positionX4}px)`;
    }
  }

  const slider5 = document.querySelector(".slider5");
  const sliderMain5 = document.querySelector(".slider-main5");
  const sliderItems5 = document.querySelectorAll(".slider-item5");
  const nextBtn5 = document.querySelector(".slider-next5");
  const prevBtn5 = document.querySelector(".slider-prev5");
  const dotItems5 = document.querySelectorAll(".slider-dot-item5");
  const sliderItemWidth5 = sliderItems5[0].offsetWidth;
  const slidersLength5 = sliderItems5.length;
  let positionX5 = 0;
  let check5 = 1;
  console.log("sliderItemWidth5", sliderItemWidth5);
  console.log("slidersLength5", slidersLength5);
  nextBtn5.addEventListener("click", function () {
    handleChangeSlide5(1);
  });
  prevBtn5.addEventListener("click", function () {
    handleChangeSlide5(-1);
  });
  function handleChangeSlide5(direction) {
    if (direction === 1) {
      check5++;
      if (check5 > 3) {
        check5 = 3;
        return;
      }
      positionX5 = positionX5 - sliderItemWidth5;
      console.log(check5);
      console.log("handleChangeSlide ~ positionX", positionX5);
      sliderMain5.style = `transform: translateX(${positionX5}px)`;
    } else if (direction === -1) {
      check5--;
      if (check5 < 1) {
        check5 = 1;
        return;
      }
      positionX5 = positionX5 + sliderItemWidth5;
      console.log("prev slide");
      console.log(check5);
      console.log("handleChangeSlide ~ positionX", positionX5);
      sliderMain5.style = `transform: translateX(${positionX5}px)`;
    }
  }

  const slider6 = document.querySelector(".slider6");
  const sliderMain6 = document.querySelector(".slider-main6");
  const sliderItems6 = document.querySelectorAll(".slider-item6");
  const nextBtn6 = document.querySelector(".slider-next6");
  const prevBtn6 = document.querySelector(".slider-prev6");
  const dotItems6 = document.querySelectorAll(".slider-dot-item6");
  const sliderItemWidth6 = sliderItems6[0].offsetWidth;
  const slidersLength6 = sliderItems6.length;
  let positionX6 = 0;
  let check6 = 1;
  console.log("sliderItemWidth6", sliderItemWidth6);
  console.log("slidersLength6", slidersLength6);
  nextBtn6.addEventListener("click", function () {
    handleChangeSlide6(1);
  });
  prevBtn6.addEventListener("click", function () {
    handleChangeSlide6(-1);
  });
  function handleChangeSlide6(direction) {
    if (direction === 1) {
      check6++;
      if (check6 > 3) {
        check6 = 3;
        return;
      }
      positionX6 = positionX6 - sliderItemWidth6;
      console.log(check6);
      console.log("handleChangeSlide ~ positionX", positionX6);
      sliderMain6.style = `transform: translateX(${positionX6}px)`;
    } else if (direction === -1) {
      check6--;
      if (check6 < 1) {
        check6 = 1;
        return;
      }
      positionX6 = positionX6 + sliderItemWidth6;
      console.log("prev slide");
      console.log(check6);
      console.log("handleChangeSlide ~ positionX", positionX6);
      sliderMain6.style = `transform: translateX(${positionX6}px)`;
    }
  }
  const slider7 = document.querySelector(".slider7");
  const sliderMain7 = document.querySelector(".slider-main7");
  const sliderItems7 = document.querySelectorAll(".slider-item7");
  const nextBtn7 = document.querySelector(".slider-next7");
  const prevBtn7 = document.querySelector(".slider-prev7");
  const dotItems7 = document.querySelectorAll(".slider-dot-item7");
  const sliderItemWidth7 = sliderItems7[0].offsetWidth;
  const slidersLength7 = sliderItems7.length;
  let positionX7 = 0;
  let check7 = 1;
  console.log("sliderItemWidth7", sliderItemWidth7);
  console.log("slidersLength7", slidersLength7);
  nextBtn7.addEventListener("click", function () {
    handleChangeSlide7(1);
  });
  prevBtn7.addEventListener("click", function () {
    handleChangeSlide7(-1);
  });
  function handleChangeSlide7(direction) {
    if (direction === 1) {
      check7++;
      if (check7 > 3) {
        check7 = 3;
        return;
      }
      positionX7 = positionX7 - sliderItemWidth7;
      console.log(check7);
      console.log("handleChangeSlide ~ positionX", positionX7);
      sliderMain7.style = `transform: translateX(${positionX7}px)`;
    } else if (direction === -1) {
      check7--;
      if (check7 < 1) {
        check7 = 1;
        return;
      }
      positionX7 = positionX7 + sliderItemWidth7;
      console.log("prev slide");
      console.log(check7);
      console.log("handleChangeSlide ~ positionX", positionX7);
      sliderMain7.style = `transform: translateX(${positionX7}px)`;
    }
  }

  var bgcstore = document.getElementsByTagName("body");
  var bgcsBtn = document.getElementById("ccbgBtn");
  bgcsBtn.addEventListener("click", function () {
    setTimeout(function () {
      if (bgcsBtn.innerText == "off") {
        bgcsBtn.innerText = "on";
        for (var i = 0; i <= bgcstore.length; i++) {
          bgcstore[i].style.backgroundColor = "black";
          bgcstore[i].style.color = "white";
        }
      } else if (bgcsBtn.innerText == "on") {
        bgcsBtn.innerText = "off";
        for (var c = 0; c <= bgcstore.length; c++) {
          bgcstore[c].style.backgroundColor = "white";
          bgcstore[c].style.color = "black";
        }
      }
    });
  });
});
