$(function(){
    // search section start
        
    $('.search_show_btn').on('click', ()=>{
        $('#search').addClass('show');
    });
    // $('.bottomToTop').on('scroll',()=>{
    //     $('.bottomToTop').addClass('active');
    //     if
    // })
    $('.search_hide_btn').on('click', ()=>{
        $('#search').removeClass('show');
    });
    // card section start
    $('.card_show_btn').on('click', ()=>{
        $('#card').addClass('show');
    });
    $('.card_hide_btn').on('click', ()=>{
        $('#card').removeClass('show');
    });
    // pop up section
    $('.pop_up_hide_btn').on('click',()=>{
        $('#pop_up').addClass('hide');
    })
   // banner section
    $('.banner_slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.banner_slider_dots_container'),
        dotsClass:'banner_slider_dots',
        autoplay:true,
        autoplaySpeed:5000, 
        fade: true,
        speed:3000,
      });
//   new arrival product section
      $('.new_arrival_product_slider').slick({
        slidesToShow:4,
        prevArrow:'<i class="fa-solid fa-chevron-left new_arrival_product_arrows"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right new_arrival_product_arrows"></i>',
        autoplay:true,
        autoplaySpeed:2000, 
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:568,
                settings:{
                    slidesToShow:1
                }
            }
        ]

    });

$('[data-countdown]').each(function(){
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event){
        var $this = $(this).html(event.strftime('' 
        + '<li><h4>%D</h4><small>Days</small></li> '
        + '<li><h3>:</h3></li>'
        + '<li><h4>%H</h4><small>Hour</small></li> '
        + '<li><h3>:</h3></li>'
        + '<li><h4>%M</h4><small>Minute</small></li>'
        + '<li><h3>:</h3></li>'
        + '<li><h4>%S</h4><small>Sec</small></li>'));
    })
})
 $('.deal_day_box_slider').slick({
    slidesToShow:2,
    arrows: false,
    autoplay: true,
    speed:1000,
    dots: true,
    appendDots: $(".deal_slider_dots"),
    dotsClass: "deal_day_slider_dots",
    responsive:[
        {
            breakpoint:768,
            settings:{
                slidesToShow:1
            }
        },
        {
            breakpoint:568,
            settings:{
                slidesToShow:1
            }
        }
    ]
});  
 $('.latest_news_slider').slick({
    slidesToShow:4,
    arrows: false,
    autoplay: true,
    speed:1000,
    dots: true,
    appendDots: $(".latest_slider_dots"),
    dotsClass: "latest_news_slider_dots",
    responsive:[
        {
            breakpoint:1200,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint:992,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint:575,
            settings:{
                slidesToShow:1
            }
        }

    ]
}); 
//  expert leader section
$('.team_leaders_slider').slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left team_leaders_arrows"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right team_leaders_arrows"></i>',
    autoplay:true,
    autoplaySpeed:3000, 
});
// founder image slider
$('.main_infu').slick({
        slidesToShow:1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:4000,
        speed:1000,
        pauseOnHover:false,
        fade:true,
});
$('.Aetor_Instagram_slider').slick({
    arrows: false,
    dots: false,
    slidesToShow:6,
    autoplay:true,
    autoplaySpeed:1000, 
    speed:1000,
    // responsive:[
    //     {
    //         breakpoint:1200,
    //         settings:{
    //             slidesToShow:5,
    //         }   
    //     },
    // ]
});

$('.counterBtn').click(function(){

     const value =  $(this).attr('data-value')
     console.log(value);
     const resultBox = $(this).parent().children('input')
    if( value == 'increment' ){
        resultBox.val( Number(resultBox.val()) + 1)
    }
    else{
        if(resultBox.val() == 0) return false;
        resultBox.val( Number(resultBox.val()) - 1)
    }

})



$('.related_product_slider').slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left related_product_arrows"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right related_product_arrows"></i>',
    autoplay:true,
    autoplaySpeed:3000,
    speed:1000, 
});
// blog all banner slider
$('.blogDetails_all_banner_slider').slick({
    slidesToShow:1,
    autoplay:true,
    autoplaySpeed:3000,
    speed:1000, 
    arrows:false, 
    fade:true,
})
// shop details lgPic slider 
$('.product_lgPic_slider').slick({
    arrows:false,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:2000,  
    fade: true,
    cssEase: 'linear',
    asNavFor: '.product_smPic_slider',
  });
// shop details smPic slider
$('.product_smPic_slider') .slick({
    slidesToShow:5,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,  
    asNavFor: '.product_lgPic_slider',
    centerMode: true,
    focusOnSelect: true,
});

$(window).on('scroll',function(){
    let scrollTop = $(window).scrollTop();
    let navbarTopValue = $('#nav').offset().top
         
    if(scrollTop > 1500){
        $('.bottomToTop').addClass('active')
    }else{
        $('.bottomToTop').removeClass('active')
    }
})
  $('.bottomToTop').on('click',function(){
    $('html,body').animate({
             scrollTop:0
         },400)
  })
 

})

// new arrival product section bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// special offer section
new VenoBox({
    spinner:'grid',
});


