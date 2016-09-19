(function(){
  'use strict';
  angular
  .module("app")

  .factory("cadastroUserApi", cadastroUserApi);

  cadastroUserApi.$inject = ['$http']

  function cadastroUserApi($http){
      var _cadastro = function(cadastro){
        return $http.post("http://localhost:3000/usuario/cadastrar", cadastro)
      };

      return {
        cadastro:_cadastro
      }
  }
})()
