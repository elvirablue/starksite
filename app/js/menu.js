
$(document).on('ready', function(){
  
    
	var navMain = document.querySelectorAll('.main-nav-block');
	var navToggle = document.querySelectorAll('.main-nav__toggle');
	var start_pos = navMain[0].offsetTop + 100; 
  var FLAG_visible_scroll_menu = false;   
  //var filter = document.querySelector('#js-filter');
	

  $('.main-subs__check').click(function(event){
        event.preventDefault();
        $('#check').checked = true;
  });
   

	navToggle[0].addEventListener('click', function() {
		if (navMain[0].classList.contains('main-nav--closed')) {
			navMain[0].classList.remove('main-nav--closed');	
			navMain[0].classList.add('main-nav--opened');
		} else {
			navMain[0].classList.add('main-nav--closed');	
			navMain[0].classList.remove('main-nav--opened');	
		}
	});


  

 navToggle[1].addEventListener('click', function() {
    if (navMain[1].classList.contains('main-nav--closed')) {
      navMain[1].classList.remove('main-nav--closed');  
      navMain[1].classList.add('main-nav--opened');
    } else {
      navMain[1].classList.add('main-nav--closed'); 
      navMain[1].classList.remove('main-nav--opened');  
    }
  });

	$(window).scroll(function(){

     if ($(this).scrollTop() > 600) {
                  $('.goup').fadeIn();
            } else {
                  $('.goup').fadeOut();
             };

    if ($(window).scrollTop() > start_pos && !FLAG_visible_scroll_menu) {
          if ($('.main-nav-scroll').hasClass('to_top')==false) {                        
                $('.main-nav-scroll').addClass('to_top');
                $('.main-nav-scroll').slideDown(600);
                FLAG_visible_scroll_menu = true;
                setTimeout(function(){
                  $('.main-nav-scroll').css("box-shadow", "1px 0 20px 2px rgba(0, 0, 0, 0.3)");
                }, 7000);
          } 
    } 

    if ($(window).scrollTop() < start_pos && FLAG_visible_scroll_menu) {
                 $('.main-nav-scroll').slideUp(100, function() {
                    $('.main-nav-scroll').removeClass('to_top');               
                    FLAG_visible_scroll_menu = false;
                    
                 });
                
             
          };

  });  

   $('.goup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
      });      

      


});

