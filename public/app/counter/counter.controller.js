/* global io */
(function(){
'use strict';

  /**
   * Counter controller
   */
  angular.module('impactoApp.counter')
    .controller('CounterController', CounterController);

    function CounterController(socket, $cookies){
      // --- view model ---
      var vm = this;

      // --- exposed properties ---
      vm.count    = 0;
      vm.progress = 0;
      vm.goal     = 100000; // TODO: get the goal from the API
      vm.place    = 'Santa Fe'; // TODO: get the place from the API
      vm.ownTotal = null;

      // --- exposed methods ---
      vm.addBook = addBook;

      activate();
      /////////////////////////
      /**
       * Initializes the controller state
       */
      function activate(){
        vm.ownTotal = parseInt( $cookies.get('ownTotal') ) || 0;

        socketEventHandlers();
      }

      /**
       * Set socket.io events handlers
       */
      function socketEventHandlers(){
        socket.on('current count', updateCount);
        socket.on('increase count', updateCount);
      }
      /**
       * Update count on socket count event
       */
      function updateCount(count){
        vm.count = count;
        vm.progress = checkProgress();
      }
      /**
       * Emits a 'add books' event
       *
       * @param {int}  amount
       */
      function addBook(amount){
        vm.count += amount || 1;
        vm.ownTotal += amount || 1;
        $cookies.put('ownTotal', vm.ownTotal)
        socket.emit('add books', amount || 1);
        vm.progress = checkProgress();
      }

      /**
       * Get the progress
       *
       * @returns {int}  % progress
       */
      function checkProgress(){
        return ( vm.count / vm.goal) * 100;
      }
    }

})();
