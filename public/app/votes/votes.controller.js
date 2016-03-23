/* global io */
(function(){
'use strict';

  /**
   * Counter controller
   */
  angular.module('votesApp.votes')
    .controller('VotesController', CounterController);

    function CounterController(socket){
      // --- view model ---
      var vm = this;

      // --- exposed properties ---
      vm.contenders = [];
      vm.emitedVote = false;

      // --- exposed methods ---
      vm.select   = select;
      vm.vote     = vote;

      activate();
      /////////////////////////
      /**
       * Initializes the controller state
       */
      function activate(){
        socketEventHandlers();
      }

      /**
       * Set socket.io events handlers
       */
      function socketEventHandlers(){
        socket.on('current contenders set', newContenders);
        socket.on('new contenders set', newContenders);
      }
      /**
       * Update count on socket count event
       */
      function newContenders(contenders){
        vm.contenders = JSON.parse(contenders);
      }

      /**
       * Sets and item as selected
       *
       * @param {object}  item
       */
      function select(clicked){
        vm.contenders = vm.contenders
          .map(function(item){
            return {
              id: item.id,
              name: item.name,
              selected: item.id === clicked.id
            }
          })
      }
      /**
       * Emits a vote
       */
      function vote(){
        var selected = vm.contenders
          .find(function(item){
            return item.selected
          })
        socket.emit('vote', selected.id);
        vm.emitedVote = true;
      }
    }

})();
