(function() {

  angular
    .module('plunker')
    .service('photoService', photoService);

  photoService.$inject = ['$http', '$q', 'CONFIG'];
  function photoService($http, $q, CONFIG) {
    var self = this;

    self.getPhotos = getPhotos;

    function getPhotos() {
      return $http.get(CONFIG.API_END_POINT + '/photos')
        .then(successFn, errorFn);
    }

    function successFn (response) {
      return response.data;
    }

    function errorFn (response) {
      return $q.reject(response.status);
    }
  }
})();