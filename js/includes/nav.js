var count = 0;
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		if(count == 0){ 	//nav opens
			count = 1;
			$('#nav-links').css({
				"width": "100vw",
				"opacity": "1",
			});
		}else{
			count = 0;
			$('#nav-links').css({
				"width": "0",
				"opacity": "0"
			});
		}
    });
});