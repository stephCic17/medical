angular.module('starter.controllers', [])

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.backButton.text('').icon('ion-chevron-left custom-icon');
})
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

    })

.controller('RecordCtrl', function($scope, $state,  $http, $rootScope) {
    $scope.continue = function() {
      $state.go('record');
    }
})

.controller('HomeCtrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""
      $scope.ghq = function(){
      $state.go('ghq1');
    }
    $scope.scoff = function(){
      $state.go('scoff1');
    }
    $scope.bdi = function(){
      $state.go('BDI1');
    }
    $scope.stai = function(){
      $state.go('stai1');
    }
    $scope.epds1 = function(){
      $state.go('1EPDS');
    }
    $scope.epds2 = function(){
      $state.go('2EPDS');
    }
    $scope.pai = function(){
      $state.go('pai1');
    }
    $scope.mib = function(){
      $state.go('mib1');
    }
    $scope.eat = function(){
      $state.go('eat1');
    }

})
.controller('eat1Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult = 3;
      $state.go ("eat2");
    }
    $scope.usually = function(){
      $rootScope.eatResult = 2;
      $state.go ("eat2");
    }
    $scope.often = function(){
      $rootScope.eatResult = 1;
      $state.go ("eat2");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult = 0;
      $state.go ("eat2");
    }
    $scope.rarely = function(){
      $rootScope.eatResult = 0;
      $state.go ("eat2");
    }
    $scope.never = function(){
      $rootScope.eatResult = 0;
      $state.go ("eat2");
    }

})
.controller('eat2Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat3");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat3");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat3");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat3");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat3");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat3");
    }

})
.controller('eat3Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat4");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat4");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat4");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat4");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat4");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat4");
    }

})
.controller('eat4Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat5");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat5");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat5");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat5");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat5");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat5");
    }

})
.controller('eat5Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat6");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat6");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat6");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat6");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat6");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat6");
    }

})
.controller('eat6Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat7");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat7");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat7");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat7");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat7");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat7");
    }

})
.controller('eat7Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat8");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat8");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat8");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat8");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat8");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat8");
    }

})
.controller('eat8Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat9");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat9");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat9");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat9");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat9");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat9");
    }

})
.controller('eat9Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat10");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat10");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat10");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat10");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat10");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat10");
    }

})
.controller('eat10Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat11");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat11");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat11");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat11");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat11");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat11");
    }

})
.controller('eat11Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat12");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat12");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat12");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat12");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat12");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat12");
    }

})
.controller('eat12Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat13");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat13");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat13");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat13");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat13");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat13");
    }

})
.controller('eat13Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat14");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat14");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat14");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat14");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat14");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat14");
    }

})
.controller('eat14Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat15");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat15");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat15");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat15");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat15");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat15");
    }

})
.controller('eat15Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat16");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat16");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat16");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat16");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat16");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat16");
    }

})
.controller('eat16Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat17");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat17");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat17");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat17");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat17");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat17");
    }

})
.controller('eat17Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat18");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat18");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat18");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat18");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat18");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat18");
    }

})
.controller('eat18Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat19");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat19");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat19");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat19");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat19");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat19");
    }

})
.controller('eat19Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat20");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat20");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat20");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat20");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat20");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat20");
    }

}).controller('eat20Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat21");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat21");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat21");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat21");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat21");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat21");
    }

})
.controller('eat21Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat22");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat22");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat22");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat22");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat22");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat22");
    }

})
.controller('eat22Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat23");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat23");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat23");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat23");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat23");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat23");
    }

})
.controller('eat23Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat24");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat24");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat24");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat24");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat24");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat24");
    }

})
.controller('eat24Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat25");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat25");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat25");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat25");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat25");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat25");
    }

})
.controller('eat25Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat26");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat26");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat26");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat26");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat26");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat26");
    }

})
.controller('eat26Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eat27");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eat27");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eat27");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat27");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat27");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eat27");
    }

})
.controller('eat27Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.eatResult += 3;
      $state.go ("eatResult");
    }
    $scope.usually = function(){
      $rootScope.eatResult += 2;
      $state.go ("eatResult");
    }
    $scope.often = function(){
      $rootScope.eatResult += 1;
      $state.go ("eatResult");
    }
    $scope.sometimes = function(){
      $rootScope.eatResult += 0;
      $state.go ("eatResult");
    }
    $scope.rarely = function(){
      $rootScope.eatResult += 0;
      $state.go ("eatResult");
    }
    $scope.never = function(){
      $rootScope.eatResult += 0;
      $state.go ("eatResult");
    }

})
.controller('eatResultCtrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""
    console.log($rootScope.eatResult);
      if ($rootScope.eatResult < 20){
    $rootScope.profilEAT = "Cool";
  }
  else{
    $rootScope.profilEAT = "Vos résultats au EAT-26 suggèrent que vous pourriez souffrir d'un trouble des conduites alimentaires. Il est donc recommandé de consulter un professionnel de la santé qualifié dans le domaine afin de déterminer s’il y a présence ou non d’un diagnostic et les soins qu'il demande.";
  } 

})


.controller('pai1Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult = 4;
      $state.go ("pai2");
    }
    $scope.often = function(){
      $rootScope.paiResult = 3;
      $state.go ("pai2");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult = 2;
      $state.go ("pai2");
    }
    $scope.never = function(){
      $rootScope.paiResult = 1;
      $state.go ("pai2");
    }

})
.controller('pai2Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai3");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai3");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai3");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai3");
    }

})
.controller('pai3Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai4");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai4");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai4");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai4");
    }

})
.controller('pai4Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai5");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai5");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai5");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai5");
    }

})
.controller('pai5Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai6");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai6");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai6");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai6");
    }

})
.controller('pai6Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai7");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai7");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai7");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai7");
    }

})
.controller('pai7Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai8");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai8");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai8");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai8");
    }

})
.controller('pai8Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai9");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai9");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai9");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai9");
    }

})
.controller('pai9Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai10");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai10");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai10");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai10");
    }

})
.controller('pai10Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai11");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai11");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai11");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai11");
    }

})
.controller('pai11Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai12");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai12");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai12");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai12");
    }

})
.controller('pai12Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai13");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai13");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai13");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai13");
    }

})
.controller('pai13Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai14");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai14");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai14");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai14");
    }

})
.controller('pai14Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai15");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai15");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai15");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai15");
    }

})
.controller('pai15Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai16");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai16");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai16");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai16");
    }

})
.controller('pai16Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai17");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai17");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai17");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai17");
    }

})
.controller('pai17Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai18");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai18");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai18");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai18");
    }

})
.controller('pai18Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai19");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai19");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai19");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai19");
    }

})
.controller('pai19Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai20");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai20");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai20");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai20");
    }

}).controller('pai20Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("pai21");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("pai21");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("pai21");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("pai21");
    }

})
.controller('pai21Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.always = function(){
      $rootScope.paiResult += 4;
      $state.go ("paiResult");
    }
    $scope.often = function(){
      $rootScope.paiResult += 3;
      $state.go ("paiResult");
    }
    $scope.sometimes = function(){
      $rootScope.paiResult += 2;
      $state.go ("paiResult");
    }
    $scope.never = function(){
      $rootScope.paiResult += 1;
      $state.go ("paiResult");
    }

})
.controller('paiResultCtrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""
if ($rootScope.resResult < 42){
    $rootScope.profilPAI = "Pas cool";
  }
  else{
    $rootScope.profilPAI = "Cool";
  }

})


.controller('ghq1Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult = 3;
      $state.go ("ghq2");
    }
    $scope.less = function(){
      $rootScope.ghqResult = 3;
      $state.go ("ghq2");
    }
    $scope.usual = function(){
      $rootScope.ghqResult = 2;
      $state.go ("ghq2");
    }
    $scope.besser = function(){
      $rootScope.ghqResult = 1;
      $state.go ("ghq2");
    }

})
.controller('ghq2Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq3");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq3");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq3");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq3");
    }

})
.controller('ghq3Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq4");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq4");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq4");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq4");
    }

})
.controller('ghq4Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq5");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq5");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq5");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq5");
    }

})
.controller('ghq5Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq6");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq6");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq6");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq6");
    }

})
.controller('ghq6Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq7");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq7");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq7");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq7");
    }

})
.controller('ghq7Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq8");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq8");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq8");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq8");
    }

})
.controller('ghq8Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq9");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq9");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq9");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq9");
    }

})
.controller('ghq9Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq10");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq10");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq10");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq10");
    }

})
.controller('ghq10Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq11");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq11");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq11");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq11");
    }

})
.controller('ghq11Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq12");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq12");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq12");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq12");
    }

})
.controller('ghq12Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq13");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq13");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq13");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq13");
    }

})
.controller('ghq13Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq14");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq14");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq14");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq14");
    }

})
.controller('ghq14Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq15");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq15");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq15");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq15");
    }

})
.controller('ghq15Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq16");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq16");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq16");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq16");
    }

})
.controller('ghq16Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq17");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq17");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq17");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq17");
    }

})
.controller('ghq17Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq18");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq18");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq18");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq18");
    }

})
.controller('ghq18Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq19");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq19");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq19");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq19");
    }

})
.controller('ghq19Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq20");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq20");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq20");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq20");
    }

})

.controller('ghq20Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq21");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq21");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq21");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq21");
    }

})
.controller('ghq21Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq22");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq22");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq22");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq22");
    }

})
.controller('ghq22Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq23");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq23");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq23");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq23");
    }

})
.controller('ghq23Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq24");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq24");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq24");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq24");
    }

})
.controller('ghq24Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq25");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq25");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq25");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq25");
    }

})
.controller('ghq25Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq26");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq26");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq26");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq26");
    }

})
.controller('ghq26Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq27");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq27");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq27");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq27");
    }

})
.controller('ghq27Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghq28");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghq28");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghq28");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghq28");
    }

})
.controller('ghq28Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.ghqResult += 3;
      $state.go ("ghqResult");
    }
    $scope.less = function(){
      $rootScope.ghqResult += 2;
      $state.go ("ghqResult");
    }
    $scope.usual = function(){
      $rootScope.ghqResult += 1;
      $state.go ("ghqResult");
    }
    $scope.besser = function(){
      $rootScope.ghqResult += 0;
      $state.go ("ghqResult");
    }

})
.controller('ghqResultCtrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""
if ($rootScope.ghqResult< 22){
    $rootScope.profilGhq = "Vos réponses au GHQ-28 suggèrent que vous êtes en etat de détresse, raison pour laquelle une consultations avec un professionnel de la santé mentale s'avère nécessaire. ";
  }
  else if ($rootScope.ghqResult > 21){
    $rootScope.profilGhq = "Vos réponses au GHQ-28 suggèrent que vous êtes susceptible de souffrir de dépression. Il s'avère nécessaire que vous consultiez un professionnel de santé mentale prestement";
  }

})


.controller('1EPDS1Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS1Result = 3;
      $state.go ("1EPDS2");
    }
    $scope.less = function(){
      $rootScope.EPDS1Result = 3;
      $state.go ("1EPDS2");
    }
    $scope.usual = function(){
      $rootScope.EPDS1Result = 2;
      $state.go ("1EPDS2");
    }
    $scope.besser = function(){
      $rootScope.EPDS1Result = 1;
      $state.go ("1EPDS2");
    }

})
.controller('1EPDS2Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS1Result += 3;
      $state.go ("1EPDS3");
    }
    $scope.less = function(){
      $rootScope.EPDS1Result += 2;
      $state.go ("1EPDS3");
    }
    $scope.usual = function(){
      $rootScope.EPDS1Result += 1;
      $state.go ("1EPDS3");
    }
    $scope.besser = function(){
      $rootScope.EPDS1Result += 0;
      $state.go ("1EPDS3");
    }

})
.controller('1EPDS3Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS1Result += 3;
      $state.go ("1EPDS4");
    }
    $scope.less = function(){
      $rootScope.EPDS1Result += 2;
      $state.go ("1EPDS4");
    }
    $scope.usual = function(){
      $rootScope.EPDS1Result += 1;
      $state.go ("1EPDS4");
    }
    $scope.besser = function(){
      $rootScope.EPDS1Result += 0;
      $state.go ("1EPDS4");
    }

})
.controller('1EPDS4Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS1Result += 3;
      $state.go ("1EPDS5");
    }
    $scope.less = function(){
      $rootScope.EPDS1Result += 2;
      $state.go ("1EPDS5");
    }
    $scope.usual = function(){
      $rootScope.EPDS1Result += 1;
      $state.go ("1EPDS5");
    }
    $scope.besser = function(){
      $rootScope.EPDS1Result += 0;
      $state.go ("1EPDS5");
    }

})
.controller('1EPDS5Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS1Result += 3;
      $state.go ("1EPDS6");
    }
    $scope.less = function(){
      $rootScope.EPDS1Result += 2;
      $state.go ("1EPDS6");
    }
    $scope.usual = function(){
      $rootScope.EPDS1Result += 1;
      $state.go ("1EPDS6");
    }
    $scope.besser = function(){
      $rootScope.EPDS1Result += 0;
      $state.go ("1EPDS6");
    }

})
.controller('1EPDS6Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS1Result += 3;
      $state.go ("1EPDS7");
    }
    $scope.less = function(){
      $rootScope.EPDS1Result += 2;
      $state.go ("1EPDS7");
    }
    $scope.usual = function(){
      $rootScope.EPDS1Result += 1;
      $state.go ("1EPDS7");
    }
    $scope.besser = function(){
      $rootScope.EPDS1Result += 0;
      $state.go ("1EPDS7");
    }

})
.controller('1EPDS7Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS1Result += 3;
      $state.go ("1EPDSResult");
    }
    $scope.less = function(){
      $rootScope.EPDS1Result += 2;
      $state.go ("1EPDSResult");
    }
    $scope.usual = function(){
      $rootScope.EPDS1Result += 1;
      $state.go ("1EPDSResult");
    }
    $scope.besser = function(){
      $rootScope.EPDS1Result += 0;
      $state.go ("1EPDSResult");
    }

})
.controller('1EPDSResultCtrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""
  if ($rootScope.EPDS1Result >= 10) {
    $rootScope.profilEpds1 = "Risque de dépression du postpartum";
  }
  else {
    $rootScope.profilEpds1 = "Pas de soucis";   
  }

})





.controller('2EPDS1Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS2Result = 3;
      $state.go ("2EPDS2");
    }
    $scope.less = function(){
      $rootScope.EPDS2Result = 3;
      $state.go ("2EPDS2");
    }
    $scope.usual = function(){
      $rootScope.EPDS2Result = 2;
      $state.go ("2EPDS2");
    }
    $scope.besser = function(){
      $rootScope.EPDS2Result = 1;
      $state.go ("2EPDS2");
    }

})
.controller('2EPDS2Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS2Result += 3;
      $state.go ("2EPDS3");
    }
    $scope.less = function(){
      $rootScope.EPDS2Result += 2;
      $state.go ("2EPDS3");
    }
    $scope.usual = function(){
      $rootScope.EPDS2Result += 1;
      $state.go ("2EPDS3");
    }
    $scope.besser = function(){
      $rootScope.EPDS2Result += 0;
      $state.go ("2EPDS3");
    }

})
.controller('2EPDS3Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS2Result += 3;
      $state.go ("2EPDS4");
    }
    $scope.less = function(){
      $rootScope.EPDS2Result += 2;
      $state.go ("2EPDS4");
    }
    $scope.usual = function(){
      $rootScope.EPDS2Result += 1;
      $state.go ("2EPDS4");
    }
    $scope.besser = function(){
      $rootScope.EPDS2Result += 0;
      $state.go ("2EPDS4");
    }

})
.controller('2EPDS4Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS2Result += 3;
      $state.go ("2EPDS5");
    }
    $scope.less = function(){
      $rootScope.EPDS2Result += 2;
      $state.go ("2EPDS5");
    }
    $scope.usual = function(){
      $rootScope.EPDS2Result += 1;
      $state.go ("2EPDS5");
    }
    $scope.besser = function(){
      $rootScope.EPDS2Result += 0;
      $state.go ("2EPDS5");
    }

})
.controller('2EPDS5Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS2Result += 3;
      $state.go ("2EPDS6");
    }
    $scope.less = function(){
      $rootScope.EPDS2Result += 2;
      $state.go ("2EPDS6");
    }
    $scope.usual = function(){
      $rootScope.EPDS2Result += 1;
      $state.go ("2EPDS6");
    }
    $scope.besser = function(){
      $rootScope.EPDS2Result += 0;
      $state.go ("2EPDS6");
    }

})
.controller('2EPDS6Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS2Result += 3;
      $state.go ("2EPDS7");
    }
    $scope.less = function(){
      $rootScope.EPDS2Result += 2;
      $state.go ("2EPDS7");
    }
    $scope.usual = function(){
      $rootScope.EPDS2Result += 1;
      $state.go ("2EPDS7");
    }
    $scope.besser = function(){
      $rootScope.EPDS2Result += 0;
      $state.go ("2EPDS7");
    }

})
.controller('2EPDS7Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS2Result += 3;
      $state.go ("2EPDS8");
    }
    $scope.less = function(){
      $rootScope.EPDS2Result += 2;
      $state.go ("2EPDS8");
    }
    $scope.usual = function(){
      $rootScope.EPDS2Result += 1;
      $state.go ("2EPDS8");
    }
    $scope.besser = function(){
      $rootScope.EPDS2Result += 0;
      $state.go ("2EPDS8");
    }

})
.controller('2EPDS8Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.EPDS2Result += 3;
      $state.go ("2EPDSResult");
    }
    $scope.less = function(){
      $rootScope.EPDS2Result += 2;
      $state.go ("2EPDSResult");
    }
    $scope.usual = function(){
      $rootScope.EPDS2Result += 1;
      $state.go ("2EPDSResult");
    }
    $scope.besser = function(){
      $rootScope.EPDS2Result += 0;
      $state.go ("2EPDSResult");
    }

})
.controller('2EPDSResultCtrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""
  if ($rootScope.EPDS2Result >= 10) {
    $rootScope.profilEpds2 = "Risque de dépression du postpartum";
  }
  else {
    $rootScope.profilEpds2 = "Pas de soucis";   
  }

})






.controller('BDI1Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult = 3;
      $state.go ("BDI2");
    }
    $scope.less = function(){
      $rootScope.BDIResult = 3;
      $state.go ("BDI2");
    }
    $scope.usual = function(){
      $rootScope.BDIResult = 2;
      $state.go ("BDI2");
    }
    $scope.besser = function(){
      $rootScope.BDIResult = 1;
      $state.go ("BDI2");
    }

})
.controller('BDI2Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI3");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI3");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI3");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI3");
    }

})
.controller('BDI3Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI4");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI4");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI4");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI4");
    }

})
.controller('BDI4Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI5");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI5");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI5");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI5");
    }

})
.controller('BDI5Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI6");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI6");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI6");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI6");
    }

})
.controller('BDI6Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI7");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI7");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI7");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI7");
    }

})
.controller('BDI7Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI8");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI8");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI8");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI8");
    }

})
.controller('BDI8Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI9");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI9");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI9");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI9");
    }

})
.controller('BDI9Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI10");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI10");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI10");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI10");
    }

})
.controller('BDI10Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI11");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI11");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI11");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI11");
    }

})
.controller('BDI11Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI12");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI12");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI12");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI12");
    }

})
.controller('BDI12Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDI13");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDI13");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDI13");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDI13");
    }

})
.controller('BDI13Ctrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""

    $scope.moreLess = function(){
      $rootScope.BDIResult += 3;
      $state.go ("BDIResult");
    }
    $scope.less = function(){
      $rootScope.BDIResult += 2;
      $state.go ("BDIResult");
    }
    $scope.usual = function(){
      $rootScope.BDIResult += 1;
      $state.go ("BDIResult");
    }
    $scope.besser = function(){
      $rootScope.BDIResult += 0;
      $state.go ("BDIResult");
    }

})
.controller('BDIResultCtrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""
if ($rootScope.BDIResult < 5 ){
    $rootScope.profilBDI = "Pas de dépression";
  }
  else if ($rootScope.BDIResult < 8){
    $rootScope.profilBDI = "Dépression légère"; 
  }
  else if ($rootScope.BDIResult < 16){
    $rootScope.profilBDI = "Dépression modérée";  
  }
  else {
    $rootScope.profilBDI = "Dépression sévère"; 
  }

})



.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
