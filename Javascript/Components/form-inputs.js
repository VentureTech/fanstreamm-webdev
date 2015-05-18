/**
 * Created by VIPA WebDev on 2/3/2015.
 */
/*************
 * Puts the form labels into the input elements as input hints and displays
 * a thank you message on submit.
 *
 * @Require jquery
 * @Author Scott Benes (sbenes), Becky Aiken (baiken)
 *************/
jQuery(function($){
    var SHOW_CLASS = "show";

    var updateInputs = function(con){
        var $con = $(con);
        $.support.placeholder = (function(){
            var i = document.createElement('input');
            return "placeholder" in i;
        })();

        $('.label, label', con).each(function(idx, lab){
            var $l = $(lab);
            var $input = $l.siblings("input[type=text], input[type=email], textarea");

            if (Modernizr.input.placeholder) {
                $input.attr("placeholder", $l.text());
                $l.addClass("hide");
            }

        });
        $con.addClass(SHOW_CLASS);
    };



    $('.search-bar').each(function(){
        var $form = $(this);
        //run the form update at page load
        updateInputs($form);
    });


});