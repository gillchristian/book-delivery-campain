(function(){
'use strict';

  /**
   * Socket service
   */
  angular.module('votesApp.services')
    .factory('socket', socket);

    function socket(socketFactory) {
      return socketFactory();
    }

})();
