describe('CandidateCtrl', function() {

	var $rootScope, $scope, controller, candidate;

	beforeEach(function() {
		module('controllers','services');

		candidate = { name: "Hotel", votes: 200 };

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')('CandidateCtrl', {$scope: $scope});

		});

		$scope.$digest();
	});

	it('Should increase the vote count', function() {
		$scope.up(candidate);
		expect(candidate.votes).toEqual(201);
	});

	it('Should decrease the vote count', function() {
		$scope.down(candidate);
		expect(candidate.votes).toEqual(199);
	});

});