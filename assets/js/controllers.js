angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, $location, AuthService) {
    $scope.usuario = {};
    $scope.error = {};

    $scope.login = function () {
        if ($scope.usuario.email === undefined || $scope.usuario.email == "") {
            $scope.error.message = "Email nao informado."
            throw "[THROW] Email nao informado.";
        }

        if ($scope.usuario.password === undefined || $scope.usuario.password == "") {
            $scope.error.message = "Senha nao informada."
            throw "[THROW] Senha nao informada.";
        }

        console.log('[Usuario] '+ JSON.stringify($scope.usuario));
        AuthService.getToken( JSON.stringify($scope.usuario))
             .success(function (data, status) {
                localStorage.setItem('token', JSON.stringify(data));
                $scope.usuario = {};
                $location.path("/perolas");
            }).error(function (data, status) {
                $scope.error = data;
                $scope.usuario = {}
            });


    }
})

.controller('cadastrarCtrl', function($scope) {

})

.controller('novaPerolaCtrl', function($scope) {

})

.controller('perolasCtrl', function($scope) {

})
