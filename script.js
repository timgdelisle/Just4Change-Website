$(document).ready(function() {





//*****************Sizing START**************************    
    var containersize = $('.main_container').height();
    $('.container').height(containersize);
    $('.section').height(containersize)

    var circleHeight = $('.container').height()/14;    
    $('.circle').height(circleHeight)

    

	var windowWidth = $(window).width();
    $('.swirvebox').attr('width',windowWidth)
	$('#sect_start1').attr('cx', windowWidth/2)
	$('#swirve2').attr('cx',windowWidth/2)
	$('#swirve3').attr('cx',windowWidth/2)

    var lineLength = $('.lineref1').offset().left - $('.lineref2').offset().left;
    var numOfCircles = Math.floor(lineLength/50)
    var firstCirclePosition = windowWidth/2

    for (var i=0;i<=numOfCircles;i++)
    { 
        var circlePosition = firstCirclePosition -lineLength/numOfCircles*i
        $('.line').append("<circle class='line_circle' id='circle"+i+"' cx='"+circlePosition+"' cy=22 r=10 fill=#5ac8e6 />")
    }
    $("body").html($("body").html());


    $(window).resize(function(){
    	


        var containersize = $('.main_container').height();
        $('.container').height(containersize)
        var windowWidth = $(window).width();
        $('.swirvebox').attr('width',windowWidth)
        $('.line_circle').remove()
        $('#sect_start1').attr('cx', windowWidth/2)
        $('#swirve2').attr('cx',windowWidth/2)
        $('#swirve3').attr('cx',windowWidth/2)
            var lineLength = $('.lineref1').offset().left - $('.lineref2').offset().left;
            var numOfCircles = Math.floor(lineLength/50)
            var firstCirclePosition = windowWidth/2

            for (var i=0;i<=numOfCircles;i++)
            { 
                var circlePosition = firstCirclePosition -lineLength/numOfCircles*i
                $('.line').append("<circle class='line_circle' id='circle"+i+"' cx='"+circlePosition+"' cy=22 r=10 fill=#5ac8e6 />")
            }
            $("body").html($("body").html());
       
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

//*****************clicks START**************************
//who we are click
    $('.who_we_are_button').click(function() {
        $('.main_container').scrollTo('.who_we_are',750);
        event.stopPropagation();
    });
//pick solution click
    $('.pick_your_solution_button').click(function() {
        $('.main_container').scrollTo('.how_it_works',750)
        event.stopPropagation();
    });
//S4C click
    $('.s4c_button').click(function() {
        $('.main_container').scrollTo('.strip_4_change',750)
        event.stopPropagation();
    });
//F4C click
    $('.f4c_button').click(function() {
        $('.main_container').scrollTo('.fashion_4_change',750)
        event.stopPropagation();
    });
//L4C click
    $('.l4c_button').click(function() {
        $('.main_container').scrollTo('.likes_4_change',750)
        event.stopPropagation();
    });
//Contact click
    $('.contact_us_button').click(function() {
        $('.main_container').scrollTo('.contact_us',750)
        event.stopPropagation();
    });
//FAQ click
    $('.faq_button').click(function() {
        $('.main_container').scrollTo('.faq',750)
        event.stopPropagation();
    });
//*****************clicks END***************************


    $('.logo').fadeTo(3000,1);

});


    