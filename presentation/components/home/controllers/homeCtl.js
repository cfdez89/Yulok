/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for home app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('homeCtl', homeCtl);

    homeCtl.$inject = ['$state', 'validationService', 'notificationService'];

    function homeCtl($state, validationService, notificationService) {
               
        var vm = this;
        function validData(pIsValid, pData) {$state.go('search');
			if(pIsValid){
				//findTeams(pData);
				$state.go('search');
			}
			else {
				var message = 'Debe ingresar una palabra para realizar la búsqueda.';
				notificationService.showWarning(message);
			}
		};

	    vm.validData  = validData;

    };
    	
})();