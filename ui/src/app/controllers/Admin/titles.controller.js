(function(){

    'use strict';

    angular
        .module('europa')
        .controller('TitlesController', ['$scope','$routeParams','titleService', function($scope,$routeParams,titleService) {
        var titlesVm = this;



            titlesVm.title={};
            titlesVm.titles=[];


        titlesVm.getTitles = function(){
            titleService.getTitles()
                .then(
                    function(d) {
                        console.log(d);
                        titlesVm.currentPage=1;
                        titlesVm.totalItems=d.length;
                        titlesVm.titles = d;
                    },
                    function(errResponse){
                        console.error('Error while fetching Currencies');
                    }
                );
        };
            titlesVm.addTitle = function(title){
                console.log(title);
                titleService.addTitle(title)
                    .then(function(data){
                        titlesVm.title=data;
                            console.log(data);
                        },
                        function(errResponse){
                            console.error('Error while creating User.');
                        }
                    );
            };

          titlesVm.updateTitle= function(title, titleId){
                titleService.updateTitle(title, titleId)
                    .then(function(data){
                            console.log(data);
                        },

                        function(errResponse){
                            console.error('Error while updating User.');
                        }
                    );
            };
        titlesVm.deleteTitle = function(title){
            console.log(title);
            titleService.deleteTitle(title)
                .then(
                    titlesVm.getTitles,
                    function(errResponse){
                        console.error('Error while deleting User.');
                    }
                );
        };

        titlesVm.getTitles();


            titlesVm.submit = function(){
                console.log(titlesVm.title);
                if(!titlesVm.title.titleId){
                    titlesVm.addTitle(titlesVm.title);
                }
                else{
                   titlesVm.updateTitle(titlesVm.title,titlesVm.title.titleId);
                }
            };


            titlesVm.edit = function(title){
                console.log(titlesVm.title);
                titlesVm.title = title;
                console.log(titlesVm.title);
             };


            titlesVm.remove = function(title){
            titlesVm.deleteTitle(title);
        };
    }]);

})();



