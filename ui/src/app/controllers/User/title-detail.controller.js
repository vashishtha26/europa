(function() {
  'use strict';

  angular
    .module('europa')
    .controller('TitleDetailController', ['$routeParams','userViewService', function($routeParams,userViewService) {
      var titleDetailVm = this;


      titleDetailVm.init = function () {
          console.log('hiii')
        console.log($routeParams);
        userViewService.getTitleById($routeParams.titleId)
            .then(function (data) {
                  titleDetailVm.title = data;
                  console.log(data);
                }, function (error) {
                  console.log(error);
                }
            );
      };
        titleDetailVm.init();
    }]);

})();