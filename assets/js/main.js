$(function() {

    $('#form').bind('submit', function(event) {
        event.preventDefault();

        var text = $(this).serialize();
        console.log(text);

        /*
        1 - Um obj literal {}
        2 - O tipo da requisição GET, POST etc...
        3 - URL, qual end o AJAX irá requisitar
        4 - Processar os dados de recebimento e envio
        5 - Criar uma função que irá retornar os dados
        6 - Criar uma função de erro (opcional)
        */
        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: text,
            success: function(result) {
                $('.div').html("Resultado: "+result);
            },
            error: function() {
                console.log("Houve um erro!")
            }
        });
    });

});