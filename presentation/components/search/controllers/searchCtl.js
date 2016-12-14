/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for home app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('searchCtl', searchCtl);

    searchCtl.$inject = ['$state', '$stateParams' , 'teamService', 'shareTeamService', 'validationService', 'notificationService'];

    function searchCtl($state, $stateParams, teamService, shareTeamService, validationService, notificationService) {
               
        var vm = this;
        vm.teams = [];

		vm.mdlTag = $stateParams.value;
        findTeams(vm.mdlTag);

        function findTeams(pTag){
            teamService.allTeams().then(function(response){
                response.error ? notificationService.showError(response.message) : vm.teams = response.params;   
            }
        )};

        function validData(pIsValid, pData) {
            if(pIsValid){
                //findTeams(pData);
                $state.go('search', {value:pData});
            }
            else {
                var message = 'You must enter a word to perform the search.';
                notificationService.showWarning(message);
            }
        };


		function showTeam(pId) {  
			var team = {
				id: pId
			};

			shareTeamService.setTeam(team);
			$state.go('team');
		};

        vm.validData  = validData;
		vm.showTeam = showTeam;


      
    };
    	
})();