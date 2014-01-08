describe('ElectionService', function() {

	var ElectionService;

	beforeEach(function() {
		module('services');

		inject(function($injector) {
			ElectionService = $injector.get('ElectionService');
		});

	});

	it('Should return the list of candidates', function() {
		expect(ElectionService.candidates).toEqual([
			{name:'Alpha', votes: 0},
			{name:'Bravo', votes: 0},
			{name:'Charlie', votes: 0},
			{name:'Delta', votes: 0}
		]);
	});

});