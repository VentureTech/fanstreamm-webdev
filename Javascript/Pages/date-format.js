jQuery(function($){
  var $form = $(".event-listing > form");
  
  function formatDate() {
    $(".event-search > div > div").each(function(idx, el){
      var $con = $(el);
      var $nameCon = $con.find(".name-text");
      var $dateCon = $con.find(".date");
      var $innerDate = $dateCon.find("> .date");
      var $weekCon = $con.find(".week");
      var date = moment($innerDate.text());
      var day = date.format('DD');
      var month = date.format("MMM");
      
      var $newDate = $('<div class="new-date"><div class="wrap"><div class="month">' + month + '</div><div class="day">' + day + '</div></div></div>');
      $newDate.insertBefore($nameCon);
      $newDate.append($weekCon);

      var $wrapInfo = $('<div class="wrap-info"/>');
      $nameCon.appendTo($wrapInfo);
      $dateCon.appendTo($wrapInfo);
      $con.append($wrapInfo);
    });
  }
  
  formatDate();
  $form.miwtFormHelper('add', 'postUpdate', formatDate);
  
});
