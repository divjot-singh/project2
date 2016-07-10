var modd=angular.module('railapp',['ngRoute','railservice']);
modd.config(function($routeProvider)
{
	$routeProvider
		.when("/",{
			templateUrl:'destination.html',
			controller:function($scope)
			{
				$scope.setActive('destination');
			}
		})
		
		.when("/station/:stationCode",{
			templateUrl:'stations.html',
			controller:'StationCtrl'
		})
		.when("/train",{
			templateUrl:'train.html',
			controller:'TrainCtrl'
		})
		.when('reservation',{
			templateUrl:'reservation.html',
			controller:'ReservationCtrl'
		})
});
modd.controller('RailCtrl',function($scope,Station,$routeParams){
	$scope.stationTemplate='station.html';
	$scope.setActive=function(type)
	{
		$scope.destinationActive='';
		$scope.trainActive='';
		$scope.reservationActive='';
		$scope[type+'Active']='active';
	}
	$scope.sidebarUrl='stations.html';
	$scope.setStation=function(code)
	{
		$scope.currentStation=Station.get({ stationCode : code});
	}
	$scope.stations=Station.query()
});
modd.controller('StationCtrl',function($scope, $routeParams,Station)
{
});
modd.controller('Station1Ctrl',function($scope,$routeParams){
	$scope.currentStation=$scope.stations[$routeParams.station1];
});
modd.controller('Station2Ctrl',function($scope,$routeParams){
	$scope.currentStation=$scope.stations[$routeParams.station2];
});
modd.controller('TrainCtrl',function($scope,Train){
	$scope.setActive('train');
	$scope.train=Train.query();
});
modd.controller('ReservationCtrl',function($scope,Reservation,Train){
	$scope.setActive('reservation');
	$scope.reservation=Reservation.query();
	$scope.train=Train.query();
	$scope.reserveTrain=function()
	{
		Reservation.save($scope.reserve,function(data)
		{
			$scope.reserve.origin="";
			$scope.reserve.destination="";
			$scope.reservations.push(data);
			$scope.vis=true;
		});
	};
	$scope.reserveTrainRp = function(param) {
							Reservation.save(param, function(data){
								param.origin = "";
								param.destination = "";
								$scope.reservation.push(data);
							});
						};

});