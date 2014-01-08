angular.module('services', [])

.factory("ElectionService", function() {

	return { candidates: [
		{name:'Alpha', votes: 0},
		{name:'Bravo', votes: 0},
		{name:'Charlie', votes: 0},
		{name:'Delta', votes: 0}
	]};

});

