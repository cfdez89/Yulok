/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for team app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('welcomeTeamCtl', welcomeTeamCtl);

    welcomeTeamCtl.$inject = ['$state'];

    function welcomeTeamCtl($state) {
               
        var vm = this;        

        function sendToProfile() {
            $state.go('welcomeTeam');
        };
        vm.sendToProfile = sendToProfile;
      
    };
    	
})();