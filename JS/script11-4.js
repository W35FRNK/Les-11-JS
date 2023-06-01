
$(document).ready(function() {
$("#tekstveld").on('click', function () {
  $(this).select();
});

$(document).on('keypress',function(e) {
  if(e.which == 13) {
      alert('U hebt op enter gedrukt, we gaan het formulier verzenden!');
  }
});
});