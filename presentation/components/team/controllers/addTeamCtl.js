/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for team app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('addTeamCtl', addTeamCtl);

    addTeamCtl.$inject = ['$state', 'teamService', 'sessionService', 'shareTeamService', 'notificationService'];

    function addTeamCtl($state, teamService, sessionService, shareTeamService, notificationService) {
               
        var vm = this;
        //$('#time').timepicker();
        vm.showProfile = true;
        vm.showLocation = false;
        vm.time = '';
        vm.videoUrl = '';
                                    
        vm.information = {
            userId: -1,
            sport: '',
            name: '',
            description: '',
            gender: '',
            direction: '',
            country: '',
            horario: ''
            //trainingDays : [] se debe corregir
        };

        vm.contact = {
            userId: -1,
            managerName: '',
            managerLastName: '',
            phone: '',
            email: ''
        };

        vm.videos = [];

        function getUserId() {
            var user = sessionService.getSession();
            vm.information.userId = user.id;
            vm.contact.userId = user.id;
            //$scope.video.userId = shareTeamService.getTeamManager();
        };

        function sendNewContact(pContact) {

            teamService.addContact(pContact).then(function(response){
                response.error ? notificationService.showError(response.message) : sendToTeamProfile();

            });
        };

        function sendNewTeam(pInfo, pContact) {

            teamService.newTeam(pInfo).then(function(response){
             
                shareTeamService.setTeam(response.params[0]);
                response.error ? notificationService.showError(response.message) : sendNewContact(pContact);

            });
        };

        function sendToTeamProfile() {
                //$location.path('/teamProfile').replace();
            //$state.go('welcomeTeam');
        };

        function addInformation() {
            var indGender = document.getElementById("opcGenero");
        
            vm.information.gender = indGender.options[indGender.selectedIndex].text;
            vm.information.sport = document.getElementById("opcDeporte").selectedIndex;
            vm.information.country = document.getElementById("opcProvincia").selectedIndex;
            sendNewTeam(vm.information, vm.contact); //se comenta solo para pruebas
            //showMultimediaStep();// borrar es solo para pruebas
        };

        function addTrainingDay() {
            var dayIndex = document.getElementById("dayOpc");
            var dateTime = dayIndex.options[dayIndex.selectedIndex].text+": "+vm.time;
            vm.information.trainingDays.push({day: dateTime});
        };



        function addVideo(pUrl) {

            vm.videos.push({videoUrl: pUrl});
            vm.videoUrl = '';
                /*
                teamsService.addVideo(pData).then(function(pResp){
                    pResp.error ? messageError.showError(pResp.message) : location.href='#videos';  

                });*/
        };

        function showLocationStep() {
            vm.showProfile = false;
            vm.showLocation = true;
        };

            var validEmail = function(pEmail){
                var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return expr.test(pEmail) ? true: false;
            };

            var validPhone = function(pPhone){
                var expr = /^\(?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                return expr.test(pPhone) ? true: false;
            };

        function validData() {
            showLocationStep();
                /*
                var emailSuccessStatus = validEmail($scope.contact.email);
                var phoneSuccessStatus = validPhone($scope.contact.phone);
                if(emailSuccessStatus & phoneSuccessStatus){
                    showLocationStep();
                }
                else if(!emailSuccessStatus){
                    var message = 'La dirección de correo no es válida.';
                    notificationService.showError(message);
                }
                else if(!phoneSuccessStatus){
                    var message = 'El número de telefono no es válido.';
                    notificationService.showError(message);
                }*/
        };

        vm.validData = validData;
        vm.addInformation = addInformation;
        getUserId();
      
    };
    	
})();