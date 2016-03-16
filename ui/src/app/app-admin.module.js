(function() {
    'use strict';

    angular
        .module('europa', ['ngRoute', 'ui.bootstrap'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/titles', {
                templateUrl: 'admin.html',
                controller: 'TitlesController',
                controllerAs: 'titlesVm'
            })
            .otherwise({
                redirectTo: '/titles'
            });
    }
})();