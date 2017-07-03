// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
.state('home', {
  url: '/home',
  templateUrl: 'templates/home.html',
  controller: 'HomeCtrl'
  })
.state('eat1', {
  url: '/eat1',
  templateUrl: 'templates/eat/eat1.html',
  controller: 'eat1Ctrl'
  })
.state('eat2', {
  url: '/eat2',
  templateUrl: 'templates/eat/eat2.html',
  controller: 'eat2Ctrl'
  })
.state('eat3', {
  url: '/eat3',
  templateUrl: 'templates/eat/eat3.html',
  controller: 'eat3Ctrl'
  })
.state('eat4', {
  url: '/eat4',
  templateUrl: 'templates/eat/eat4.html',
  controller: 'eat4Ctrl'
  })
.state('eat5', {
  url: '/eat5',
  templateUrl: 'templates/eat/eat5.html',
  controller: 'eat5Ctrl'
  })
.state('eat6', {
  url: '/eat6',
  templateUrl: 'templates/eat/eat6.html',
  controller: 'eat6Ctrl'
  })
.state('eat7', {
  url: '/eat7',
  templateUrl: 'templates/eat/eat7.html',
  controller: 'eat7Ctrl'
  })
.state('eat8', {
  url: '/eat8',
  templateUrl: 'templates/eat/eat8.html',
  controller: 'eat8Ctrl'
  })
.state('eat9', {
  url: '/eat9',
  templateUrl: 'templates/eat/eat9.html',
  controller: 'eat9Ctrl'
  })
.state('eat10', {
  url: '/eat10',
  templateUrl: 'templates/eat/eat10.html',
  controller: 'eat10Ctrl'
  })
.state('eat11', {
  url: '/eat11',
  templateUrl: 'templates/eat/eat11.html',
  controller: 'eat11Ctrl'
  })
.state('eat12', {
  url: '/eat12',
  templateUrl: 'templates/eat/eat12.html',
  controller: 'eat12Ctrl'
  })
.state('eat13', {
  url: '/eat13',
  templateUrl: 'templates/eat/eat13.html',
  controller: 'eat13Ctrl'
  })
.state('eat14', {
  url: '/eat14',
  templateUrl: 'templates/eat/eat14.html',
  controller: 'eat14Ctrl'
  })
.state('eat15', {
  url: '/eat15',
  templateUrl: 'templates/eat/eat15.html',
  controller: 'eat15Ctrl'
  })
.state('eat16', {
  url: '/eat16',
  templateUrl: 'templates/eat/eat16.html',
  controller: 'eat16Ctrl'
  })
.state('eat17', {
  url: '/eat17',
  templateUrl: 'templates/eat/eat17.html',
  controller: 'eat17Ctrl'
  })
.state('eat18', {
  url: '/eat18',
  templateUrl: 'templates/eat/eat18.html',
  controller: 'eat18Ctrl'
  })
.state('eat19', {
  url: '/eat19',
  templateUrl: 'templates/eat/eat19.html',
  controller: 'eat19Ctrl'
  })
.state('eat20', {
  url: '/eat20',
  templateUrl: 'templates/eat/eat20.html',
  controller: 'eat20Ctrl'
  })
.state('eat21', {
  url: '/eat21',
  templateUrl: 'templates/eat/eat21.html',
  controller: 'eat21Ctrl'
  })
.state('eat22', {
  url: '/eat22',
  templateUrl: 'templates/eat/eat22.html',
  controller: 'eat22Ctrl'
  })
.state('eat23', {
  url: '/eat23',
  templateUrl: 'templates/eat/eat23.html',
  controller: 'eat23Ctrl'
  })
.state('eat24', {
  url: '/eat24',
  templateUrl: 'templates/eat/eat24.html',
  controller: 'eat24Ctrl'
  })
.state('eat25', {
  url: '/eat25',
  templateUrl: 'templates/eat/eat25.html',
  controller: 'eat25Ctrl'
  })
.state('eat26', {
  url: '/eat26',
  templateUrl: 'templates/eat/eat26.html',
  controller: 'eat26Ctrl'
  })
.state('eat27', {
  url: '/eat27',
  templateUrl: 'templates/eat/eat27.html',
  controller: 'eat27Ctrl'
  })
.state('eatResult', {
  url: '/eatResult',
  templateUrl: 'templates/eat/eatResult.html',
  controller: 'eatResultCtrl'
  })
.state('pai1', {
  url: '/pai1',
  templateUrl: 'templates/pai/pai1.html',
  controller: 'pai1Ctrl'
  })
.state('pai2', {
  url: '/pai2',
  templateUrl: 'templates/pai/pai2.html',
  controller: 'pai2Ctrl'
  })
.state('pai3', {
  url: '/pai3',
  templateUrl: 'templates/pai/pai3.html',
  controller: 'pai3Ctrl'
  })
.state('pai4', {
  url: '/pai4',
  templateUrl: 'templates/pai/pai4.html',
  controller: 'pai4Ctrl'
  })
.state('pai5', {
  url: '/pai5',
  templateUrl: 'templates/pai/pai5.html',
  controller: 'pai5Ctrl'
  })
.state('pai6', {
  url: '/pai6',
  templateUrl: 'templates/pai/pai6.html',
  controller: 'pai6Ctrl'
  })
.state('pai7', {
  url: '/pai7',
  templateUrl: 'templates/pai/pai7.html',
  controller: 'pai7Ctrl'
  })
.state('pai8', {
  url: '/pai8',
  templateUrl: 'templates/pai/pai8.html',
  controller: 'pai8Ctrl'
  })
.state('pai9', {
  url: '/pai9',
  templateUrl: 'templates/pai/pai9.html',
  controller: 'pai9Ctrl'
  })
.state('pai10', {
  url: '/pai10',
  templateUrl: 'templates/pai/pai10.html',
  controller: 'pai10Ctrl'
  })
.state('pai11', {
  url: '/pai11',
  templateUrl: 'templates/pai/pai11.html',
  controller: 'pai11Ctrl'
  })
.state('pai12', {
  url: '/pai12',
  templateUrl: 'templates/pai/pai12.html',
  controller: 'pai12Ctrl'
  })
.state('pai13', {
  url: '/pai13',
  templateUrl: 'templates/pai/pai13.html',
  controller: 'pai13Ctrl'
  })
.state('pai14', {
  url: '/pai14',
  templateUrl: 'templates/pai/pai14.html',
  controller: 'pai14Ctrl'
  })
.state('pai15', {
  url: '/pai15',
  templateUrl: 'templates/pai/pai15.html',
  controller: 'pai15Ctrl'
  })
.state('pai16', {
  url: '/pai16',
  templateUrl: 'templates/pai/pai16.html',
  controller: 'pai16Ctrl'
  })
.state('pai17', {
  url: '/pai17',
  templateUrl: 'templates/pai/pai17.html',
  controller: 'pai17Ctrl'
  })
.state('pai18', {
  url: '/pai18',
  templateUrl: 'templates/pai/pai18.html',
  controller: 'pai18Ctrl'
  })
.state('pai19', {
  url: '/pai19',
  templateUrl: 'templates/pai/pai19.html',
  controller: 'pai19Ctrl'
  })
.state('pai20', {
  url: '/pai20',
  templateUrl: 'templates/pai/pai20.html',
  controller: 'pai20Ctrl'
  })
.state('pai21', {
  url: '/pai21',
  templateUrl: 'templates/pai/pai21.html',
  controller: 'pai21Ctrl'
  })
.state('paiResult', {
  url: '/paiResult',
  templateUrl: 'templates/pai/paiResult.html',
  controller: 'paiResultCtrl'
  })

.state('ghq1', {
  url: '/ghq1',
  templateUrl: 'templates/ghq/ghq1.html',
  controller: 'ghq1Ctrl'
  })
.state('ghq2', {
  url: '/ghq2',
  templateUrl: 'templates/ghq/ghq2.html',
  controller: 'ghq2Ctrl'
  })
.state('ghq3', {
  url: '/ghq3',
  templateUrl: 'templates/ghq/ghq3.html',
  controller: 'ghq3Ctrl'
  })
.state('ghq4', {
  url: '/ghq4',
  templateUrl: 'templates/ghq/ghq4.html',
  controller: 'ghq4Ctrl'
  })
.state('ghq5', {
  url: '/ghq5',
  templateUrl: 'templates/ghq/ghq5.html',
  controller: 'ghq5Ctrl'
  })
.state('ghq6', {
  url: '/ghq6',
  templateUrl: 'templates/ghq/ghq6.html',
  controller: 'ghq6Ctrl'
  })
.state('ghq7', {
  url: '/ghq7',
  templateUrl: 'templates/ghq/ghq7.html',
  controller: 'ghq7Ctrl'
  })
.state('ghq8', {
  url: '/ghq8',
  templateUrl: 'templates/ghq/ghq8.html',
  controller: 'ghq8Ctrl'
  })
.state('ghq9', {
  url: '/ghq9',
  templateUrl: 'templates/ghq/ghq9.html',
  controller: 'ghq9Ctrl'
  })
.state('ghq10', {
  url: '/ghq10',
  templateUrl: 'templates/ghq/ghq10.html',
  controller: 'ghq10Ctrl'
  })
.state('ghq11', {
  url: '/ghq11',
  templateUrl: 'templates/ghq/ghq11.html',
  controller: 'ghq11Ctrl'
  })
.state('ghq12', {
  url: '/ghq12',
  templateUrl: 'templates/ghq/ghq12.html',
  controller: 'ghq12Ctrl'
  })
.state('ghq13', {
  url: '/ghq13',
  templateUrl: 'templates/ghq/ghq13.html',
  controller: 'ghq13Ctrl'
  })
.state('ghq14', {
  url: '/ghq14',
  templateUrl: 'templates/ghq/ghq14.html',
  controller: 'ghq14Ctrl'
  })
.state('ghq15', {
  url: '/ghq15',
  templateUrl: 'templates/ghq/ghq15.html',
  controller: 'ghq15Ctrl'
  })
.state('ghq16', {
  url: '/ghq16',
  templateUrl: 'templates/ghq/ghq16.html',
  controller: 'ghq16Ctrl'
  })
.state('ghq17', {
  url: '/ghq17',
  templateUrl: 'templates/ghq/ghq17.html',
  controller: 'ghq17Ctrl'
  })
.state('ghq18', {
  url: '/ghq18',
  templateUrl: 'templates/ghq/ghq18.html',
  controller: 'ghq18Ctrl'
  })
.state('ghq19', {
  url: '/ghq19',
  templateUrl: 'templates/ghq/ghq19.html',
  controller: 'ghq19Ctrl'
  })
.state('ghq20', {
  url: '/ghq20',
  templateUrl: 'templates/ghq/ghq20.html',
  controller: 'ghq20Ctrl'
  })
.state('ghq21', {
  url: '/ghq21',
  templateUrl: 'templates/ghq/ghq21.html',
  controller: 'ghq21Ctrl'
  })
.state('ghqResult', {
  url: '/ghqResult',
  templateUrl: 'templates/ghq/ghqResult.html',
  controller: 'ghqResultCtrl'
  })

.state('1EPDS1', {
  url: '/1EPDS1',
  templateUrl: 'templates/1EPDS/1EPDS1.html',
  controller: '1EPDS1Ctrl'
  })
.state('1EPDS2', {
  url: '/1EPDS2',
  templateUrl: 'templates/1EPDS/1EPDS2.html',
  controller: '1EPDS2Ctrl'
  })
.state('1EPDS3', {
  url: '/1EPDS3',
  templateUrl: 'templates/1EPDS/1EPDS3.html',
  controller: '1EPDS3Ctrl'
  })
.state('1EPDS4', {
  url: '/1EPDS4',
  templateUrl: 'templates/1EPDS/1EPDS4.html',
  controller: '1EPDS4Ctrl'
  })
.state('1EPDS5', {
  url: '/1EPDS5',
  templateUrl: 'templates/1EPDS/1EPDS5.html',
  controller: '1EPDS5Ctrl'
  })
.state('1EPDS6', {
  url: '/1EPDS6',
  templateUrl: 'templates/1EPDS/1EPDS6.html',
  controller: '1EPDS6Ctrl'
  })
.state('1EPDS7', {
  url: '/1EPDS7',
  templateUrl: 'templates/1EPDS/1EPDS7.html',
  controller: '1EPDS7Ctrl'
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
