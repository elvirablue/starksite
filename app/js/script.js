$(document).on('ready', function(){ 
  

	function trimAll(s) {
	// убирает все пробелы в строке s	
 		var r=/\s+/g;
  	return s.replace(r,'');
	}	

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