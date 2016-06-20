  

var teste = {
    $( document).ready( function(){
                  $('h1')
                    .css("color","#f66")
                    .hide()
                    .delay('2000')
                    .fadeIn("slow")
                    
                    .click(function(){
                    $('body').css("background","#f55")
                    $('h1').css("color")
            });
            });
    
                  }
    
}

                  
          teste.init();     