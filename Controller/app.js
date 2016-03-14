/**
 * Created by Thanusha on 3/9/2016.
 */
(function(){
    'use strict';


    angular.module('europa',['ngRoute','ngMessages']);

    angular.module('europa').config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider){
        $routeProvider
            .when('/UserSignUp',{
                templateUrl:'Views/SecondPage.html'

            })
            .when('/UserSignUp',{
                templateUrl:'Views/UserSignUp.html',
                controller: 'UserSignUpController',
                controllerAs:'uVm'

            })
            .otherwise({
                redirectTo:'#'
            });
    }





})();