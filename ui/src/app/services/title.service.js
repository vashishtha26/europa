(function(){

    'use strict';
        angular
        .module('europa')
        .factory('titleService', ['$http', '$q','CONFIG', function($http, $q, CONFIG){

        return {

            getTitles: function() {
                return $http.get(CONFIG.API_END_POINT + '/titles')
                    .then(
                        function(response){
                            return response.data;
                        },
                        function(errResponse){
                            console.error('Error while fetching database');
                            return $q.reject(errResponse);
                        }
                    );
            },

            addTitle: function(title){
                return $http.post(CONFIG.API_END_POINT +'/titles', title)
                    .then(
                        function(response){
                            return response.data;
                        },
                        function(errResponse){
                            console.error('Error while creating title');
                            return $q.reject(errResponse);
                        }
                    );
            },

          updateTitle: function(title, titleId){
                return $http.put(CONFIG.API_END_POINT + '/titles/'+titleId, title)
                    .then(
                        function(response){
                            return response.data;
                        },
                        function(errResponse){
                            console.error('Error while updating title');
                            return $q.reject(errResponse);
                        }
                    );
            },

           deleteTitle: function(titleId){
                return $http.delete(CONFIG.API_END_POINT + '/titles/'+titleId)
                    .then(
                        function(response){
                            return response. data;
                        },
                        function(errResponse){
                            console.error('Error while deleting title');
                            return $q.reject(errResponse);
                        }
                    );
            }


        };

    }]);


})();





