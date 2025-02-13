$(document).ready(function(){
    $('.ico-bars').click(function(){
        $('.ico-bars').toggleClass('fa-xmark');
        $('.nav-list').slideToggle();
    });
    $(window).resize(function(){
        if($(window).width() <= 991){
            $('.nav-list').hide();
        }
        if($(window).width() > 991){
            $('.nav-list').show();
        }
    });
});