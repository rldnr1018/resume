


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


