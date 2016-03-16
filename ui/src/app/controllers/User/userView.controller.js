(function(){

  'use strict';

  angular
      .module('europa')
      .controller('UserViewController', ['$scope','userViewService', function($scope,userViewService) {
        var userViewVm = this;
        userViewVm.titles=[];
        userViewVm.title={};
        
        userViewVm.getTitles = function(){
          userViewService.getTitles()
              .then(
                  function(d) {
                	  userViewVm.totalItems=d.length;
                      userViewVm.myInterval=3000;
                      userViewVm.slides=[{image:d.poster}];
                      userViewVm.currentPage=1;
                      userViewVm.titles = d;
                  },
                  function(errResponse){
                    console.error('Error while fetching database');
                  }
              );
        };
        
        userViewVm.sortByYear = function(){
            userViewVm.titles= _.sortBy(userViewVm.titles, "year");
        };
        userViewVm.sortByImdbRating = function(){
            userViewVm.titles= _.sortBy(userViewVm.titles, "imdbRating");
        };
        userViewVm.sortByImdbVotes = function(){
            userViewVm.titles= _.sortBy(userViewVm.titles, "imdbVotes");
        };

          userViewVm.getTitles();
      }]);

})();


