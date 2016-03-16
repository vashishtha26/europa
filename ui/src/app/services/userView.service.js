(function(){

    'use strict';
    angular
        .module('europa')
        .factory('userViewService', ['$http', '$q','CONFIG', function($http, $q, CONFIG){

            return {

                getTitles: function () {
                    return $http.get(CONFIG.API_END_POINT + '/titles')
                        .then(
                            function (response) {
                                return response.data;
                            },
                            function (errResponse) {
                                console.error('Error while fetching titles');
                                return $q.reject(errResponse);
                            }
                        );

                },

                getTitleById: function (titleId) {
                return $http.get(CONFIG.API_END_POINT + '/titles/' + titleId)
                    .then(function(response) {
                           return response.data;
                        },
                        function(errResponse){
                            console.error('Error while fetching detabase');
                            return $q.reject(errResponse);
                        }
                    );
            }
            }
        }]);


})();


