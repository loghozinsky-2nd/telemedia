var taskApp = angular.module('taskApp', [])

function taskController($scope) {
  $scope.items = [
    'Some Item', 'Another Item'
  ];
}

taskApp.controller('taskController', taskController);