/*------preloader part--------*/

setTimeout(function(){
  $('#preloader').fadeOut()
},2500)




/*------nav-part--------*/

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  if(scrollamount > 100){
    $('.navbar').addClass('fixed')
  }else{
    $('.navbar').removeClass('fixed')
  }
})




/*------banner-part--------*/


$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<span><i class="far fa-hand-point-left prv"></i></span>',
    nextArrow:'<span><i class="far fa-hand-point-right nxt"></i></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*------text slider part--------*/



  $('.text-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.details-slider',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*------img slider part--------*/



  $('.img-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.text-slider',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*------details-slider part--------*/



  $('.details-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.img-slider',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*------mix-it up part--------*/


  var mixer = mixitup('.mixit-img');



/*------counter-part--------*/


$('.count-num').rCounter();




/*------video part--------*/


$('.venobox').venobox();



/*------footer slider part--------*/


$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



/*------go-top part--------*/

$(window).on('scroll', function(){
  var scrollPos =  $(window).scrollTop()

  if(scrollPos > 300){
    $(".navbar").addClass("hide");
  }else{
    $(".navbar").removeClass("hide")
  }

//back to top// 

if(scrollPos > 150){
  $(".top-button").fadeIn();
}else{
  $(".top-button").fadeOut();
}


})


$('.top-button').click(function(){
  $('html,body').animate({
    scrollTop:0
  },500)
})