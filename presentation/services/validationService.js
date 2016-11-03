/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Service to validate data
 */

(function() {
    'use strict';
    angular
        .module('yulok')
        .factory('validationService', validationService);

	function validationService() {
                
        function email(pEmail) {
            var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return expr.test(pEmail) ? true: false;
        };
		
        return {
            isEmail: function(pEmail) {
                return email(pEmail);             
            }   
        };   
    };

})();