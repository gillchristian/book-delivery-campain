(function(){
'use strict';

  /**
   * Main Angular app module
   */
  angular.module('impactoApp', [
    'btford.socket-io',
    'impactoApp.counter',
    'impactoApp.services',
  ]);
/*
[
  'ui.router',
  'ui.bootstrap'
]
*/
})();
