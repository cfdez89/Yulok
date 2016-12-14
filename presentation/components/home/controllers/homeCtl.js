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
        vm.mdlTag = "";

        function validData(pIsValid, pData) {
			if(pIsValid){
				$state.go('search', {value:pData});
			}
			else {
				var message = 'You must enter a word to perform the search.';
				notificationService.showWarning(message);
			}
		};

	    vm.validData  = validData;

    };
    	
})();