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

    function noLoggedCtl() {
               
        var vm = this;


        function hideMenuBar() {
            $('.navbar-collapse').click('li', function() {
                $('.navbar-collapse').collapse('hide');
            });
        };  

        hideMenuBar();
    };	
})();