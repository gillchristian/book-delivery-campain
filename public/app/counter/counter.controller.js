/* global io */
(function(){
'use strict';

  /**
   * Counter controller
   */
  angular.module('impactoApp.counter')
    .controller('CounterController', CounterController);

    function CounterController(socket){
      // --- view model ---
      var vm = this;

      // --- exposed properties ---
      vm.count = 0;

      // --- exposed methods ---
      vm.addBook = addBook;

      activate();
      /////////////////////////
      /**
       * Emits a 'add books' event
       */
      function addBook(){
        socket.emit('add books', 1);
      }

      /**
       * Initializes the controller state
       */
      function activate(){
        socket.on('increase count', function(count){
          vm.count = count;
        });
        socket.on('current count', function(count){
          vm.count = count;
        });
      }
    }

})();
