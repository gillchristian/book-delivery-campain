(function(){
	'use strict';

	angular.module('votesApp')
		.config(function($stateProvider, $urlRouterProvider) {

			// --- For any unmatched url, redirect to / ---
			$urlRouterProvider.otherwise("/");

			// --- Home ---
			$stateProvider
			// --- Counter ---
				.state('counter', {
					url: "/",
					templateUrl: "public/app/counter/counter.template.html",
					controller: 'CounterController as vm',
					controllerAs: 'vm'
				});
		});
})();
