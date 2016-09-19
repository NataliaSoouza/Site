(function(){
  'use strict';

  angular
  .module('app')
  .controller('loginController', loginController);

  loginController.$inject = ['loginApi', '$scope'];

  function loginController(loginApi, $scope){
    $scope.login = function(acesso){
      debugger
      loginApi.login(acesso).success(function(data){
        alert(data);
        if(data != null){
            localStorage.setItem('token', data.acesso.token);
            if(data.acesso.login == "admin")
            //if(data.permissao.tipoPermissao == "ADM")
            {
              alert("Bem vindo Sr." + data.acesso.login +", seu token: " + data.acesso.token);
              //redirecionar para o módulo
              window.location = "file:///C:/Users/USER/Desktop/ALLDISPOR-v03_1/AllDispor-final/public/modulo_adm/index.html#/dashboard";
            }
            else
            {
              alert("Bem vindo Sr." + data.acesso.login +", seu token: " + data.acesso.token);
              //redirecionar para o módulo
              window.location = "file:///C:/Users/USER/Desktop/ALLDISPOR-v03_1/AllDispor-final/public/modulo_comercial/index.html#/dashboard";
            }
        }
      });
    }

    $scope.logout = function(){
      localStorage.removeItem('token');
    }
  }
})()
