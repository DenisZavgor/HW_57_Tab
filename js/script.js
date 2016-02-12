
$(document).ready(function(){
        var light = $('<div></div>')
        .css({
                'border': '2px solid black',
                'borderRadius': '50%',
                'width': '50px',
                'height': '50px',
            });
         
         $('.container').append(light);
         $('.container').append(light.clone());
         $('.container').append(light.clone());
         
     
           $('.container div:eq(0)').click(function(){
            $('.container div:eq(0)').addClass('red');
             $('.container div:eq(1)').addClass('active');
              $('.container div:eq(2)').addClass('active');
               $(this).toggleClass('active');
        }); 
              $('.container div:eq(1)').click(function(){
            $('.container div:eq(1)').addClass('yellow');
             $('.container div:eq(0)').addClass('active');
              $('.container div:eq(2)').addClass('active'); 
                $(this).toggleClass('active');         
         }); 
           
               $('.container div:eq(2)').click(function(){
            $('.container div:eq(2)').addClass('green');
             $('.container div:eq(0)').addClass('active');
              $('.container div:eq(1)').addClass('active');
                $(this).toggleClass('active');
        });
     
     });












