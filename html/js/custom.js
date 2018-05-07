$(document).ready(function(){

 //venbox popup and video
  $('.venobox').venobox();  

  $('.venobox_custom').venobox({
        framewidth: '400px',        // default: ''
        frameheight: '300px',       // default: ''
        border: '10px',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: false,            // default: false
        infinigall: false            // default: false
    });      

 //photo
        $('#banner').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    autoplay:true,
    nav:true,
  navText: [
     "<i class='fa fa-chevron-left'></i>",
     "<i class='fa fa-chevron-right'></i>"
   ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})  

//video
  $('#videogallery').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    autoplay:true,
    nav:true,
  navText: [
     "<i class='fa fa-chevron-left'></i>",
     "<i class='fa fa-chevron-right'></i>"
   ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})  

//typed js
  $(".typed").typed({
    strings: ["Faster than you can imagine", "Flash pizza", "Better food better mood", "The fried love"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  });

 $("#showmenu").click(function(e){
      e.preventDefault();
      $("#mobMenu").toggleClass("slideMenu");
    });

   $(".hambMenu").on("click",function(){
      $(this).toggleClass("menu-on");
    });

$(".notifyBtn").on("click",function(){
      $(".notify").toggleClass("slideNotify");
    });

$("#close").on("click",function(){
      $(".notify").removeClass("slideNotify");
    });

$("#mobMenu a").click(function(event){
  event.preventDefault();
  if($(this).next('ul').length){
    $(this).next().toggle('fast');
    $(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
  }
});

$(document).mouseup(function (e) {
      var container = $(".notify, #mobMenu");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
           $(".notify").removeClass("slideNotify");
           $("#mobMenu").removeClass("slideMenu");
            $(".hambMenu").removeClass("menu-on");
      }
    });


});

