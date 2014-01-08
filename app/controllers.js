angular.module('controllers', [])

.controller('ElectionsCtrl', function($scope, ElectionService) {

	$scope.candidates = ElectionService.candidates;

	$scope.sum = function() {
		var count = 0;
		for(var n = 0; n < $scope.candidates.length; ++n) {
			count += $scope.candidates[n].votes;
		}
		return count;
	};

})

.controller('CandidateCtrl', function($scope, ElectionService) {

	$scope.up = function(candidate) {
		candidate.votes++;
	};

	$scope.down = function(candidate) {
		candidate.votes--;
	};

})

;
