$(document).ready(function() {
            $(document).on('keypress',function(e) {
                if(e.which == 13) {
                  var content = $('#addList').val();
                  var inputVal = $("input").val();
                  var check = $.isNumeric(inputVal);
                  var maakLi = 
                    '<li>' + content + '</li>';
                  
                if (check) {                    
                $('.list').append(maakLi);
                }
                else {
                  alert('Voer een getal in!')
                }
            }
              })
            
        })