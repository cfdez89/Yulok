/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Service to show app messages and notifications
 */

(function() {
	'use strict';
    angular
		.module('yulok')
	    .factory('notificationService', notificationService);

	function notificationService(Notification) {

		var delay = 6000;
                
        var setError = function(pMessage) {
            return Notification.error({message: pMessage, title: 'Failure', delay: delay});
        };

        var setSuccess = function(pMessage) {
            return Notification.success({message: pMessage, title: 'Success', delay: delay});
        };

        var setInfo = function(pMessage) {
            return Notification.info({message: pMessage, title: 'Information ', delay: delay});
        };

        var setWarning = function(pMessage) {
            return Notification.warning({message: pMessage, title: 'Warning !', delay: delay});
        };
		
		return {
			showError: function(pMessage) {
                return setError(pMessage);             
            },
            showSuccess: function(pMessage) {
                return setSuccess(pMessage);
            },
            showInfo: function(pMessage) {
                return setInfo(pMessage);
            },
            showWarning: function(pMessage) {
                return setWarning(pMessage);
            }    
		};   
	};

})();