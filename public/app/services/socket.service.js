(function(){
'use strict';

  /**
   * Socket service
   */
  angular.module('impactoApp.services')
    .factory('socket', socket);

    function socket(socketFactory) {
      return socketFactory();
    }

})();
