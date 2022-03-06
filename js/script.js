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




// show footer input for login
$(".fastLogin h6 , .footerLogin").click(function () { 
  $(".fastLogin input[name='footerLogin']").slideDown();
});

// just numbers for numbers input
$(".numberCheck").keypress(function (e) {
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    return false;
 }
});

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
  var ele = '<div class="singleReminder"><div class="comment"><h4>' + day + ' ' + month + '</h4><div class="d-inline-block commentInput"><input class="col form-control" type="text" placeholder="متن..."></div><i class="fas fa-trash-alt reminderDelteBtn" title="حذف یادآور"></i></div></div>';
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
  $("#imgInp").val(null);
  $(".imagePreview").slideUp();
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




$(".sendDataBtn").click(function () {

  // get weekdays input value
  var selected = [];
  $('input[name="weekdays"]:checked').each(function () {
    selected.push($(this).attr('value'));
  });
  // get hour and minute and am pm
  var hour = $('input[name="hour"]').val();
  var minute = $('input[name="minute"]').val();
  var dayOrNight = $("input[name='dayNight']:checked").val();
  var finalAmPm;
  dayOrNight == "am" ? finalAmPm = "am" : finalAmPm = "pm";

  var timeConfig = { hour: hour, minute: minute, finalAmPm: finalAmPm, days: selected };
  // console.log(timeConfig);


  // get dragable info
  var postItems = [];
  $(".postOutputInner .draggable").each(function () {
    var items = this;
    var postHeight = $(this).css("height");
    var postWidth = $(this).css("width");
    var PostTop = $(this).css("top");
    var postLeft = $(this).css("left");
    var postSrc = $(this).find("img").attr("src");

    postItems.push({ height: postHeight, width: postWidth, Top: PostTop, Left: postLeft, src:postSrc });
  });
  // get text info
  var postTextHeight = $(".postOutputWrapper .draggableText").css("height");
  var postTextWidth = $(".postOutputWrapper .draggableText").css("width");
  var PostTextTop = $(".postOutputWrapper .draggableText").css("top");
  var postTextLeft = $(".postOutputWrapper .draggableText").css("left");
  var postTextColor = $(".postOutputWrapper .draggableText p").css("color");
  var postTextSize = $(".postOutputWrapper .draggableText p").css("font-size");
  var postText = $(".postOutputWrapper .draggableText p").text();
  postItems.push({postTextHeight: postTextHeight, postTextWidth:postTextWidth, PostTextTop:PostTextTop, postTextLeft:postTextLeft, postTextColor:postTextColor, postTextSize, postText})

  // console.log(postItems);

  var postBackground = $(".postOutputInner").css("background-image");
  var postBgHeight = $(".postOutputInner").css("height");
  var postBgWidth = $(".postOutputInner").css("width");
  var postWrapper = { postbg: postBackground, postBgWidth: postBgWidth, postBgHeight: postBgHeight };
  // console.log(postWrapper);






  var storyItems = [];
  $(".storyOutputInner .draggable").each(function () {
    var items = this;
    var storyHeight = $(this).css("height");
    var storyWidth = $(this).css("width");
    var storyTop = $(this).css("top");
    var storyLeft = $(this).css("left");
    var storySrc = $(this).find("img").attr("src");

    // var items2 = [];
    // items2.push("story height=>" + storyHeight + " story width=>" + storyWidth + " story top=>" + storyTop);
    // console.log(JSON.stringify(items2));

    storyItems.push({ SIheight: storyHeight, SIwidth: storyWidth, SITop: storyTop, SILeft: storyLeft, SIsrc:storySrc });
  });
  // get text info
  var storyTextHeight = $(".storyOutputInner .draggableText").css("height");
  var storyTextWidth = $(".storyOutputInner .draggableText").css("width");
  var storyTextTop = $(".storyOutputInner .draggableText").css("top");
  var storyTextLeft = $(".storyOutputInner .draggableText").css("left");
  var storyTextColor = $(".storyOutputInner .draggableText p").css("color");
  var storyTextSize = $(".storyOutputInner .draggableText p").css("font-size");
  var storyText = $(".storyOutputInner .draggableText p").text();
  storyItems.push({storyTextHeight: storyTextHeight, storyTextWidth:storyTextWidth, storyTextTop:storyTextTop, storyTextLeft:storyTextLeft, storyTextColor:storyTextColor, storyTextSize, storyText})
  
  var storyBackground = $(".storyOutputInner").css("background-image");
  var storyBgHeight = $(".storyOutputInner").css("height");
  var storyBgWidth = $(".storyOutputInner").css("width");
  var storyWrapper = { storybg: storyBackground, storyBgWidth: storyBgWidth, storyBgHeight: storyBgHeight };

  // console.log(storyWrapper);
  // console.log("story bg=>" + storyBackground + " story bg width=>" + storyBgWidth + " story bg height=>" + storybBgHeight);


  var finalData = { timeConfig: timeConfig, postItems: postItems, postWrapper: postWrapper, storyItems: storyItems, storyWrapper: storyWrapper }

  console.log(finalData);

  $.ajax({
    url: "test",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(finalData),
    success: function (response) {
      if (response.status) {
        alert("تغییرات شما با موفقیت ذخیره شد.")
      }
      else {
        alert("هنگام انجام عملیات مشکلی به وجود آمده..")
      }
    },
    error: function () {
      alert("خطا!! ارتباط برقرار نشد.")
    }
  });

});





// remove reminder
$(document).on("click", ".reminderDelteBtn", function () {
  // $(this).parent().parent().remove();
  let confirmText = "آیا از حذف یادآور مطمن هستید؟";
  if (confirm(confirmText) == true) {
    var reminderID = $(this);
    $.ajax({
      url: "removeReminder",
      type: "POST",
      contentType: "application/json",
      data: reminderID,
      success: function (response) {
        if (response.status) {
          alert("یادآور با موفقیت حذف شد.")
          $(this).parent().parent().remove();
        }
        else {
          alert("هنگام انجام عملیات مشکلی به وجود آمده..")
        }
      },
      error: function () {
        alert("خطا!! ارتباط برقرار نشد.")
      }
    });
  }

});





// send reminders to backend ajax
$(document).on("change", ".singleReminder input", function () {
  var reminderValue = [];
  $(".singleReminder input").each(function () {

    var value = $(this).val();
    var day = $(this).parent().parent().find("h4").text();

    reminderValue.push({ day: day, value: value });
  });

  $.ajax({
    url: "test2",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(reminderValue),
    success: function (response) {
      if (response.status) {
        alert("تغییرات شما با موفقیت ذخیره شد.")
      }
      else {
        alert("هنگام انجام عملیات مشکلی به وجود آمده..")
      }
    },
    error: function () {
      alert("خطا!! ارتباط برقرار نشد.")
    }
  });

});






// calculate age ajax
$(".ageCalculate").click(function () {
  const day = $("select[name='ageDay']").val();
  const month = $("select[name='ageMonth']").val();
  const year = $("input[name='ageYear']").val();

  $(".ageResult").slideUp("fast");
  $(".ageResult").slideDown();

  const userSelctedDate = { day: day, month: month, year: year };

  $.ajax({
    url: "sendDataForCalculaeAge",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(userSelctedDate),
    success: function (response) {
      if (response.status) {
        $(".ageResultHead").text(response.ageResultHead);
        $(".passedMonths").text(response.passedMonths);
        $(".passedWeeks").text(response.passedWeeks);
        $(".passedDays").text(response.passedDays);
        $(".passedHours").text(response.passedHours);
        $(".passedMins").text(response.passedMins);
        $(".passedSeconds").text(response.passedSeconds);
        $(".tillDays").text(response.tillDays);
        $(".brithYear").text(response.brithYear);
        $(".brithYearName").text(response.brithYearName);
        $(".brithYearAnimal").text(response.brithYearAnimal);
        $(".brithdayCandles").text(response.brithdayCandles);
      }
      else {
        alert("هنگام انجام عملیات مشکلی به وجود آمده.")
      }
    },
    error: function () {
      alert("خطا!! ارتباط برقرار نشد.")
    }
  });

});
//////////////////////// test for change calculate datas 
// $(".calc").click(function () { 
//   var response = {
//     ageResultHead:"سن دقیق شما: 12 سال، 12 ماه، 12 روز، 12 ساعت، 12 دقیقه، 12 ثانیه",
//     passedMonths:"51",
//     passedWeeks:"52",
//     passedDays:"53",
//     passedHours:"54",
//     passedMins:"55",
//     passedSeconds:"56",
//     tillDays:"57",
//     brithYear:"58",
//     brithYearName:"اژدها",
//     brithYearAnimal:"پلنگ",
//     brithdayCandles:"در تاریخ 1444/44/44 شما 44 ساله خواهید شد و تعداد شمع تولد شما 44 است"
//   }
//   $(".ageResultHead").text(response.ageResultHead);
//   $(".passedMonths").text(response.passedMonths);
//   $(".passedWeeks").text(response.passedWeeks);
//   $(".passedDays").text(response.passedDays);
//   $(".passedHours").text(response.passedHours);
//   $(".passedMins").text(response.passedMins);
//   $(".passedSeconds").text(response.passedSeconds);
//   $(".tillDays").text(response.tillDays);
//   $(".brithYear").text(response.brithYear);
//   $(".brithYearName").text(response.brithYearName);
//   $(".brithYearAnimal").text(response.brithYearAnimal);
//   $(".brithdayCandles").text(response.brithdayCandles);
// });









// month calender ajax
$(".mcSelects").change(function () {
  const month = $("select[name='mcMonthName']").val();
  const calenderType = $("select[name='calenderType']").val();

  const userSelctedDate = { month: month, calenderType: calenderType };

  $.ajax({
    url: "sendDataForCalculaeAge",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(userSelctedDate),
    success: function (response) {

      $(".evenItems").children().remove();
      $(".oddItems").children().remove();

      $(".monthAllEventName").text(response.monthInfo.monthName);
      $(".monthAllEventNumber>p").text(response.monthInfo.monthNumber);

      $.each(response.occasionInfo, function (i, item) {

        if (i % 2 == 0) {
          if (response.occasionInfo[i].holiday == true) {
            $(".evenItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-start"><div class="createCircle createCircleHoliday d-flex align-items-center"><div class="line"></div><p>' + response.occasionInfo[i].day + '</p></div><div class="monthEventText">' + response.occasionInfo[i].occasion + '</div></div></div>');
          }
          else {
            $(".evenItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-start"><div class="createCircle  d-flex align-items-center"><div class="line"></div><p>' + response.occasionInfo[i].day + '</p></div><div class="monthEventText">' + response.occasionInfo[i].occasion + '</div></div></div>');
          }
        }

        else {
          if (response.occasionInfo[i].holiday == true) {
            $(".oddItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-end"><div class="monthEventText">' + response.occasionInfo[i].occasion + '</div><div class="createCircle createCircleHoliday d-flex align-items-center"><p>' + response.occasionInfo[i].day + '</p><div class="line"></div></div></div></div>');
          }
          else {
            $(".oddItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-end"><div class="monthEventText">' + response.occasionInfo[i].occasion + '</div><div class="createCircle d-flex align-items-center"><p>' + response.occasionInfo[i].day + '</p><div class="line"></div></div></div></div>');
          }
        }

      });

    },
    error: function () {
      alert("خطا!! ارتباط برقرار نشد.")
    }
  });

});
////////////////////////// month calender change test
// $(".MC").click(function (e) {
//   var response = {
//     monthInfo: {
//       monthNumber: "12",
//       monthName: "اسفند"
//     },
//     occasionInfo: {
//       1: {
//         day: 1,
//         occasion: "تست 1",
//         holiday: true
//       },
//       2: {
//         day: 2,
//         occasion: "تست 2",
//         holiday: false
//       },
//       3: {
//         day: 3,
//         occasion: "تست 3",
//         holiday: false
//       },
//       4: {
//         day: 4,
//         occasion: "تست 4",
//         holiday: true
//       },
//       5: {
//         day: 5,
//         occasion: "تست 5",
//         holiday: true
//       },
//       6: {
//         day: 6,
//         occasion: "تست 6",
//         holiday: false
//       },
//     }
//   };

//   $(".evenItems").children().remove();
//   $(".oddItems").children().remove();

//   $(".monthAllEventName").text(response.monthInfo.monthName);
//   $(".monthAllEventNumber>p").text(response.monthInfo.monthNumber);


//   $.each(response.occasionInfo, function (i, item) {

//     if (i % 2 == 0) {
//       if (response.occasionInfo[i].holiday == true) {
//         $(".evenItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-start"><div class="createCircle createCircleHoliday d-flex align-items-center"><div class="line"></div><p>' + response.occasionInfo[i].day + '</p></div><div class="monthEventText">' + response.occasionInfo[i].occasion + '</div></div></div>');
//       }
//       else {
//         $(".evenItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-start"><div class="createCircle  d-flex align-items-center"><div class="line"></div><p>' + response.occasionInfo[i].day + '</p></div><div class="monthEventText">' + response.occasionInfo[i].occasion + '</div></div></div>');
//       }
//     }

//     else {
//       if (response.occasionInfo[i].holiday == true) {
//         $(".oddItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-end"><div class="monthEventText">' + response.occasionInfo[i].occasion + '</div><div class="createCircle createCircleHoliday d-flex align-items-center"><p>' + response.occasionInfo[i].day + '</p><div class="line"></div></div></div></div>');
//       }
//       else {
//         $(".oddItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-end"><div class="monthEventText">' + response.occasionInfo[i].occasion + '</div><div class="createCircle d-flex align-items-center"><p>' + response.occasionInfo[i].day + '</p><div class="line"></div></div></div></div>');
//       }
//     }

//   });

// });










// day calender ajax
$(".dcSelect").change(function () {
  const calenderType = $("select[name='calenderType']").val();
  const userSelctedDate = { calenderType: calenderType };

  $.ajax({
    url: "sendDataTestUrl",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(userSelctedDate),
    success: function (response) {

      $(".eventsWrapper").children().remove();

      $.each(response, function (i, item) {

      });

    },
    error: function () {
      alert("خطا!! ارتباط برقرار نشد.")
    }
  });

});
// change day calender data test
// $(".btnTest").click(function () { 
//   var response = {
//     1 : "متن تست اول",
//     2 : "متن تست دوم",
//     3 : "متن تست سوم",
//     4 : "متن تست چهارم",
//     5 : "متن تست پنجم",
//     6 : "متن تست ششم",
//   }
//   $(".eventsWrapper").children().remove();

//   $.each(response, function (i, item) {
//     $(".eventsWrapper").append('<p class="pb-2">'+ response[i] +'</p>');

//   });
// });










// date transform page ajax
$(".dateTransfotmBtn").click(function () {
  const calenderType = $("select[name='calenderType']").val();
  const day = $("select[name='transformDateDay']").val();
  const month = $("select[name='transformDateMonth']").val();
  const year = $("input[name='transformDateYear']").val();
  const userSelctedDate = { calenderType: calenderType, day: day, month: month, year: year };

  $.ajax({
    url: "sendDataTestUrl",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(userSelctedDate),
    success: function (response) {
      $(".dateTransformOutput").slideUp("fast");
      $(".dateTransformOutput").slideDown();
      $(".dateTransformOutput>.allDates>.row").children().remove();

      $(".khorshidi>.dateText").text(response.khorshidi.text);
      $(".khorshidi>.dateNumber").text(response.khorshidi.number);

      $(".miladi>.dateText").text(response.miladi.text);
      $(".miladi>.dateNumber").text(response.miladi.number);

      $(".qamari>.dateText").text(response.qamari.text);
      $(".qamari>.dateNumber").text(response.qamari.number);

      $(".tabari>.dateText").text(response.tabari.text);
      $(".tabari>.dateNumber").text(response.tabari.number);
    },
    error: function () {
      alert("خطا!! ارتباط برقرار نشد.")
    }
  });

});
// change data transform page test
// $(".dateTransfotmBtn").click(function () {
// var response = {
//   khorshidi: {
//     text: "پنجشنبه 5 اسفند 1400",
//     number: "1400/12/05"
//   },
//   miladi: {
//     text: "Thursday, 24 February 2022",
//     number: "2022/02/24"
//   },
//   qamari: {
//     text: "الخميس 22 رجب 1443",
//     number: "1443/07/22"
//   },
//   tabari: {
//     text: "پنجشنبه 6 اونه ما 1533",
//     number: "1533/08/06"
//   },
// }

//   $(".khorshidi>.dateText").text(response.khorshidi.text);
//   $(".khorshidi>.dateNumber").text(response.khorshidi.number);

//   $(".miladi>.dateText").text(response.miladi.text);
//   $(".miladi>.dateNumber").text(response.miladi.number);

//   $(".qamari>.dateText").text(response.qamari.text);
//   $(".qamari>.dateNumber").text(response.qamari.number);

//   $(".tabari>.dateText").text(response.tabari.text);
//   $(".tabari>.dateNumber").text(response.tabari.number);

// });








// add text modal
$(".saveTextBtn").click(function () {
  
  var postTextValue = $("textarea[name='postAddText']").val();

  if ($(".postOutputWrapper").css("display") == "block") {
    $(".postOutputInner .draggableText p").html(postTextValue);
  }
  else {
    $(".storyOutputInner .draggableText p").html(postTextValue);
  }

});

// set color to text modal
$("#changeTextColor").change(function () {

  var postTextColor = $("#changeTextColor").val();

  if ($(".postOutputWrapper").css("display") == "block") {
    $(".postOutputInner .draggableText p").css("color", postTextColor);
  }
  else {
    $(".storyOutputInner .draggableText p").css("color", postTextColor);
  }

});

// set font size to text
$(".changeTextFontBtn").click(function (e) { 
  $("#changeTextFont").slideToggle();
}); 

$("#changeTextFont").change(function () { 

  var fontSize = $("#changeTextFont").val() + "px";

  if ($(".postOutputWrapper").css("display") == "block") {
    $(".postOutputInner .draggableText p").css("font-size", fontSize);
  }
  else {
    $(".storyOutputInner .draggableText p").css("font-size", fontSize);
  }
});














// show image preview
var cropper;
imgInp.onchange = evt => {
  var file = [];
  var image = null;

  [file] = imgInp.files;
  if (file) {
    blah.src = URL.createObjectURL(file)
    $(".imagePreview").slideUp(10);
    $(".imagePreview").slideDown();

    image = document.getElementById('blah');

    var ratio = 1 / 1;
    if ($(".postOutputWrapper").css("display") == "block") {
      ratio = 1 / 1;
    }
    else {
      ratio = 9 / 16;
    }

    cropper = new Cropper(image, {
      aspectRatio: ratio,
      viewMode: 1,
      center: true,
      zoomable: false,
      minCropBoxWidth: 40,
    });

    $(".cropperBtn").click(function (e) {
      var croppedimage = cropper.getCroppedCanvas().toDataURL("image/png");
      $(".imagePreview textarea").val(croppedimage)
      console.log(croppedimage);
      $(".bgForm").submit();
    });
  }
}

$(".imgInpLabel").click(function () {
  cropper.destroy();
  $(".imagePreview").slideUp("fast");
});



// jq add shape to post and story
$(".shapeDefultWrapper .slideInner .addShapeBtn").click(function (e) { 
  var item = $(this).parent().parent().find("img").attr("src");

  if ($(".postOutputWrapper").css("display") == "block") {
    $(".postOutputInner").append('<div class="draggable" style="left: 30%;"><img src="'+ item +'" alt=""></div>');
  }
  else {
    $(".storyOutputInner").append('<div class="draggable" style="left: 30%;"><img src="'+ item +'" alt=""></div>');
  }
  $(".draggable").draggable({ containment: "parent", stack: ".draggable" }).resizable({ containment: "parent", aspectRatio: "parent", handles: "e"}).removeAttr('height');
  
});

// jq remove shape from post and story
$(".shapeDefultWrapper .slideInner .deleteShapeBtn").click(function (e) { 
  var item = $(this).parent().parent().find("img").attr("src");
  var postElement = $('.postOutputWrapper .draggable img[src="'+ item +'"]').parent();
  var storyElement = $('.storyOutputWrapper .draggable img[src="'+ item +'"]').parent();

  if ($(".postOutputWrapper").css("display") == "block") {
    $(postElement).remove();
  }
  else {
    $(storyElement).remove();
  }
  
});