/**
 * Created by Thanusha on 3/9/2016.
 */
(function(){
    'use strict';

    angular.module("europa")
        .controller("UserSignUpController",UserSignUpControllerFn);


    UserSignUpControllerFn.$inject = ['$http']
    function UserSignUpControllerFn($http){
        var uVm = this;
        console.log("UsersSignUpControllerFn Entered");

       uVm.adduser = function(isFormValid){
            console.log("UsersSignUpController add user function entered"+ isFormValid);

            if(isFormValid){
                $http({
                    method:'POST',
                    url:'http://localhost:8080/movie-flix/users',
                    data:uVm.newUser
                }).success(function(data){
                    console.log(data);
                    alert("User is successfully signed Up !!!")
                }).error(function(error){
                    console.log(error);
                });
            }
        }


        uVm.loginUser = function(userEmail) {
            console.log("UsersSignUpController LoginUser function entered " + userEmail);


            if (userEmail !== null) {
                console.log("userEmail NOT NULL");
                $http({
                    method:'GET',
                    url: 'http://localhost:8080/movie-flix/users/email?email=' + userEmail,
                    data:uVm.existing
                }).success(function (data) {
                    console.log(data);
                    console.log("Success");
                }).error(function (error) {
                    console.log(error);
                    console.log("Data Not found");
                });
            }

        }

    }

})();

