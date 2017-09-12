$(document).on('ready', function(){ 
  //Preloader
  setTimeout(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  }, 1500);


	function trimAll(s) {
	// убирает все пробелы в строке s	
 		var r=/\s+/g;
  	return s.replace(r,'');
	}	

  $('.input').click(function(event){
        event.preventDefault();
        var elem = $(event.target)

        if (elem.context.tagName === 'I') {
          $(this).context.childNodes[1].focus();
        }
  });

  $('.input .user-input').change(function(){
    var x = trimAll($(this).context.value);

    if (x === '') {
      $(this).siblings('i').removeClass('replay');
      return;
    } else {
      $(this).siblings('i').addClass('replay');
      return;
    }

  });

	$('#js-toggleview i').click(function(event){
      	event.preventDefault();
        if ($(this).hasClass('active')) {
          return;
        }

        $('#js-toggleview i').removeClass('active');
        $(this).addClass('active');

        if ($('#js-toggleview i.big').hasClass('active')) {
          $('#js-block-resize').addClass('big');
        } else {
          $('#js-block-resize').removeClass('big');
        }
        

  });


  	 
});