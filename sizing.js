$(document).ready(function() {
//*****************Sizing START**************************    
    var containersize = $('.main_container').height();
    $('.container').height(containersize)
    

    $(window).resize(function(){
    	var containersize = $('.main_container').height();
        $('.container').height(containersize)
       
    });
//*****************Sizing END**************************** 
});