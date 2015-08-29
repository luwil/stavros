'use strict';

angular.module('stavrosApp')
  .controller('StavrosCtrl', function ($scope) {

    //*** Initiera variabler, lokala och på $scope ***//
    var LS_KEY_ACTIVITIES = 'STAVROS_ACTIVITY_LIST';
    $scope.activities = initActivities();
    var levels = [
      {
        name: 'Level1',
        limit: 0
      },
      {
        name: 'Level2',
        limit: 3
      },
      {
        name: 'Level3',
        limit: 6
      }
    ];

    //*** Metoder på $scope ***//
    $scope.getScore = function () {
      var score = 0;
      $scope.activities.forEach(function (activity) {
        if (activity.selected) {
          score += activity.points;
        }
      });
      return score;
    };


    $scope.getLevel = function () {
      var score = $scope.getScore();
      var currentLevel = {};
      levels.forEach(function (level) {
        if (level.limit <= score && level.limit > currentLevel.limit) {
          currentLevel = level;
        }
      });
      return currentLevel;
    };

    $scope.saveActivities = function () {
      console.log('Save to LS');
      window.localStorage.put(LS_KEY_ACTIVITIES, $scope.activities);
    };

    //*** Privata metoder för controllern ***//
    function initActivities() {
      //var savedActivities = window.localStorage.get(LS_KEY_ACTIVITIES);
      //if (savedActivities) {
      //  console.log('Loaded saved activities from LocalStorage:', savedActivities);
      //  return savedActivities;
      //} else {
        console.log('Create new list of activities.');
        return [
          {
            name: 'Name1',
            points: 1,
            selected: false
          },
          {
            name: 'Name2',
            points: 2,
            selected: false
          },
          {
            name: 'Name3',
            points: 3,
            selected: false
          }
        ]
      }
    //}
  });

angular.module('stavrosApp')
  .directive();

