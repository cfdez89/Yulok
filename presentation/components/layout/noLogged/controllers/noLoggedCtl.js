/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Controller for no logged app module 
 */

(function(){
    'use strict';
    angular
        .module('yulok')
        .controller('noLoggedCtl', noLoggedCtl);

    function noLoggedCtl() { console.log('no logged');
               
        var vm = this;
        vm.showMobileMenu = true;

        function openNav() {
            vm.showContent = false;
            document.getElementById("noLoggedNav").style.width = "100%";
        };  

        function closeNav() {
            document.getElementById("noLoggedNav").style.width = "0";
            vm.showContent = true;
        };
        
        vm.openNav = openNav;
        vm.closeNav = closeNav;
    };	
})();