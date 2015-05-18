jQuery(function($) {
    var $con = $(".public-event-view");

    $con.each(function(idx, evt) {
        var $loc = $con.find(".location > .val");
        var locVal = $loc.text();
        console.log(locVal);
        var $mapLink = $('<a target="_blank" href="http://maps.google.com/?q=' + $.trim(locVal) + '">' + locVal + '</a>');

        $loc.html($mapLink);
    });
});