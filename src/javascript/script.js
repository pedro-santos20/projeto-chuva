$(document).ready(function () {
  $("#formulario").hide();
  $("#agradecimento").hide();

  $("#btnCriarTopico").click(function () {
    $("#formulario").show();
    $("#criarTopico").hide();
  });

  $("#btnEnviar").click(function () {
    $("#formulario").hide();
    $("#agradecimento").show();
    $("#assunto").val("");
    $("#conteudo").val("");
  });

  $("#btnNovoTopico").click(function(){
    $("#formulario").show()
    $("#agradecimento").hide()
  })
});
