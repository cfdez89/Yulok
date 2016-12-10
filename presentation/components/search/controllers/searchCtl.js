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

    searchCtl.$inject = ['$state', 'shareTeamService', 'validationService', 'notificationService'];

    function searchCtl($state, shareTeamService, validationService, notificationService) {
               
        var vm = this;
        vm.teams = [{
        	id:1,
        	name:'saprissa',
            country:'san jose',
            sport:'futbol',
            gender: 'masculino'
        },
        {
        	id:2,
        	name:'heredia',
            country:'heredia',
            sport:'futbol',
            gender: 'masculino'
        },
         {
        	id:3,
        	name:'alajuela',
            country:'alajuela',
            sport:'futbol',
            gender: 'masculino'
        },
         {
        	id:4,
        	name:'cartago',
            country:'cartago',
            sport:'futbol',
            gender: 'masculino'
        }];
		vm.mdlTag   = "";

		function showTeam(pId) {
			var team = {
				id: pId
			};
			console.log(team);

			shareTeamService.setTeam(team);
			$state.go('team');
		};

		vm.showTeam = showTeam;


      
    };
    	
})();