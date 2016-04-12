(function () {
    'use strict';

    angular.module('app')
        .service('performanceService', [
            performanceService
        ]);

    function performanceService() {

        var service = {
            getPerformanceData: getPerformanceData
        };

        return service;

        function getPerformanceData(performancePeriod) {
            if (performancePeriod === 'week') {
                return [
                    {
                        "key": 'Commercial Loans',
                        "values": [[1, 11], [2, 10], [3, 14], [4, 21], [5, 13], [6, 21], [7, 21], [8, 18], [9, 11], [10, 11], [11, 18], [12, 14], [13, 10], [14, 20], [15, 21], [16, 28], [17, 12], [18, 16], [19, 22], [20, 18], [21, 21], [22, 10], [23, 11], [24, 14], [25, 9], [26, 14], [27, 10], [28, 21], [29, 11]]
                    },

                    {
                        "key": 'Treasury Solutions',
                        "values": [[1, 29], [2, 36], [3, 42], [4, 25], [5, 22], [6, 34], [7, 41], [8, 19], [9, 45], [10, 31], [11, 28], [12, 36], [13, 54], [14, 41], [15, 36], [16, 39], [17, 21], [18, 20], [19, 22], [20, 44], [21, 32], [22, 20], [23, 28], [24, 24], [25, 29], [26, 19], [27, 20], [28, 31], [29, 49]]
                    },

                    {
                        "key": 'GIS Sterling',
                        "values": [[1, 54], [2, 74], [3, 64], [4, 68], [5, 56], [6, 44], [7, 61], [8, 63], [9, 45], [10, 51], [11, 68], [12, 46], [13, 64], [14, 51], [15, 42], [16, 63], [17, 72], [18, 60], [19, 52], [20, 58], [21, 41], [22, 40], [23, 58], [24, 30], [25, 49], [26, 54], [27, 60], [28, 41], [29, 66]]
                    },
                    {
                        "key": 'Commercial Tower',
                        "values": [[1, 64], [2, 84], [3, 64], [4, 68], [5, 86], [6, 74], [7, 81], [8, 83], [9, 65], [10, 61], [11, 88], [12, 76], [13, 84], [14, 71], [15, 82], [16, 73], [17, 92], [18, 80], [19, 62], [20, 68], [21, 71], [22, 50], [23, 78], [24, 60], [25, 59], [26, 74], [27, 80], [28, 51], [29, 97]]
                    }
                ]
            } else {
                return [
                    {
                        "key": 'Commercial Loans',
                        "values": [[1, 13], [2, 14], [3, 24], [4, 18], [5, 16], [6, 14], [7, 11], [8, 13], [9, 15], [10, 11], [11, 18], [12, 16], [13, 28], [14, 11], [15, 12], [16, 13], [17, 12], [18, 20], [19, 22], [20, 18], [21, 11], [22, 10], [23, 18], [24, 20], [25, 9], [26, 14], [27, 10], [28, 11], [29, 17]]
                    },

                    {
                        "key": 'Treasury Solutions',
                        "values": [[1, 29], [2, 36], [3, 42], [4, 25], [5, 22], [6, 34], [7, 41], [8, 19], [9, 45], [10, 31], [11, 28], [12, 36], [13, 54], [14, 41], [15, 36], [16, 39], [17, 21], [18, 20], [19, 22], [20, 44], [21, 32], [22, 20], [23, 28], [24, 24], [25, 29], [26, 19], [27, 20], [28, 31], [29, 49]]
                    },

                    {
                        "key": 'GIS Sterling',
                        "values": [[1, 54], [2, 74], [3, 64], [4, 68], [5, 56], [6, 44], [7, 61], [8, 63], [9, 45], [10, 51], [11, 68], [12, 46], [13, 64], [14, 51], [15, 42], [16, 63], [17, 72], [18, 60], [19, 52], [20, 58], [21, 41], [22, 40], [23, 58], [24, 30], [25, 49], [26, 54], [27, 60], [28, 41], [29, 66]]
                    },
                    {
                        "key": 'Commercial Tower',
                        "values": [[1, 74], [2, 64], [3, 84], [4, 78], [5, 66], [6, 64], [7, 71], [8, 83], [9, 55], [10, 81], [11, 88], [12, 76], [13, 84], [14, 71], [15, 62], [16, 73], [17, 82], [18, 80], [19, 92], [20, 68], [21, 71], [22, 70], [23, 78], [24, 80], [25, 59], [26, 74], [27, 80], [28, 51], [29, 67]]
                    }
                ]
            }
        }
    }
})();
