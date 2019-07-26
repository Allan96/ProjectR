$('.flutuante').click(function(e) {
    e.preventDefault();
    var isClass = $('.twitter-feed').hasClass('active');
    if (isClass) {
        $('.twitter-feed').removeClass('active');


        $(".twitter-feed").animate({
            left: "-100vw"
        }, 1000, function() {
            // Animation complete.
        });

    } else {
        $('.twitter-feed').addClass('active');

        $(".twitter-feed").animate({
            left: "0"
        }, 1000, function() {
            // Animation complete.
        });
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