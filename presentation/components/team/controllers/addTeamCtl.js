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
        $('#time').timepicker();
        vm.time = '';
                                    
        vm.information = {
            userId: -1,
            sport: '',
            name: '',
            description: '',
            gender: '',
            direction: '',
            country: '',
            horario: '',//borrar
            trainingDays : [] 
        };

        vm.contact = {
            userId: -1,
            managerName: '',
            managerLastName: '',
            phone: '',
            email: ''
        };

        function getUserId() {
            var user = sessionService.getSession();
            vm.information.userId = user.id;
            vm.contact.userId = user.id;
        };

        function sendNewContact(pContact) {

            teamService.addContact(pContact).then(function(response){
                response.error ? notificationService.showError(response.message) : sendToTeamProfile();

            });
        };

        function addTeamProfile(pInfo, pContact) {
            teamService.newTeam(pInfo).then(function(response){
                shareTeamService.setTeam(response.params[0]);
                response.error ? notificationService.showError(response.message) : sendNewContact(pContact);

            });
        };

        function sendToTeamProfile() {
            $state.go('welcomeTeam');
        };

        function addInformation() {
            var indGender = document.getElementById("opcGenero");
        
            vm.information.gender = indGender.options[indGender.selectedIndex].text;
            vm.information.sport = document.getElementById("opcDeporte").selectedIndex;
            vm.information.country = document.getElementById("opcProvincia").selectedIndex;
            addTeamProfile(vm.information, vm.contact); 
            
        };

        function addTrainingDay() {
            var dayIndex = document.getElementById("dayOpc");
            var dateTime = dayIndex.options[dayIndex.selectedIndex].text+": "+vm.time;
            console.log(dateTime);
            vm.information.trainingDays.push(dateTime);
        };

        function validData(pIsValidProfile, pIsValidContact) {
            if(pIsValidProfile && pIsValidContact) {  
                //otras validaciones de contacto
                addInformation();

                
            }
            else {
                var message = 'All fields are required.';
                notificationService.showWarning(message);
            }
        };

        getUserId();
        vm.validData = validData;
        vm.addTrainingDay = addTrainingDay;
      
    };
    	
})();



 /*

            var validEmail = function(pEmail){
                var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return expr.test(pEmail) ? true: false;
            };

            var validPhone = function(pPhone){
                var expr = /^\(?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                return expr.test(pPhone) ? true: false;
            };*/