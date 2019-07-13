$('.flutuante').click(function(e) {
    e.preventDefault();
    var isClass = $('.twitter-feed').hasClass('active');
    if (isClass) {
        $('.twitter-feed').removeClass('active')
        $('.twitter-feed').fadeOut();
    } else {
        $('.twitter-feed').addClass('active');
        $('.twitter-feed').fadeIn();
    }

});

$('.borda-dentro').click(function(e) {
    e.preventDefault();
    var isPP = $('.buttonPP').hasClass('pause');
    if (isPP) {
        $('.buttonPP').removeClass('pause');
        $('.buttonPP').addClass('play');
    } else if (!isPP) {
        $('.buttonPP').removeClass('play');
        $('.buttonPP').addClass('pause');
    }
});