jQuery(function($) {
    var $con = $(".group-owner-view-con");

    $con.each(function(idx, evt) {
        var $email = $con.find(".email > .val");
        var emailVal = $email.text();
        var $emailLink = $('<a href="mailto:' + emailVal + '">' + emailVal + '</a>');

        $email.html($emailLink);
    });
});