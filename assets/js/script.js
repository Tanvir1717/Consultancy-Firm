// loader
jQuery(document).ready(function() {
     setTimeout(() => {
      jQuery('#loading').fadeOut('slow'), function() {
        $(this).remove();
      };
    },2000);
});
//aos init
AOS.init();
// scroll-nav-start
var num = 500; //number of pixels before modifying styles

$(window).bind("scroll", function() {
    if ($(window).scrollTop() > num) {
        $(".navbar").addClass("fixed");
    } else {
        $(".navbar").removeClass("fixed");
    }
});
// scroll-nav-end
// slick-slider-
$(document).ready(function(){
  $('.autoplay-projects').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});
// modal
    $(document).on("click", ".info", function () { //triggure-btn-class
     var myAgentId = $(this).data('agent');
       var agentImg = $(this).data('img');
       $(".modal-title").html("Recent Project- " + myAgentId)  ;
       $(".modal-body #agent-Img").attr("src", "assets/img/projects/" + agentImg);
});
// 
// slick-slider-
$(document).ready(function(){
$('.autoplay-testimonial').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:'<span class="prev_arrow"><i class="bi bi-chevron-left"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="bi bi-chevron-right"></i></span>',
  dots:true,
  autoplay: true,
  autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
});
});
// AOS initialized
$(window).on("scroll",function(){
  AOS.init({
    offset:120,
  });
})