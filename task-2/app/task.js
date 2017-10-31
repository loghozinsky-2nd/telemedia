var taskApp = angular.module('taskApp', [])

function taskController($scope) {
  $scope.items = [
    'Some Item', 'Another Item'
  ];
  $scope.addNewItem = function(){
    if ($scope.tempInput){
      $scope.items.push($scope.tempInput);
      $scope.tempInput = "";
    } else {
      console.log('input is empty');
    }
  };
  $scope.editItem = function(item){
    var index = $scope.items.indexOf(item);
    $scope.showEdit = true;

    $scope.saveEdit = function(item){
      $scope.items.splice(index, 1, $scope.editInput);
      $scope.showEdit = false;
      $scope.editInput = "";
    };
  };
  
  $scope.deleteItem = function(item){
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };
}

taskApp.controller('taskController', taskController);