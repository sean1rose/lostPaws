'use strict';

/**
 * @ngdoc function
 * @name lostPawsApp.controller:MainListCtrl
 * @description
 * # MainListCtrl
 * Controller of the lostPawsApp
 */
angular.module('lostPawsApp')
  .controller('MainListCtrl', function ($scope) {

    $scope.dogs = [
      'Lassie',
      'Beethoven',
      'DMX',
      'Bonus'
    ];
  });
  
