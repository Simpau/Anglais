$(document).ready(function(){

  $('#myTabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $("#js-contact-submit").on('submit', function(event){
    event.preventDefault();
    var name = $("#js-contact-name").val();
    var mail = $("#js-contact-mail").val();
    var msg = $("#js-contact-msg").val();

    $.ajax({
      method: "POST",
      url: "https://getsimpleform.com/messages?form_api_token=c1a8a362fa21fba1701a1f0b57914611",
      data: { name: name, email: mail, message: msg}
    })
    .done(function( mess ) {
      $("#js-contact-msg").val('');
      $("#js-contact-name").val('');
      $("#js-contact-mail").val('');
      alert( "Message Sent !\nThank you !" );
    });
    return false;
  });



});




