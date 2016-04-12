(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;

        // TODO: move data to the service
        vm.visitorsChartData = [ {key: 'Red', y: 4}, { key: 'Green', y: 12}, { key: 'Amber', y: 3} ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#FF3333', '#4C9900',, '#FF8000'],
                showLabels: false,
                showLegend: false,
                title: 'Apps',
                margin: { top: -10 }
            }
        };
    }
})();
