(function(){

  'use strict';

  angular
      .module('europa')
      .controller('UserViewController', ['$scope','userViewService', function($scope,userViewService) {
        var userViewVm = this;


        userViewVm.getTitles = function(){
          userViewService.getTitles()
              .then(
                  function(d) {
                    userViewVm.titles = d;
                  },
                  function(errResponse){
                    console.error('Error while fetching Currencies');
                  }
              );
        };


          userViewVm.getTitles();
      }]);

})();


