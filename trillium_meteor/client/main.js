import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('trillium',[ angularMeteor ])
	.component('applicationsList' ,{
	 templateUrl: 'client/applicationsList.html' ,
	 controllerAs: 'applicationsList' ,
	 controller($scope, $reactive){

	        'ngInject';
	
		$reactive(this).attach($scope);

		this.helpers({
		applications() {
				return Applications.find({});
				}
			});
		}
	});	





