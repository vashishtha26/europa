(function() {
  'use strict';

  angular
    .module('europa', ['ngRoute', 'ui.bootstrap'])
    .config(moduleConfig);

  moduleConfig.$inject = ['$routeProvider'];

  function moduleConfig($routeProvider) {
    $routeProvider
        .when('/titles',{
            templateUrl: 'app/views/User/viewtitles.tmpl.html',
            controller: 'UserViewController',
            controllerAs: 'userViewVm'
        })
        .when('/titles/:titleId',{
            templateUrl:'app/views/User/title-detail.tmpl.html',
            controller:'TitleDetailController',
            controllerAs: 'titleDetailVm'
        })
          .when('/titles/type/',{
            templateUrl:'app/views/User/viewtitles.tmpl.html',
            controller:'UserViewController',
            controllerAs: 'userViewVm'
        })
        .when('/titles/genre/',{
            templateUrl:'app/views/User/viewtitles.tmpl.html',
            controller:'UserViewController',
            controllerAs: 'userViewVm'
        })
        .when('/titles/year/',{
            templateUrl:'app/views/User/viewtitles.tmpl.html',
            controller:'UserViewController',
            controllerAs: 'userViewVm'
        })
      .otherwise({
        redirectTo: '/titles'
      });
  }
})();