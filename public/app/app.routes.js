(function(){
	'use strict';

	angular.module('votesApp')
		.config(function($stateProvider, $urlRouterProvider) {

			// --- For any unmatched url, redirect to / ---
			$urlRouterProvider.otherwise("/");

			// --- Home ---
			$stateProvider
			// --- Votes ---
				.state('votes', {
					url: "/",
					templateUrl: "public/app/votes/votes.template.html",
					controller: 'VotesController',
					controllerAs: 'vm'
				})
			// --- Counter ---
				.state('counter', {
					url: "/counter",
					templateUrl: "public/app/counter/counter.template.html",
					controller: 'CounterController as vm',
					controllerAs: 'vm'
				});
		});
})();
