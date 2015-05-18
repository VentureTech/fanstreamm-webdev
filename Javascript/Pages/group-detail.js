jQuery(function($) {
    var $invitesCon = $(".genform.invites .invitee-list .invitees");

    if ($invitesCon.html().length > 0) {
        $("#body").addClass("track");
    }
});