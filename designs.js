// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$(document).ready(function (){
    $('#submit').click(function makeGrid(){
        let height = $('#inputHeight').val();
        let width = $('#inputWidth').val();
        let table = $('#pixelCanvas');
        

        table.html("");
        for(i = 0; i < height; i++){
            table.append('<tr></tr>');
        }
        for(j = 0; j < width; j++){
            $('tr').append('<td></td>');
        }


        $('td').click(function(){
            let color = $('#colorPicker').val();
            $(this).css('background-color', color);
        });
    });
    $('#reset').click(function(){
        location.reload();
    });
    
});
    
    



