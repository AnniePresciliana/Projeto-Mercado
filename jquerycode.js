$(document).ready(function() {
        var max_fields          = 100;  
        var x = 1;
        $('#add_field').click (function(e) {
                e.preventDefault();     
                if (x < max_fields) {
                    
                     $('#listas').append('\
                      <tr class="remove' + x + '"> <td><input type="text" name="nome[]" id="nome"></td>\

             <td><input type="text" name="tel[]" id="tel" "></td>\
         <td><input type="text" name="dta[]" id="dta" placeholder="yyyy-mm-dd"></td>\
           <td><input type="text" name="cod[]" id="cod" "></td>\
           <td><input type="text" name="cnpj[]" id="cnpj"></td>\


                    <td><input type="text" name="cod[]"id="cod"></td>\
                                        <td>\


                                        </td>\
         <td><a href="#" class="remove_campo" id="remove' + x +'">remover</a></td>\
                        ');
                        x++;
                }
        });
 
        $('#listas').on("click",".remove_campo",function(e) {
                e.preventDefault();
                var tr = $(this).attr('id');
                //alert ('remove: ' + tr);
                $('#listas tr.'+ tr).remove();
                x--;
        });
 
});