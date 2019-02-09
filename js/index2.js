var count = 0;
$(document).ready(function(){
    $('button').click(function(){
        if(count == 0){
        $('.robo-achievements').css("display", "block");
        count= 1;
        }else{
        $('.robo-achievements').css("display", "none");
        count= 0;
        }
    });
});