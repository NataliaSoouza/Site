(function(){
  'use strict';
  angular
  .module("app")

  .factory("cadastroApi", cadastroApi);

  cadastroApi.$inject = ['$http']

  function cadastroApi($http){
      var _cadastro = function(cadastro){
        return $http.post("http://localhost:3000/instituicao/cadastrar", cadastro)
      };

      return {
        cadastro:_cadastro
      }
  }
})()
