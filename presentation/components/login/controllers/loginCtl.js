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

    function loginCtl() {
               
        var vm = this;
        console.log('from login');
    };	
})();