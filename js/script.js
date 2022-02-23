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
  $(".postOutputInner").children().each(function () {
    var items = this;
    var postHeight = $(this).css("height");
    var postWidth = $(this).css("width");
    var PostTop = $(this).css("top");
    var postLeft = $(this).css("left");

    postItems.push({ height: postHeight, width: postWidth, Top: PostTop, Left: postLeft });
  });

  // console.log(postItems);

  var postBackground = $(".postOutputInner").css("background-image");
  var postbBgHeight = $(".postOutputInner").css("height");
  var postBgWidth = $(".postOutputInner").css("width");

  var postWrapper = { postbg: postBackground, postBgWidth: postBgWidth, postBgHeight: postbBgHeight };
  // console.log(postWrapper);






  var storyItems = [];
  $(".storyOutputInner").children().each(function () {
    var items = this;
    var storyHeight = $(this).css("height");
    var storyWidth = $(this).css("width");
    var storyTop = $(this).css("top");
    var storyLeft = $(this).css("left");

    // var items2 = [];
    // items2.push("story height=>" + storyHeight + " story width=>" + storyWidth + " story top=>" + storyTop);
    // console.log(JSON.stringify(items2));

    storyItems.push({ SIheight: storyHeight, SIwidth: storyWidth, SITop: storyTop, SILeft: storyLeft });

  });
  var storyBackground = $(".storyOutputInner").css("background-image");
  var storybBgHeight = $(".storyOutputInner").css("height");
  var storyBgWidth = $(".storyOutputInner").css("width");
  var storyWrapper = { storybg: storyBackground, storyBgWidth: storybBgHeight, storyBgHeight: storyBgWidth };

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
  $(this).parent().parent().remove();

  // var reminderID = $(this);
  // $.ajax({
  //   url: "removeReminder",
  //   type: "POST",
  //   contentType: "application/json",
  //   data: reminderID,
  //   success: function (response) {
  //     if (response.status) {
  //       alert("یادآور با موفقیت حذف شد.")
  //       $(this).parent().parent().remove()
  //     }
  //     else {
  //       alert("هنگام انجام عملیات مشکلی به وجود آمده..")
  //     }
  //   },
  //   error: function () {
  //     alert("خطا!! ارتباط برقرار نشد.")
  //   }
  // });

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

    },
    error: function () {
      alert("خطا!! ارتباط برقرار نشد.")
    }
  });

});




$(".MC").click(function (e) {
  var response = {
    1: {
      day: 1,
      occasion: "تست 1",
      holiday: true
    },
    2: {
      day: 2,
      occasion: "تست 2",
      holiday: false
    },
    3: {
      day: 3,
      occasion: "تست 3",
      holiday: false
    },
    4: {
      day: 4,
      occasion: "تست 4",
      holiday: true
    },
    5: {
      day: 5,
      occasion: "تست 5",
      holiday: false
    },
    6: {
      day: 6,
      occasion: "تست 6",
      holiday: false
    },
  };


  $(".evenItems").children().remove();
  $(".oddItems").children().remove();

  $.each(response, function (i, item) {

    if (i % 2 == 0) {
      $(".evenItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-start"><div class="createCircle  d-flex align-items-center"><div class="line"></div><p>'+ response[i].day +'</p></div><div class="monthEventText">'+ response[i].occasion +'</div></div></div>');
    }
    else{
      $(".oddItems").append('<div class="monthAllEventSingleDay pt-5"><div class="monthAllEventSingleDayInner d-flex justify-content-end"><div class="monthEventText">'+ response[i].occasion +'</div><div class="createCircle d-flex align-items-center"><p>'+ response[i].day +'</p><div class="line"></div></div></div></div>');
      
    }

  });

});





////////////////// test for change calculate datas 

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






// $(document).ready(function () {
//   let cropper;
//   let cropperModalId = "#cropperModal";
//   let $jsPhotoUploadInput = $(".js-photo-upload");

//   $jsPhotoUploadInput.on("change", function () {
//     var files = this.files;
//     if (files.length > 0) {
//       var photo = files[0];

//       var reader = new FileReader();
//       reader.onload = function (event) {
//         var image = $(".js-avatar-preview")[0];
//         image.src = event.target.result;

//         cropper = new Cropper(image, {
//           viewMode: 1,
//           aspectRatio: 1,
//           minContainerWidth: 400,
//           minContainerHeight: 400,
//           minCropBoxWidth: 271,
//           minCropBoxHeight: 271,
//           movable: true,
//           ready: function () {
//             console.log("ready");
//             console.log(cropper.ready);
//           }
//         });

//         $(cropperModalId).modal();
//       };
//       reader.readAsDataURL(photo);
//     }
//   });

//   $(".js-save-cropped-avatar").on("click", function (event) {
//     event.preventDefault();

//     console.log(cropper.ready);

//     var $button = $(this);
//     $button.text("uploading...");
//     $button.prop("disabled", true);

//     const canvas = cropper.getCroppedCanvas();
//     const base64encodedImage = canvas.toDataURL();
//     $("#avatar-crop").attr("src", base64encodedImage);
//     $(cropperModalId).modal("hide");
//   });

// });















// show image preview
imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    blah.src = URL.createObjectURL(file)
    $(".imagePreview").slideDown();
  }
}




