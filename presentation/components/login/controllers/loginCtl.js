/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for login app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('loginCtl', loginCtl);

    loginCtl.$inject = ['$state', 'userService', 'sessionService', 'shareTeamService', 'validationService', 'notificationService'];

    function loginCtl($state, userService, sessionService,shareTeamService, validationService, notificationService) {
               
        var vm = this;
        vm.userData = {
            username: '',
            password: ''
        };

        function sendToTeam() {
		console.log("valido");
            //$state.go('teamProfile.information');
        }

        function validUser(pData) {
            if(pData.message === 'Exitoso') {
                var team = {
                    id: pData.params[0].userId
                };

                shareTeamService.setTeam(team);
                sessionService.setSession(pData.params[0]); //revisar
                var message = 'Welcome '+pData.params[0].username+' to Yulok your team !';
                notificationService.showSuccess(message);
                sendToTeam();
            }
            else {
                notificationService.showError(pData.message);
            }
        };

        function login(pData) {
            userService.login(pData).then(function(response) {
					response.error ? notificationService.showError(response.message) : validUser(response);
            });
        };

        function validData(pIsValid, pData) { 
            if(pIsValid) {
                var emailSuccessStatus = validationService.isEmail(pData.username);
                if(emailSuccessStatus) {
                    login(pData); 
                }
                else {
                    var message = 'This email: '+pData.username+' is not valid.';
                    notificationService.showError(message);
                }
            }
            else {
                var message = 'All fields are required.';
                notificationService.showWarning(message);
            }
        };

        vm.validData  = validData;


    };	
})();