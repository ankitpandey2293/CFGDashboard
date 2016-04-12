(function(){
  'use strict';

  angular.module('app')
        .service('todoListService', [
        '$q',
      todoList
  ]);

  function todoList($q){
    var todos = [
      {text: 'Approve PAMS request', done: false},
      {text: 'Commercial tower DCAB meeting', done: true},
      {text: 'Vendor discussion aMM v8 upgrade', done: false}
    ];

    return {
      loadAllItems : function() {
        return $q.when(todos);
      }
    };
  }
})();
