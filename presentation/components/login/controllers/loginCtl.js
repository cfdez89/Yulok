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

    loginCtl.$inject = ['notificationService'];

    function loginCtl(notificationService) {
               
        var vm = this;
        console.log('from login');
        vm.userData = {
            username: '',
            password: ''
        };

        function validEmail(pEmail) {
            var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return expr.test(pEmail) ? true: false;
        };

        function validData(pIsValid, pData) { console.log('boton');
            if(pIsValid) {
                var emailSuccessStatus = validEmail(pData.username);
                if(emailSuccessStatus) {
                    //login(pData); 
                }
                else {
                    var message = 'La dirección de correo '+pData.username+' no es válida.';
                    notificationService.showError(message);
                }
            }
            else {
                var message = 'Debe completar todos los campos solicitados.';
                notificationService.showWarning(message);
            }
        };

        vm.validData  = validData;


    };	
})();