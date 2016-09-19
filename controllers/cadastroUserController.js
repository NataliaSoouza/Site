(function(){
  'use strict';

  angular
  .module('app')
  .controller('cadastroUserController', cadastroUserController);

  cadastroUserController.$inject = ['cadastroApi','$scope'];
  //var recursoArray = [];
  //var servicoArray = [];

  function cadastroUserController(cadastroApi, $scope){

    $scope.efetuarCadastro = function(cadastro){
      if(typeof cadastro == 'undefined'){
        alert('Preencher campos obrigatórios!!!');
      }
      else if(
            cadastroForm.email == 'undefined'|| cadastroForm.email == ''
         && cadastroForm.senha == 'undefined'|| cadastroForm.senha == ''
         && cadastroForm.confirmarsenha == 'undefined'|| cadastroForm.confirmarsenha == ''
         && cadastroForm.login == 'undefined'|| cadastroForm.login == ''){
             alert('Preencher campos obrigatórios!!!');
       }
       else if(cadastroForm.senha != cadastroForm.confirmarsenha){
         alert('Senhas não conferem');
       }
      else
      {
        /*cadastro.recursos = recursoArray;*/
       // cadastro.nomePermissao = "COMERCIAL";
        //cadastro.tipoPermissao = "C";

        console.log(cadastro);
        cadastroApi.cadastro(cadastro).success(function(data){
          if(data == 'Usuario ja existe'){
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
