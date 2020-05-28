$(document).ready(function(){
    $('.slider').slick({
      dots:false,
      centermode:true,
      arrows:false,
      autoplay:true
    });
});
// mark slider
$(document).ready(function(){
    $('.mark_slider').slick({
      slidesToShow:6,
      sldesToScroll:1,
      arrows:true,
      dots:false,
      autoplay:true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
});
<<<<<<< HEAD
//for you slider
$(document).ready(function(){
  $('.for_you_slider').slick({
    slidesToShow:4,
    sldesToScroll:1,
    arrows:true,
    dots:false,
    autoplay:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//blog slider
$(document).ready(function(){
      $('.blog_slider').slick({
        slidesToShow:3,
        sldesToScroll:1,
        arrows:true,
        dots:false,
        autoplay:true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
        responsive: [
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
=======



    $(document).ready(function(){
        $('.blog_slider').slick({
          slidesToShow:3,
          sldesToScroll:1,
          arrows:true,
          dots:false,
          autoplay:true,
          prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
          nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
          responsive: [
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
>>>>>>> 6b9f4b4c77a2c4574884a74134eb4ce100369f17
