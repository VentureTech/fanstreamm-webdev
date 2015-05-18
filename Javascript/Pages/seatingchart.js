jQuery(function($) {
    var OPEN_CLASS = "open";
    var BREAKPOINT = 768;

    $(".chart-con").each(function(idx,el) {
        var $con = $(el);
        var $trigger = $con.find(".chart-label");

        $trigger.on("click", function (evt) {
            $con.toggleClass(OPEN_CLASS);
        });
    });

    $(".seating-type-view").each(function(idx,el) {
        var $con = $(el);
        var $trigger = $con.find("a.trigger");

        $trigger.on("click", function (evt) {
            $con.toggleClass(OPEN_CLASS);
        });
    });

    var $seatingChart1 = $(".seating-chart");
    var $seatingChart2 = $(".seating-type-view");


    $seatingChart1.on("click", function(evt) {
        $.fancybox($seatingChart1.find(".miwt-collapsable-content img").clone(), {
            autoWidth: true
        });
    });
    $seatingChart2.on("click", function(evt) {
        $.fancybox($seatingChart2.find(".miwt-collapsable-content img").clone(), {
            autoWidth: true
        });
    });

});