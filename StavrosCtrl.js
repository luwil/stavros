'use strict';

angular.module('stavrosApp')
  .controller('StavrosCtrl', function ($scope) {

    //*** Initiera variabler, lokala och på $scope ***//
    var LS_KEY_ACTIVITIES = 'STAVROS_ACTIVITY_LIST';
    var loggedInUser, originalActivities = getOriginalActivities();
    $scope.activities = initActivities();

    //*** Metoder på $scope ***//
    $scope.getScore = function () {
      var score = 0;
      $scope.activities.forEach(function (activity) {
        if (activity.selected) {
          score += activity.points;//lägg till fel när poängen är 1
        }
      });
      return score;
    };

    $scope.toggleSelected = function (activity) {
      activity.selected = !activity.selected;
      updateLocalStorage();
    };

    $scope.clearSelected = function () {
      $scope.activities.forEach(function (activity) {
        activity.selected = false;
      });
      updateLocalStorage();
    };

    $scope.login = function (userName) {
      loggedInUser = userName;
    };

    $scope.logout = function () {
      loggedInUser = undefined;
    };

    $scope.isLoggedIn = function () {
      return loggedInUser !== undefined;
    };

    $scope.getLevel = function () {
      var score = $scope.getScore();
      if (score >= 35) {
        return {
          name: 'Stavros the greek lavva',
          number: 8,
          imagePath: 'img/stavros1.jpg'
        }
      } else if (score >= 30) {
        return {
          name: 'Baywatch Beauty',
          number: 7,
          imagePath: 'img/baywatch.jpg'
        }
      } else if (score >= 25) {
        return {
          name: 'Ouzo Specialist',
          number: 6,
          imagePath: 'img/zorba2.jpg'
        }
      } else if (score >= 20) {
        return {
          name: 'Beachbum',
          number: 5,
          imagePath: 'img/beach-bum.jpg'
        }
      } else if (score >= 15) {
        return {
          name: 'Bob the Backpacker',
          number: 4,
          imagePath: 'img/backpacker.jpg'
        }
      } else if (score >= 10) {
        return {
          name: 'Fan vad solen tar här',
          number: 3,
          imagePath: 'img/fanvasolentar.jpg'
        }
      } else if (score >= 5) {
        return {
          name: 'SunTrip Champ',
          number: 2,
          imagePath: 'img/champ.jpg'
        }
      } else {
        return {
          name: loggedInUser ? loggedInUser + ' Banan' : 'Sven Banan',
          number: 1,
          imagePath: 'img/svennebanan.jpeg'
        }
      }
    };

    //*** Privata metoder för controllern ***//
    function initActivities() {
      var savedActivities = angular.fromJson(localStorage.getItem(LS_KEY_ACTIVITIES));
      if (savedActivities) {
        console.log('Loaded saved activities from LocalStorage:', savedActivities);
        return savedActivities;
      } else {
        console.log('Create new list of activities.');
        return originalActivities;
      }
    }

    function updateLocalStorage() {
      localStorage.setItem(LS_KEY_ACTIVITIES, angular.toJson($scope.activities));
    }

    function getOriginalActivities() {
      return [
        {
          name: 'Ät vromiko (den smutsige)',
          points: 2,
          selected: false,
          imagePath: 'img/vromiko2.jpg'
        },
        {
          name: 'Ät patsas',
          points: 5,
          selected: false,
          imagePath: 'img/patsas-greek-soup.jpg'
        },
        {
          name: 'Dansa zorba',
          points: 5,
          selected: false,
          imagePath: 'img/zorba1.jpg'
        },
        {
          name: 'Dansa zorba med genuina greker',
          points: 8,
          selected: false,
          imagePath: 'img/zorba1.jpg'
        },
        {
          name: 'Bada i speedos',
          points: 3,
          selected: false,
          imagePath: 'img/Speedo1.jpg'
        },
        {
          name: 'Ät feta',
          points: 1,
          selected: false,
          imagePath: 'img/feta.jpg'
        },
        {
          name: 'Ät tzatsiki',
          points: 1,
          selected: false,
          imagePath: 'img/tzatsiki.jpg'
        },
        {
          name: 'Drick ouzo',
          points: 1,
          selected: false,
          imagePath: 'img/ouzodrink.jpg'
        },
        {
          name: 'Drick retsina',
          points: 1,
          selected: false,
          imagePath: 'img/retsina.jpg'
        },
        {
          name: 'Drick Metaxa 9*',
          points: 1,
          selected: false,
          imagePath: 'img/unknown.png'
        },
        {
          name: 'Drick Metaxa 1-3*',
          points: 3,
          selected: false,
          imagePath: 'img/metaxa1.jpg'
        },
        {
          name: 'Bomben i hotelpoolen',
          points: 3,
          selected: false,
          imagePath: 'img/bomben.jpg'
        },
        {
          name: 'Vaska en ouzu',
          points: -1,
          selected: false,
          imagePath: 'img/vaskaouzo.jpg'
        },
        {
          name: 'Testa akustiken i en amfibieteater',
          points: 3,
          selected: false,
          imagePath: 'img/akustik.jpg'
        },
        {
          name: 'Gå över mållinjen på Athens marathon',
          points: 3,
          selected: false,
          imagePath: 'img/goal.jpg'
        },
        {
          name: 'Ät gyros',
          points: 1,
          selected: false,
          imagePath: 'img/gyros.jpg'
        },
        {
          name: 'Spela strandtennis nära folk som solar',
          points: 2,
          selected: false,
          imagePath: 'img/Beach-Tennis.jpg'
        },
        {
          name: 'Rök inomhus',
          points: 1,
          selected: false,
          imagePath: 'img/raucheninomhus.jpg'
        },
        {
          name: 'Ge grek matlagningskomplimang',
          points: 1,
          selected: false,
          imagePath: 'img/matkomplimang.jpg'
        },
        {
          name: 'Gå på skilaviko-nattklubb',
          points: 8,
          selected: false,
          imagePath: 'img/skilaviko.jpg'
        },
        {
          name: 'Använd bravo 10 ggr i dagligt tal under en timme',
          points: 3,
          selected: false,
          imagePath: 'img/bravo.jpg'
        },
        {
          name: 'Skaffa/trimma till grekfrillan',
          points: 10,
          selected: false,
          imagePath: 'img/frilla.jpg'
        },
        {
          name: 'Spela volleyball',
          points: 4,
          selected: false,
          imagePath: 'img/volleyball.jpg'
        },
        {
          name: 'Åk jetski',
          points: 3,
          selected: false,
          imagePath: 'img/jetski.gif'
        },
        {
          name: 'Bränn dig i solen',
          points: 1,
          selected: false,
          imagePath: 'img/sunburn.png'
        },
        {
          name: 'Hyr moped',
          points: 4,
          selected: false,
          imagePath: 'img/Rossa.png'
        },
        {
          name: 'Få en grek att sjunga en grekisk visa',
          points: 5,
          selected: false,
          imagePath: 'img/greek-song.png'
        },
        {
          name: 'Ät köttbullar på restaurang',
          points: -5,
          selected: false,
          imagePath: 'img/kottbullar.jpg'
        },
        {
          name: 'Bär accessoar i guld',
          points: 2,
          selected: false,
          imagePath: 'img/gold.png'
        },
        {
          name: 'Uppknäppt skjorta 2 knappar',
          points: 2,
          selected: false,
          imagePath: 'img/2button.jpg'
        },
        {
          name: 'Uppknäppt skjorta 3 knappar',
          points: 5,
          selected: false,
          imagePath: 'img/3button.jpg'
        }
      ];
    }
  }
);
