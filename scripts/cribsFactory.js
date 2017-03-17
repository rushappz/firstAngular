angular
	.module('ngCribs')
	.factory('cribsFactory', function() {
		var cribsData = [
			{
				"type" : "Condo",
				"price" : "220000",
				"address" : "213 Grove Street",
				"description" : "Excellent place, real nice view!"
			},
			{
				"type" : "House",
				"price" : "452000",
				"address" : "7854 Palm Street",
				"description" : "Cool place, real nice view!"
			},
			{
				"type" : "Duplex",
				"price" : "1520000",
				"address" : "888 York Street",
				"description" : "Good neighbourhood!"
			},
			{
				"type" : "Villa",
				"price" : "2150000",
				"address" : "44 Millenium Street",
				"description" : "The Best!"
			}
		];
		
		function getCribs() {
			return cribsData;
		}
		
		return {
			getCribs: getCribs
		}
	});