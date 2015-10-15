var checkToken = function ($q, $location) {
    var deferred = $q.defer();
    var token = JSON.parse(localStorage.getItem("token"));


    try {
        //Verifica se o token existe
        if (token == null || token == undefined) {
            throw new Error("Token inexistente!");
        }

        //Verifica se estÃ¡ expirado
        if (token.expiration <= Date.now()) {
            throw new Error("Token expirado!");
        }

        deferred.resolve();

    } catch (e) {
        $location.path("#/login");
        deferred.reject();
    }

    return deferred.promise;
};

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .state('cadastrar', {
      url: '/cadastrar',
      templateUrl: 'templates/cadastrar.html',
      controller: 'cadastrarCtrl',
    })

    .state('novaPerola', {
      url: '/novaperola',
      templateUrl: 'templates/novaPerola.html',
      controller: 'novaPerolaCtrl',
      resolve: {
          checkToken: checkToken
      }
    })

    .state('perolas', {
      url: '/perolas',
      templateUrl: 'templates/perolas.html',
      controller: 'perolasCtrl',
      resolve: {
          checkToken: checkToken
      }
    });

  $urlRouterProvider.otherwise('/perolas');

});
