// Copyright (c) 2014 Linly Matsumura.

/**
 * @fileoverview 画像を内接／外接リサイズして正方形に収めるjQueryプラグイン
 * @version 1.0
 * @requires jQuery
 * @license Code licensed under MIT:https://github.com/linlymatsumura/jQuery.within/blob/master/LICENSE.md
 * @author LNLY(@linlymatsumura)
 */

(function($) {
    $.fn.within = function(ops){
        var defaults = {width : 100, type : 'contain', bgColor : '#333'}, pref;

        if(typeof arguments[0] === 'object'){
            pref = $.extend(defaults, ops);
        }
        else{
            pref = {
                width : arguments[0] || defaults.width,
                type : arguments[1] || defaults.type,
                bgColor : arguments[2] || defaults.bgColor
            };
        }

        $(this).each(function(){
            var $this = $(this), src = $this.attr('src');
            $this
                .after('<span></span>')
                .next()
                .attr({
                    'class' : $this.attr('class'),
                    'id' : $this.attr('id')
                })
                .css({
                    'display' : 'inline-block',
                    'width' : pref.width + 'px',
                    'height' : (pref.height || pref.width) + 'px',
                    'background-color' : pref.bgColor,
                    'background-position' : 'center center',
                    'background-repeat' : 'no-repeat',
                    'background-size' : pref.type,
                    'background-image' : 'url(' + src + ')',
                    'vertical-align' : 'middle'
                });

            $this.remove();
        });

        return $(this);
    };

    $('[data-within]').each(function(){
        var ops = $(this).attr('data-within').split(',');
        
        if (ops[0] === '') {
            ops = undefined;
        }

        $(this).within.apply(this,ops);
    });
})(jQuery);