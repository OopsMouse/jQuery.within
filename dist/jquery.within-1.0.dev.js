(function($) {
    var resizeRectImg = function() {
        $('.data-img-rectangle').remove();

        $('.img-rectangle').each(function() {

            var $this = $(this),
                src   = $this.attr('src')
                width = $this.width();

            $this
            .after('<span></span>')
            .next()
            .attr({
                'class' : $this.attr('class') + ' ' + 'data-img-rectangle',
                'id' : $this.attr('id')
            })
            .css({
                'display' : 'inline-block',
                'width' : width + 'px',
                'height' : width + 'px',
                'background-position' : 'center center',
                'background-repeat' : 'no-repeat',
                'background-size' : 'cover',
                'background-image' : 'url(' + src + ')',
                'vertical-align' : 'middle'
            });

            $this.css('display', 'none');
        });
    }

    resizeRectImg();

    $(window).resize(function() {
        resizeRectImg();
    });

})(jQuery);
