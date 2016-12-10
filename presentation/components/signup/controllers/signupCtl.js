/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for signup app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('signupCtl', signupCtl);

    signupCtl.$inject = ['$state', 'userService', 'sessionService', 'validationService', 'notificationService'];

    function signupCtl($state, userService, sessionService, validationService, notificationService) {
               
        var vm      = this;
        vm.check    = false;
        vm.userData = {
            email: '',
		    password: '',
		    confirmPassword: ''
        };
      

        function sendToEditTeam() {
            //$state.go('addTeam');
        }

        function welcomeMessage(pUsername) {
            var message = 'Hola '+pUsername+' te has registrado en Yulok.<br />Por favor ingresa los datos de tu equipo.';
		    notificationService.showSuccess(message);
        };

        function signup(pData) {
            var user = {
		        email: pData.email, 
		        password: pData.password
		    };
            userService.signup(user).then(function(response) {
					response.error ? notificationService.showError(response.message) 
                                   : sessionService.setSession(pResp.params[0]), 
                                     welcomeMessage(pResp.params[0].username),
						             sendToEditTeam();
            });
        };

        function validData(pIsValid, pData) { 
            if(pIsValid) {
                var emailSuccessStatus = validationService.isEmail(pData.username);
				var passwordSuccessStatus = validationService.comparePassword(pData.password, pData.confirmPassword);
				var lengthPasswordSuccesStatus = isPasswordMin(pData.password);

                if(!emailSuccessStatus) {
				    var message = 'La dirección de correo '+pData.email+' no es válida.';
				    notificationService.showError(message);
				}
				if(!passwordSuccessStatus){
                    var message = 'Las contraseñas no coinciden.';
				    notificationService.showError(message);
				}
				if(!lengthPasswordSuccesStatus){
                    var message = 'La contraseña debe tener almenos 7 caractéres.';
				    notificationService.showError(message);
				}
				else if(emailSuccessStatus && passwordSuccessStatus){
				    signup(pData);
				}
            }
            else {
                var message = 'All fields are required.';
                notificationService.showWarning(message);
            }
        };

        function showPassword() {
            var checkStatus = document.getElementById("checkPassword");

            checkStatus.checked ? $('#password').attr('type', 'text')
                                : $('#password').attr('type', 'password'); 
        };

        vm.validData  = validData;
        //vm.showPassword = showPassword;


    };

})();