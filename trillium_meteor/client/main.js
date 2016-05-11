import angular from 'angular';
import angularMeteor from 'angular-meteor';
import nvd3 from 'angular-nvd3';
angular.module('trillium',[ angularMeteor , nvd3])
	 .directive('rdWidget', rdWidget)
	 .directive('rdWidgetBody', rdWidgetBody)
	 .directive('rdLoading', rdLoading)
     .controller('trackWidgetCtrl',function($scope){
        'ngInject';
		/* Chart options */
        $scope.data = [ {key: 'Red', y: 4}, { key: 'Green', y: 12}, { key: 'Amber', y: 3} ];
		$scope.trackName = "Treasury Solutions";
		$scope.Status = "Green";
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#FF2033', '#4C9900',, '#FF0000'],
                showLabels: false,
                showLegend: true,
                title: $scope.Status,
                margin: { top: -10 }
            }
        };
		
		$scope.config = {
		visible: true, // default: true
		extended: false, // default: false
		disabled: false, // default: false
		refreshDataOnly: true, // default: true
		deepWatchOptions: true, // default: true
		deepWatchData: true, // default: true
		deepWatchDataDepth: 2, // default: 2
		debounce: 10 // default: 10
	};
		})
	.controller('applicationWidgetCtrl',function($scope){
        'ngInject';
		/* Chart options */
        $scope.data = [ {key: 'Failed', y: 1}, { key: 'Passed', y: 12}, { key: 'Threshold', y: 2} ];
		$scope.applicationName = "accessMoneyManager";
		$scope.Status = "Green";
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#FF2033', '#4C9900',, '#FF0000'],
                showLabels: false,
                showLegend: true,
                title: $scope.Status,
                margin: { top: -05 }
            }
        };
		
		$scope.config = {
		visible: true, // default: true
		extended: false, // default: false
		disabled: false, // default: false
		refreshDataOnly: false, // default: true
		deepWatchOptions: true, // default: true
		deepWatchData: true, // default: true
		deepWatchDataDepth: 2, // default: 2
		debounce: 10 // default: 10
	};
	});
    function rdWidget() {
    var directive = {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
	}};
		
	function rdWidgetBody() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
	};
	
	function rdLoading() {
    var directive = {
        restrict: 'AE',
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
    return directive;
	};





