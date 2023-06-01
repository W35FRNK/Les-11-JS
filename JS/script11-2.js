$(document).ready(function () {
  $('#divMouseover').on('mousemove', function (e) {
    const posX = e.pageX;
    const posY = e.pageY;
    $('#divResult').html('positie X:' + posX + '<br />positie Y: ' + posY);
  });

  $('#divMouseover').on('mouseout', function (e) {
    const posX = e.pageX;
    const posY = e.pageY;
    $('#divResult').html('positie X:' + '0' + '<br />positie Y: ' + '0');
  });
});