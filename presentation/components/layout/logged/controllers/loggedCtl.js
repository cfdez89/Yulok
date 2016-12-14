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

    function loggedCtl() {
               
        var vm = this;

        var hideMenuBar = function() {
            $('.navbar-collapse').click('li', function() {
                $('.navbar-collapse').collapse('hide');
            });
        };  

        hideMenuBar();
    };	
})();