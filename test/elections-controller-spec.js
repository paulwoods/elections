describe('ElectionsCtrl', function() {

	var $rootScope, $scope, controller;

	beforeEach(function() {
		module('controllers','services');

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')('ElectionsCtrl', {$scope: $scope});

		});

		$scope.$digest();

	});

	it('Should have a list of candidates', function() {
		expect($scope.candidates).toEqual([
			{name:'Alpha', votes: 0},
			{name:'Bravo', votes: 0},
			{name:'Charlie', votes: 0},
			{name:'Delta', votes: 0}
		]);
	});

	it('Should sum the votes', function() {
		$scope.candidates[0].votes = 10;
		$scope.candidates[1].votes = 20;
		$scope.candidates[2].votes = 40;
		$scope.candidates[3].votes = 80;

		expect($scope.sum()).toEqual(150);
	});

});