/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for team app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('teamCtl', teamCtl);

    teamCtl.$inject = ['$state','$sce',  'teamService', 'shareTeamService', 'validationService', 'notificationService'];

    function teamCtl($state, $sce,  teamService, shareTeamService, validationService, notificationService) {
               
        var vm = this;

        vm.team = {};
        vm.contact = {};
        vm.teamVideos = [];

        vm.images = [{
            'thumb':'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            'img': 'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            ' description':'Imagen 1'
        },
        {
            'thumb':'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            'img': 'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            ' description':'Imagen 1'
        },
        {
            'thumb':'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            'img': 'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            ' description':'Imagen 1'
        },
        {
            'thumb':'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            'img': 'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            ' description':'Imagen 1'
        },
        {
            'thumb':'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            'img': 'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            ' description':'Imagen 1'
        },
        {
            'thumb':'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            'img': 'http://www.hotelcompostela.es/files/hotel/hotel-rooms/habitacion-hotel-compostela-001.jpg',
            ' description':'Imagen 1'
        }
        ];

        function setImage(){
            document.getElementsByClassName('teamHeaderContainer')[0].style.backgroundImage = "url("+vm.team.image+")"; 
        }


        function trustSrc(src) {
            return $sce.trustAsResourceUrl(src);
        };
        
        function getVideos(){
            var teamId = shareTeamService.getTeam();
                
            teamService.getVideos(teamId.id).then(function(response){
                    
                response.error ? notificationService.showError(response.message) : vm.teamVideos = response.params;      
            });
        };

        vm.trustSrc = trustSrc;
            
        function getTeam() {
            
            var team = shareTeamService.getTeam();
                
            teamService.getTeam(team.id).then(function(response){
                response.error ? notificationService.showError(response.message) : vm.team = response.params[0];     
                setImage();
            });
        };

        function getContact() {
            var team = shareTeamService.getTeam();
            teamService.getContact(team.id).then(function(response){
                response.error ? notificationService.showError(response.message) : vm.contact = response.params[0];  
            });
        };

        getTeam();
        getContact();
        getVideos();
       

      
    };
    	
})();