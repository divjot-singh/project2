var mod=angular.module('railservice',['ngResource']);
mod.factory('Train',function($http){
	var trains={};
	trains.getTrains=function()
	{
		$http.get('trains.json').success(function(data,status){
			trains.train=data;
		});
		return trains.train;
	}
	return trains;
});
mod.factory('Reservation',function(){
	var reservations=[{
		id:null,
		name:null,
		source:null,
		station:null,
		code:null,
		destination:null,
		quantity:null
	}];
	var size=0;
	reservations.add=function(train)
	{
		var flag=0;
			for(i in reservations)
			{
				if(train.code==reservations[i].code)
				{
					reservations[i].quantity+=1;
					flag+=1;
				}
			}
		if(flag==0)
		{
			reservations.id=size++;
			reservations.push(train);
		}

	}
	reservations.view=function()
	{
		return reservations;
	}
	return reservations;
});