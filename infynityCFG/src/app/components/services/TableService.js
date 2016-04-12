(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        issue: 'aMM Prod Bi-Weekly CR #140017',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'GTF Report upgrade 2.0',
        progress: 40,
        status: 'Feedback',
        class: ''
      },
      {
        issue: 'MQ Upgrade Validations',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'UNIX Patching #12034',
        progress: 84,
        status: 'In progress',
        class: 'orange'
      },
      {
        issue: 'Add backend',
        progress: 1,
        status: 'To do',
        class: 'md-warn'
      },
      {
        issue: 'Layout with sidebar',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      }
    };
  }
})();
