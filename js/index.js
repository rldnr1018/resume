

$('#nav .depth1').on('click', function(){
    // e.preventDefault()
    if($(this).hasClass('on')){
        $(this).removeClass('on')
    }else{
        $(this).addClass('on')   
    }
    
})

$('#sect1 .screen .button').on('click' ,function(){
    // $(this).prev().children().addClass('on')
    if($(this).prev().children().hasClass('on')){
        $(this).prev().children().removeClass('on')
    }else{
        $(this).prev().children().addClass('on')
    }
})





$('#sect2 .screen2 .button').on('click' ,function(){
    
    if($(this).prev().children().hasClass('on')){
        $(this).prev().children().removeClass('on')
        $('#sect2 .screen2 .inner > div').removeClass('on')
       
    }else{
        $(this).prev().children().addClass('on')
        if( $('#sect2 .screen2 .inner > div').hasClass('on')){
            $('#sect2 .screen2 .inner > div')
        count(80 , '.html')
        count(80 , '.css')
        count(60 , '.script')
        count(60 , '.jquery')
        count(50 , '.react')
        }
    }
})

function count(jumsu , cname){
    let num = 0;
    var stop = setInterval(function(){
        num++;
        if(num<=jumsu){
            $(cname).find('.myscore').text(num + '%')
        }else{
            clearInterval(stop)
        }
    },25)
}

$('#header , #wrap , #wrap2 , #wrap3 , #wrap4').on('mousewheel', function(event, delta){
    event.preventDefault()
    if (delta>0) { 
        $('html, body').stop().animate({
            scrollTop: $(this).prev().offset().top
        }, 500)
    } else if (delta<0) { 
        $('html, body').stop().animate({
            scrollTop: $(this).next().offset().top
        }, 500)
    }
})


$('a').click(function(){
    $('html, body').stop().animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
    })


    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('.gotop').fadeIn();
            } else {
                $('.gotop').fadeOut();
            }
        })
         
        $(".gotop").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 500);
            return false;
        })
    })