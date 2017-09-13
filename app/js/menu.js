$(document).on('ready', function(){
  var storage_clubCard = localStorage.getItem('clubCard');
	var navMain = document.querySelector('.main-nav-block');
	var navToggle = document.querySelector('.main-nav__toggle');
	var start_pos = navMain.offsetTop + 100; 
  var FLAG_visible_scroll_menu = false;   
  //var filter = document.querySelector('#js-filter');

  $('.open-nav').click(function(event){
      event.preventDefault();
      $('.page-works__nav ul li').css('display','block');
      $(this).addClass('opened');
  });

   $('.page-works__nav ul li').click(function(event) {
      event.preventDefault();
      if ($('.open-nav').css('display') === 'none') {
        var a_href =  $(this).find('a').attr('href');
        window.location = a_href;
        return;
      }
      if (!$('.open-nav').hasClass('opened')) {
        $('.page-works__nav ul li').css('display','block');
        $('.open-nav').addClass('opened');
        return;
      }
      $('.open-nav').removeClass('opened');
      $('.page-works__nav ul li').css('display','none');
      $('.page-works__nav ul li').removeClass('active');
      $(this).addClass('active');
      $(this).css('display','block');
      var a_href =  $(this).find('a').attr('href');
      window.location = a_href;

   });
	

  $('.main-subs__check').click(function(event){
        event.preventDefault();
        $('#check').checked = true;
  });

   function CloseTab() {
      $('.main-nav-block').addClass('main-nav--closed');
      $('.main-nav-block').removeClass('main-nav--opened');
      
   }

   $('.js-body').click(function(event){
      if ($('.main-nav-block').hasClass('main-nav--opened')) CloseTab()
        else return;
  });
   

	navToggle.addEventListener('click', function() {
		if (navMain.classList.contains('main-nav--closed')) {
			navMain.classList.remove('main-nav--closed');	
			navMain.classList.add('main-nav--opened');
		} else {
			navMain.classList.add('main-nav--closed');	
			navMain.classList.remove('main-nav--opened');	
		}
	});
  



	$(window).scroll(function(){

     if ($(this).scrollTop() > 600) {
                  $('.goup').fadeIn();
            } else {
                  $('.goup').fadeOut();
             };
  });
    
   $('.goup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
      });      
   

});