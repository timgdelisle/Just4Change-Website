$(document).ready(function() {
//*****************Sizing START**************************    
    var containersize = $('.main_container').height();
    $('.container').height(containersize);
    $('.section').height(containersize)

    var circleHeight = $('.container').height()/14;    
    $('.circle').height(circleHeight)

	var windowWidth = $(window).width();
	$('.swirve1').attr('width',windowWidth)
	$('.swirve2').attr('width',windowWidth)
	$('.swirve3').attr('width',windowWidth)
	$('.swirve4').attr('width',windowWidth)
	$('.swirve5').attr('width',windowWidth)
	$('.swirve6').attr('width',windowWidth)
	$('.swirve7').attr('width',windowWidth)
	$('.swirve8').attr('width',windowWidth)
	$('#sect_start1').attr('cx', windowWidth/2)
	$('#swirve2').attr('cx',windowWidth/2.03)
	$('#swirve3').attr('cx',windowWidth/2.25)
	$('#swirve4').attr('cx',windowWidth/2.8)
	$('#swirve5').attr('cx',windowWidth/3.8)
	$('#swirve6').attr('cx',windowWidth/6.1)
	$('#swirve7').attr('cx',windowWidth/12)
	$('#swirve8').attr('cx',windowWidth/28)
    $(window).resize(function(){
    	var containersize = $('.main_container').height();
        $('.container').height(containersize)
        var windowWidth = $(window).width();
		$('.swirve1').attr('width',windowWidth)
		$('.swirve2').attr('width',windowWidth)
		$('.swirve3').attr('width',windowWidth)
		$('.swirve4').attr('width',windowWidth)
		$('.swirve5').attr('width',windowWidth)
		$('.swirve6').attr('width',windowWidth)
		$('.swirve7').attr('width',windowWidth)
		$('.swirve8').attr('width',windowWidth)
		$('#sect_start1').attr('cx', windowWidth/2)
		$('#swirve2').attr('cx',windowWidth/2)
		$('#swirve3').attr('cx',windowWidth/2.25)
		$('#swirve4').attr('cx',windowWidth/2.8)
		$('#swirve5').attr('cx',windowWidth/4)
		$('#swirve6').attr('cx',windowWidth/7)
		$('#swirve7').attr('cx',windowWidth/16)
		$('#swirve8').attr('cx',windowWidth/40)
       
    });
//*****************Sizing END**************************** 


$('#sect_start1').attr('r', 20)
$('.main_container').scroll(function(){
         var containersize = $('.main_container').height();
        if (($('.main_container').scrollTop() >= 0) && ($('.main_container').scrollTop() < (containersize))){
            $('#sect_start1').attr('r', 20)
            $('#sect_start2').attr('r', 10)
            $('#sect_start3').attr('r', 10)
            $('#sect_start4').attr('r', 10)
            $('#sect_start5').attr('r', 10)
            $('#sect_start6').attr('r', 10)
            $('#sect_start7').attr('r', 10)
            $('#sect_start8').attr('r', 10)
            $('#sect_start9').attr('r', 10)

        }else if (($('.main_container').scrollTop() >= containersize) && ($('.main_container').scrollTop() < (2*containersize))){
            $('#sect_start1').attr('r', 10)
            $('#sect_start2').attr('r', 20)
            $('#sect_start3').attr('r', 10)
            $('#sect_start4').attr('r', 10)
            $('#sect_start5').attr('r', 10)
            $('#sect_start6').attr('r', 10)
            $('#sect_start7').attr('r', 10)
            $('#sect_start8').attr('r', 10)
            $('#sect_start9').attr('r', 10)

        } else if (($('.main_container').scrollTop() >= (2*containersize)) && ($('.main_container').scrollTop() < (3*containersize))){
			$('#sect_start1').attr('r', 10)
            $('#sect_start2').attr('r', 10)
            $('#sect_start3').attr('r', 20)
            $('#sect_start4').attr('r', 10)
            $('#sect_start5').attr('r', 10)
            $('#sect_start6').attr('r', 10)
            $('#sect_start7').attr('r', 10)
            $('#sect_start8').attr('r', 10)
            $('#sect_start9').attr('r', 10)
        } else if (($('.main_container').scrollTop() >= (3*containersize)) && ($('.main_container').scrollTop() < (4*containersize))){
            $('#sect_start1').attr('r', 10)
            $('#sect_start2').attr('r', 10)
            $('#sect_start3').attr('r', 10)
            $('#sect_start4').attr('r', 20)
            $('#sect_start5').attr('r', 10)
            $('#sect_start6').attr('r', 10)
            $('#sect_start7').attr('r', 10)
            $('#sect_start8').attr('r', 10)
            $('#sect_start9').attr('r', 10)

        } else if (($('.main_container').scrollTop() >= (4*containersize)) && ($('.main_container').scrollTop() < (5*containersize))){
            $('#sect_start1').attr('r', 10)
            $('#sect_start2').attr('r', 10)
            $('#sect_start3').attr('r', 10)
            $('#sect_start4').attr('r', 10)
            $('#sect_start5').attr('r', 20)
            $('#sect_start6').attr('r', 10)
            $('#sect_start7').attr('r', 10)
            $('#sect_start8').attr('r', 10)
            $('#sect_start9').attr('r', 10)

        } else if (($('.main_container').scrollTop() >= (5*containersize)) && ($('.main_container').scrollTop() < (6*containersize))){
            $('#sect_start1').attr('r', 10)
            $('#sect_start2').attr('r', 10)
            $('#sect_start3').attr('r', 10)
            $('#sect_start4').attr('r', 10)
            $('#sect_start5').attr('r', 10)
            $('#sect_start6').attr('r', 20)
            $('#sect_start7').attr('r', 10)
            $('#sect_start8').attr('r', 10)
            $('#sect_start9').attr('r', 10)
        } else if (($('.main_container').scrollTop() >= (6*containersize)) && ($('.main_container').scrollTop() < (7*containersize))){
            $('#sect_start1').attr('r', 10)
            $('#sect_start2').attr('r', 10)
            $('#sect_start3').attr('r', 10)
            $('#sect_start4').attr('r', 10)
            $('#sect_start5').attr('r', 10)
            $('#sect_start6').attr('r', 10)
            $('#sect_start7').attr('r', 20)
            $('#sect_start8').attr('r', 10)
            $('#sect_start9').attr('r', 10)
        } else if (($('.main_container').scrollTop() >= (7*containersize)) && ($('.main_container').scrollTop() < (8*containersize))){
            $('#sect_start1').attr('r', 10)
            $('#sect_start2').attr('r', 10)
            $('#sect_start3').attr('r', 10)
            $('#sect_start4').attr('r', 10)
            $('#sect_start5').attr('r', 10)
            $('#sect_start6').attr('r', 10)
            $('#sect_start7').attr('r', 10)
            $('#sect_start8').attr('r', 20)
            $('#sect_start9').attr('r', 10)
        } else if (($('.main_container').scrollTop() >= (8*containersize)) && ($('.main_container').scrollTop() < (9*containersize))){
            $('#sect_start1').attr('r', 10)
            $('#sect_start2').attr('r', 10)
            $('#sect_start3').attr('r', 10)
            $('#sect_start4').attr('r', 10)
            $('#sect_start5').attr('r', 10)
            $('#sect_start6').attr('r', 10)
            $('#sect_start7').attr('r', 10)
            $('#sect_start8').attr('r', 10)
            $('#sect_start9').attr('r', 20)



        } else {
            $('#sect_start1').attr('r', 20)
        }
    });





});




//*****************Scroll START**************************    
    