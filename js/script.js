$(document).ready(function () {

  $(".ageCalculate").click(function () {
    $(".ageResult").slideDown();
  });

});






function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementsByClassName('hourTimer')[0].innerHTML = h;
  document.getElementsByClassName('minuteTimer')[0].innerHTML = m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}




$(".navbar-toggler").click(function (e) {
  $(".menuSide").toggleClass("openMenu");
  $(".menu-button").toggleClass("cross");
});


$(document).scroll(function () {
  if (document.documentElement.scrollTop > 200) {
    // $(".watchBand ").css({ "height": "50vh", "transition": ".3s" });
    $(".watchBand").addClass("sideBarScroll");
  }
  else {
    // $(".watchBand ").css({ "height": "100vh", "transition": ".3s" });
    $(".watchBand").removeClass("sideBarScroll")
  }
});
