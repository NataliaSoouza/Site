$(document).ready(function(){
    $("#cep").change(function(){
      var cep = $('#cep').val();
      if(cep != ''){

        $.ajax({url: "http://api.postmon.com.br/v1/cep/" + cep, success: function(result){
            var controllersElement = document.querySelector('[ng-controller="cadastroController"]');
            var controllerScope = angular.element(controllersElement).scope();
            controllerScope.cadastro.rua = result.logradouro;
            $('#rua').val(result.logradouro);

            controllerScope.cadastro.complemento = result.complemento;
            $('#complemento').val(result.complemento);

            controllerScope.cadastro.bairro = result.bairro;
            $('#bairro').val(result.bairro);

            controllerScope.cadastro.cidade = result.cidade;
            $('#cidade').val(result.cidade);

            controllerScope.cadastro.estado = result.estado_info.nome;
            $('#estado').val(result.estado_info.nome);

        }});
      }
    });

    /*
    var recursoArray = [];
    var recursoObj = {nome:'',descricao: '', quantidade:''}
    $("#add").click(function(){
      recursoObj = {
                  nome:$("#nomeRec").val(),
                  descricao: $("#descricaoRec").val(),
                  quantidade: $("#quantidadeRec").val()
                };
      recursoArray.push(recursoObj);
      $("#nomeRec").val("");
      $("#descricaoRec").val("");
      $("#quantidadeRec").val("");

      $("#recursos").val(recursoArray);
      alert($("#recursos").val());
    });*/
});
