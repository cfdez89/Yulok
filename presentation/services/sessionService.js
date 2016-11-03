/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Service to session admin
 */

(function() {
    'use strict';
    angular
        .module('yulok')
        .factory('sessionService', sessionService);

	function sessionService() {
                
        function setSession(pData) {
            var sessionData = JSON.stringify(pData);
            sessionStorage.setItem('user', sessionData);
        };

        function getSession() {
            var dataSession = JSON.parse(sessionStorage.getItem('user'));
            return dataSession;
        };

        function deleteSession(pData) {
            sessionStorage.removeItem('user');
        };

        function getStatus(pData) {
            sessionStorage.getItem('user') ? true: false; 
        };
		
        return {
            setSession: function(pData) {
                return setSession(pData);             
            },
            getSession: function() {
                return getSession();             
            },
            deleteSession: function() {
                return deleteSession();             
            },
             isStartSession: function() {
                return getStatus();             
            }
        };   
    };

})();