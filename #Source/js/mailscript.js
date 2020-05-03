$(document).ready(function() {
  //E-mail Ajax Send
  $("form").submit(function() {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Grazie! Rispondero' piu' presto possibile.");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 500);
    });
    return false;
  });
});
