jQuery(function($) {
    var $con = $(".ticket-officer-info");

    $con.each(function(idx, evt) {
        var $phone = $con.find(".phone");
        var $email = $con.find(".email");
        var phoneVal = $phone.find("span").text();
        var phoneValStripped = phoneVal.replace("-", "");
        var emailVal = $email.find("span").text();
        var $phoneLink = $('<a href="tel:' + phoneValStripped + '">' + phoneVal + '</a>');
        var $emailLink = $('<a href="mailto:' + emailVal + '">' + emailVal + '</a>');


        $phone.html($phoneLink);
        $email.html($emailLink);
    });
});