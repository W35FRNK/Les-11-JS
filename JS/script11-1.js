


$(document).ready(function () {
  // Tooltip tonen bij hover
  $('img').hover(
      // functie handlerIn
      function () {
          $('#tooltip').css('display', 'block');
      },
      // functie handlerOut
      function () {
          $('#Tooltip').css('display', 'none');
      }
    );// einde .hover()
  });
    