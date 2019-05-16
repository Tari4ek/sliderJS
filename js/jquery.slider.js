(function ($) {
    $.fn.slider = function (options) {
        options = $.extend({
            slidesToShow: 1,
            autoplay: false,
            delayTime: 5,
            speedAutoSlide:1000
        }, options);


        return this.each(function () {
            $(".next").click(function () {
                var currentImage = $(".img.curry");
                var currentImageIndex = $(".img.curry").index();
                var nextImageIndex = currentImageIndex + options.slidesToShow;
                var nextImage = $(".img").eq(nextImageIndex);
                currentImage.fadeOut(1000);
                currentImage.removeClass("curry");

                if (nextImageIndex == ($(".img:last").index() + 1)) {
                    $('.img').eq(0).fadeIn(1000);
                    $('.img').eq(0).addClass('curry');
                } else {
                    nextImage.fadeIn(1000);
                    nextImage.addClass('curry');
                }
            });

            $(".prev").click(function () {
                var currentImage = $(".img.curry");
                var currentImageIndex = $(".img.curry").index();
                var prevImageIndex = currentImageIndex - 1;
                var prevImage = $(".img").eq(prevImageIndex);

                currentImage.fadeOut(1000);
                currentImage.removeClass('curry');
                prevImage.fadeIn(1000);
                prevImage.addClass('curry');
            });
            if (options.autoplay) {
                function aPlay() {
                    $(".next").click();
                    delId = setTimeout(aPlay, options.delayTime * options.speedAutoSlide);
                }
                var delId = setTimeout(aPlay,options.delayTime * options.speedAutoSlide);
                el.hover(
                    function() {
                        clearTimeout(delId);
                    },
                    function() {
                        delId = setTimeout(aPlay,options.delayTime * 1000);
                    }
                );
            }
        });
    };
})(jQuery);