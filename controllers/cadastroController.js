(function(){
  'use strict';

  angular
  .module('app')
  .controller('cadastroController', cadastroController);

  cadastroController.$inject = ['cadastroApi','$scope'];
  var recursoArray = [];
  var servicoArray = [];

  function cadastroController(cadastroApi, $scope){

    $scope.adicionaRecurso = function(recurso){
      var rec = {tipo: '',quantidade: '', detalhe: '', descricao: '', arquivo: ''}
      rec = {tipo: recurso.tipo,quantidade: recurso.quantidade, detalhe: recurso.detalhe, descricao: recurso.descricao, arquivo: recurso.arquivo}
      recursoArray.push(rec);
      console.log(recursoArray);
    }

    $scope.adicionaServicos = function(servico){
      s = {nome: servico.nome,descricao: servico.descricao}
      servicoArray.push(s);
    }

    $scope.efetuarCadastro = function(cadastro){
      if(typeof cadastro == 'undefined'){
        alert('Preencher campos obrigatórios!!!');
      }
      else if(cadastroForm.tipo == 'undefined' || cadastroForm.tipo == ''
         && cadastroForm.cnpj == 'undefined'|| cadastroForm.cnpj == ''
         && cadastroForm.cep == 'undefined' || cadastroForm.cep == ''
         && cadastroForm.cidade == 'undefined' || cadastroForm.cidade == ''
         && cadastroForm.rua == 'undefined'|| cadastroForm.rua == ''
         && cadastroForm.numero == 'undefined'|| cadastroForm.numero == ''
         && cadastroForm.estado == 'undefined'|| cadastroForm.estado == ''
         && cadastroForm.telefone1 == 'undefined'|| cadastroForm.telefone1 == ''
         && cadastroForm.email == 'undefined'|| cadastroForm.email == ''
         && cadastroForm.senha1 == 'undefined'|| cadastroForm.senha1 == ''
         && cadastroForm.senha2 == 'undefined'|| cadastroForm.senha2 == ''
         && cadastroForm.login == 'undefined'|| cadastroForm.login == ''){
             alert('Preencher campos obrigatórios!!!');
       }
       else if(cadastroForm.senha1 != cadastroForm.senha2){
         alert('senhas não conferem');
       }
      else
      {
        cadastro.recursos = recursoArray;
        cadastro.nomePermissao = "COMERCIAL";
        cadastro.tipoPermissao = "C";

        console.log(cadastro);
        cadastroApi.cadastro(cadastro).success(function(data){
          if(data == 'Instituicao ja existe'){
            alert('login existente!!');
          }

        //redirecionar para o módulo
        window.location = "file:///C:/Users/USER/Desktop/ALLDISPOR-v03_1/AllDispor-final/public/modulo_apresentacao/login.html";

        localStorage.setItem('token', data);
        });
      }
    }
  }
})()
