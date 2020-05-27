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
