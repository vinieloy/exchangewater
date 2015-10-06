angular.module('starter.controllers', [])

.controller('DashboardCtrl', function($scope) {
  
})

.controller('TrocadorCtrl', function($scope, Trocadores) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.trocadores = Trocadores.all();
  $scope.remove = function(trocador) {
    Trocadores.remove(trocador);
  };
})

.controller('DetalhesTrocadorCtrl', function($scope, $stateParams, Trocadores) {
  $scope.trocador = Trocadores.get($stateParams.trocadorId);
})

.controller('ConfiguracaoCtrl', function($scope) {
  $scope.configs = {
    ReceberNotificacao: true
  };
});
