document.addEventListener('DOMContentLoaded', function () {

        var owl = $('#owl-slider1');

       owl.owlCarousel({
         loop:true,//Зацикливаем слайдер
         margin:0,
         dots: true,
         navigation : true, // показывать кнопки next и prev 
         autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
         autoplay:false, //Автозапуск слайдера
         smartSpeed:2500, //Время движения слайда
         autoplayTimeout:40, //Время смены слайда
         responsiveClass:true,        
         responsive:{
             0:{
                 items:1,
                 nav:true
             },
             600:{
                 items:1,
                 nav:true
             },
             1000:{
                 items:1,
                 nav:true
             }
           }
       });




        var simple_dots       = document.querySelector('.js_simple_dots');
        var dot_count         = simple_dots.querySelectorAll('.js_slide').length;
        var dot_container     = document.querySelector('.js_dots');
        var dot_list_item     = document.createElement('li');

        function handleDotEvent(e) {
            if (e.type === 'before.lory.init') {
              for (var i = 0, len = dot_count; i < len; i++) {
                var clone = dot_list_item.cloneNode();
                dot_container.appendChild(clone);
              }
              dot_container.childNodes[0].classList.add('active');
            }
            if (e.type === 'after.lory.init') {
              for (var i = 0, len = dot_count; i < len; i++) {
                dot_container.childNodes[i].addEventListener('click', function(e) {
                  dot_navigation_slider.slideTo(Array.prototype.indexOf.call(dot_container.childNodes, e.target));
                });
              }
            }
            if (e.type === 'after.lory.slide') {
              for (var i = 0, len = dot_container.childNodes.length; i < len; i++) {
                dot_container.childNodes[i].classList.remove('active');
              }
              dot_container.childNodes[e.detail.currentSlide - 1].classList.add('active');
            }
            if (e.type === 'on.lory.resize') {
                for (var i = 0, len = dot_container.childNodes.length; i < len; i++) {
                    dot_container.childNodes[i].classList.remove('active');
                }
                dot_container.childNodes[0].classList.add('active');
            }
        }
        simple_dots.addEventListener('before.lory.init', handleDotEvent);
        simple_dots.addEventListener('after.lory.init', handleDotEvent);
        simple_dots.addEventListener('after.lory.slide', handleDotEvent);
        simple_dots.addEventListener('on.lory.resize', handleDotEvent);

        var dot_navigation_slider = lory(simple_dots, {
                infinite: 1,
                slideSpeed: 1000,
                enableMouseEvents: true
        });
    


    Array.prototype.slice.call(document.querySelectorAll('.js_ease')).forEach(function (element, index) {

        if (element.classList.contains('slider_letters')) {
            lory(element, {
                infinite: 4,
                slidesToScroll: 1,
                slideSpeed: 1000,
                element: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
             });
        };        
    });


});