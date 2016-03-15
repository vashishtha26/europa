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
     /* .when('/users/:id', {
        templateUrl: 'app/views/user-detail.tmpl.html',
        controller: 'UserDetailController',
        controllerAs: 'userDetailVm'
      })
      .when('/photos', {
        templateUrl: 'app/views/photos.tmpl.html',
        controller: 'PhotosController',
        controllerAs: 'photosVm'
      })*/
      .otherwise({
        redirectTo: '/titles'
      });
  }
})();