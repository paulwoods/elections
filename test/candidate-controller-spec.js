describe('CandidateCtrl', function() {

	var $rootScope, $scope, controller;

	beforeEach(function() {
		module('controllers','services');

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')('CandidateCtrl', {$scope: $scope});
			$scope.candidate = { name: "Hotel", votes: 200 };
		});

		$scope.$digest();
	});

	it('Should increase the vote count', function() {
		$scope.up();
		expect($scope.candidate.votes).toEqual(201);
	});

	it('Should decrease the vote count', function() {
		$scope.down();
		expect($scope.candidate.votes).toEqual(199);
	});

});