/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for logged app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('loggedCtl', loggedCtl);

    loggedCtl.$inject = ['sessionService'];

    function loggedCtl(sessionService) {
               
        var vm = this;

        vm.username = '';
        vm.id = -1;

        vm.teamProfile = [
            {
                link: "teamProfile"
            }
        ];
        
        vm.sesion = [
            {
                name: "Log out",
                link: "logout"
            }
        ];

        function hideMenuBar() {
            $('.navbar-collapse').click('li', function() {
                $('.navbar-collapse').collapse('hide');
            });
        }; 

        function getUserName() {
            if(sessionService.isStartSession()) {
                var session = sessionService.getSession();
                vm.username = session.username;
                vm.id = session.id;
            }  
        };

        getUserName(); 

        hideMenuBar();
    };	
})();