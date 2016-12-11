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

    teamCtl.$inject = ['$state','$sce', 'shareTeamService', 'validationService', 'notificationService'];

    function teamCtl($state, $sce,shareTeamService, validationService, notificationService) {
               
        var vm = this;

        vm.team = {
                id:1,
                image:'/presentation/images/background.jpeg',
                name:'Saprissa',
                country:'san jose',
                sport:'futbol',
                gender: 'masculino'
            }

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



        vm.teamVideos = [{
            id:0,
            url:'https://www.youtube.com/v/9HEji-SiYCg',
        },
        {
            id:1,
            url:'https://www.youtube.com/v/9HEji-SiYCg',
        },
         {
            id:2,
            url:'https://www.youtube.com/v/9HEji-SiYCg',
        },
         {
            id:3,
            url:'https://www.youtube.com/v/9HEji-SiYCg',
        },
        {
            id:4,
            url:'https://www.youtube.com/v/9HEji-SiYCg',
        },
        {
            id:5,
            url:'https://www.youtube.com/v/9HEji-SiYCg',
        },
         {
            id:6,
            url:'https://www.youtube.com/v/9HEji-SiYCg',
        }];

        function trustSrc(src) {
            return $sce.trustAsResourceUrl(src);
        };
        
        var uploadVideos = function(){
            /*
            var teamId = shareTeamService.getTeam();
                
            teamsService.getVideos(teamId.id).then(function(pResp){
                    
                pResp.error ? notificationService.showError(pResp.message) : $scope.teamVideos = pResp.params;      
            });*/
        };
        vm.trustSrc =trustSrc;

        uploadVideos();
            
        var uploadTeam = function(){

            /*
            var team = shareTeamService.getTeam();
                
            teamsService.getTeam(team.id).then(function(pResp){
                pResp.error ? notificationService.showError(pResp.message) : $scope.team = pResp.params[0];     
            });*/
        };
        
       // uploadTeam();
       




      
    };
    	
})();