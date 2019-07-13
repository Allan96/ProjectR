$('.flutuante').click(function(e) {
    e.preventDefault();
    var isClass = $('.twitter-feed').hasClass('d-block');
    if (isClass) {
        $('.twitter-feed').removeClass('d-block');
    } else {
        $('.twitter-feed').addClass('d-block');
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