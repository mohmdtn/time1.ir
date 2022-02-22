$(document).ready(function () {

  $(".ageCalculate").click(function () {
    $(".ageResult").slideDown();
  });

});





// digital clock timer
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



// menu show button
$(".navbar-toggler").click(function (e) {
  $(".menuSide").toggleClass("openMenu");
  $(".menu-button").toggleClass("cross");
});

// decrease watch band after scroll
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


// show story output
$(".instagramStory").click(function () {
  $(".storyOutputWrapper").slideDown();
  $(".postOutputWrapper").slideUp("fast");
});
// show post output
$(".instagramPost").click(function () {
  $(".storyOutputWrapper").slideUp("fast");
  $(".postOutputWrapper").slideDown();
});


// add color to daily checkbox
$(".singleDayTime>input").click(function () {
  $(this).siblings().toggleClass("dayLabelColor");
});




// slider setings
$(document).ready(function () {
  $(".modal").on('show.bs.modal', function () {
    setTimeout(function () {
      var swiper = new Swiper('.mySwiper', {
        navigation: {
          nextEl: '.nextBtn',
          prevEl: '.prvBtn',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 10,
          }
        }
      });
    }, 500);
  });
});

// select prime package
$(".primeWrapper").click(function () {
  $(this).addClass("primeWrapperClicked");
  $(".primeWrapper").not(this).removeClass("primeWrapperClicked");
});

// change post background
$(".postSliderWrapper .swiper-wrapper .slideInner img").click(function () {
  var imageSrc = $(this).attr("src");
  $(".postOutputInner").css({ 'background-image': 'url(' + imageSrc + ')' });
});

$(".storySliderWrapper .swiper-wrapper .slideInner img").click(function () {
  var imageSrc = $(this).attr("src");
  $(".storyOutputInner").css({ 'background-image': 'url(' + imageSrc + ')' });
});

$(".changeBgInner").click(function () { 
  if ($(".postOutputWrapper").css("display") == "block") {
    $(".postSliderWrapper").slideDown();
    $(".storySliderWrapper").slideUp();

  }
  else {
    $(".storySliderWrapper").slideDown();
    $(".postSliderWrapper").slideUp();
  }
});

// $(".slideInner").click(function () { 
//   $(this).addClass("selectedBg");
//   $(".slideInner").not(this).removeClass("selectedBg");
// });




$(".testest").click(function () {

  // get weekdays input value
  var selected = [];
  $('input[name="weekdays"]:checked').each(function () {
    selected.push($(this).attr('value'));
  });

  console.log("days= " + selected);


  // get hour and minute and am pm
  var hour = $('input[name="hour"]').val();
  var minute = $('input[name="minute"]').val();
  //
  var dayOrNight = $("input[name='dayNight']:checked").val();
  var finalAmPm;
  dayOrNight == "am" ? finalAmPm = "am" : finalAmPm = "pm";

  console.log("hour=" + hour + " minute=" + minute + finalAmPm)


  // get dragable info
  $(".postOutputInner").children().each(function(){
    var items = this;
    var postHeight = $(this).height();
    var postWidth = $(this).width();
    var PostTop = $(this).css("top");
    var postLeft = $(this).css("left");
    var postBackground = $(".postOutputInner").css("background-image");
    // var src = $(this).children().attr("src");

    var items2 = [];
    
    items2.push("post height=>" + postHeight + " post width=>" + postWidth + " post top=>" + PostTop + " post left=>" + postLeft + " post bg=>" + postBackground);
    console.log(JSON.stringify(items2));

  });
  var postBackground = $(".postOutputInner").css("background-image");
  var postbBgHeight = $(".postOutputInner").css("height");
  var postBgWidth = $(".postOutputInner").css("width");
  console.log("post bg=>" + postBackground + " post bg width=>" + postbBgHeight + " post bg height=>" + postBgWidth);



  $(".storyOutputInner").children().each(function(){
    var items = this;
    var storyHeight = $(this).height();
    var storyWidth = $(this).width();
    var storyTop = $(this).css("top");
    var storyLeft = $(this).css("left");
    // var src = $(this).children().attr("src");

    var items2 = [];

    items2.push("story height=>" + storyHeight + " story width=>" + storyWidth + " story top=>" + storyTop);
    console.log(JSON.stringify(items2));

  });
  var storyBackground = $(".storyOutputInner").css("background-image");
  var storybBgHeight = $(".storyOutputInner").css("height");
  var storyBgWidth = $(".storyOutputInner").css("width");
  console.log("story bg=>" + storyBackground + " story bg width=>" + storyBgWidth + " story bg height=>" + storybBgHeight);

});


// show image preview
imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    blah.src = URL.createObjectURL(file)
    $(".imagePreview").slideDown();
  }
}




