$('#input').on('click', function(e){
    let namep =$('#item-s').val();
    let numberp =$('#item-n').val();
    let count =$('#myTable tr').length; 
    $('#myTable tbody').append('<tr class="child"><td>'+count+'</td><td>'+namep+'</td><td>'+numberp+'</td></tr>');

});