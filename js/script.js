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
  h = checkTime(h);
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
    $(".watchBand").addClass("sideBarScroll");
  }
  else {
    $(".watchBand").removeClass("sideBarScroll")
  }
});


// story or post for instagram page
$(".typeInner").click(function () {
  $(this).addClass("curentType");
  $(".typeInner").not(this).removeClass("curentType");
});

// add reminder
$(".addReminderInner").click(function () {
  var day = $(".calenderBodyBody").find(".addForReminder").html();
  var month = $(".calenderHeader").find("h3>span").html();
  if (day == null) {
    day = $(".curentDay").html();
  }

  var ele = '<div class="singleReminder"><div class="comment"><h4>' + day + ' ' + month + '</h4><div class="d-inline-block commentInput"><input class="col form-control" type="text" placeholder="متن..."></div></div></div>';
  $(".addReminderInner").before(ele);
  $(".commentInput>input").focus();
});

// select day for reminder
$(".calenderBodyBody>div>span").click(function () {
  $(this).addClass("addForReminder");
  $(".calenderBodyBody>div>span").not(this).removeClass("addForReminder");
});

$(".instagramStory").click(function () {
  // $(".postOutputInner").addClass("outputStory");
  // $(".postOutputInner").removeClass("outputPost");
  $(".storyOutputInner").slideDown();
  $(".postOutputInner").slideUp("fast");
});

$(".instagramPost").click(function () {
  // $(".postOutputInner").addClass("outputPost");
  // $(".postOutputInner").removeClass("outputStory");
  $(".storyOutputInner").slideUp("fast");
  $(".postOutputInner").slideDown();
});




// add color to daily checkbox
$(".singleDayTime>input").click(function () { 
  $(this).siblings().toggleClass("dayLabelColor");

});





$(document).ready(function () {

  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })



  // var swiper = new Swiper('.swiper', {
  //   navigation: {
  //     nextEl: '.nextBtn1',
  //     prevEl: '.prvBtn1',
  //   },
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   // init: false,
  //   autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: false,
  //   },
  //   loop: true,
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 0,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 0,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 0,
  //     },
  //     1440: {
  //       slidesPerView: 4,
  //       spaceBetween: 0,
  //     }
  //   }
  // });


});



