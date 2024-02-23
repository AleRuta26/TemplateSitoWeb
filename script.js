



$(document).ready(function () {
        const swiper = new Swiper('.swiper', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                spaceBetween: 30,
              
                // If we need pagination
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              
                // Navigation arrows
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
        
                
                autoplay:{
                        delay:2500,
                        clickable:true,
                        disableOnInteraction:false,
                        pauseOnMouseEnter:true,
                },
        
        });
        //apertura menù
        $("#menu-icon").on('click', function () {
                $(this).toggleClass("bi bi-list").toggleClass("bi bi-x-lg");
                $(".menu").toggleClass("menu-disappear");
        });
});







