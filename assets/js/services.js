angular.module('app.services', [])

.service('AuthService', ['$http', function($http){
    var urlBase = 'https://perolas.herokuapp.com/api/auth';

    this.getToken = function(usuario) {
        return $http.post(urlBase, JSON.stringify(usuario));
    }
}])

.service('UsuarioService', ['$http', function($http){
    var urlBase = 'https://perolas.herokuapp.com/api/users';
    var token = JSON.parse($window.localStorage.getItem("token"));
     this.criar = function(usuario) {
        return $http({
            method: 'POST',
            url: urlBase,
            data: usuario,
            headers: {
                'Authorization': token
            }

        });
    }
}])

.service('PerolaService', ['$http', function($http){
    var urlBase = 'https://perolas.herokuapp.com/api/pearls';
}]);

