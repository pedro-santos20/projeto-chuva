$(document).ready(function() {


    $('#formulario').hide();

    $("#btnCriarTopico").click(function() {
        $('#formulario').show();
        $('#criarTopico').hide();
    });

    $("#btnEnviar").click(function() {
        $('#formulario').hide();
        $('#criarTopico').show();
        $('#assunto').val("");
        $('#conteudo').val("");

    });
});