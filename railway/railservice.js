var mod=angular.module('railservice',['ngResource']);
mod.factory('Station',function($resource){
	return $resource('station/:stationCode');
});
mod.factory('Train',function($resource){
	return $resource('/train');
});
mod.factory('Reservation',function($resource){
	return $resource('/reservation');
});