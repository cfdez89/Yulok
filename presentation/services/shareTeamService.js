/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Service to share team data
 */

(function() {
    'use strict';
    angular
        .module('yulok')
        .service('shareTeamService', shareTeamService);

    function shareTeamService() {
                
        function setTeam(pData) {
            var teamData = JSON.stringify(pData);
            sessionStorage.setItem('team', teamData);
        };

        function getTeam() {
            var teamData = JSON.parse(sessionStorage.getItem('team'));
            return teamData;
        };

        function deleteTeam(pData) {
            sessionStorage.removeItem('team');
        };
		
        return {
            setTeam: function(pData) {
                return setTeam(pData);             
            },
            getTeam: function() {
                return getTeam();             
            },
            deleteTeam: function() {
                return deleteTeam();             
            }
        };   
    };

})();