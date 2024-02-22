jQuery(document).ready(function($) {
    
    $('.hamburger').click(function() {
        // Добавляем класс "active" к элементу с id "mobile-menu"
        $('#mobile-menu').addClass('active');
        $('.bg').fadeIn(500)
    });

    $('.close, .bg').click(function() {
        $('#mobile-menu').removeClass('active')
        $('.bg').fadeOut(500)
    })

})