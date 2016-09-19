
(function(){
  'use strict';
  angular
  .module("app")

  .factory("loginApi", loginApi);

  loginApi.$inject = ['$http']

  function loginApi($http){
      var _login = function(acesso){
        return $http.post("http://localhost:3000/instituicao/login", acesso)
      };

      return {
        login:_login
      }
  }
})()
