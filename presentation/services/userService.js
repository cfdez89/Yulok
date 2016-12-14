/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Service to admin user settings
 */

(function() {
    'use strict';
    angular
        .module('yulok')
        .factory('userService', userService);

    userService.$inject = ['requestService', 'API_URL'];

	function userService(requestService, API_URL) { 

        function login(pData) {
            var url = API_URL + '/usuario.php';

            return requestService.create(url, pData).then(function(response) {
                       return response.data; 
                    },  
                    function(response) { 
                        return { status: false, message: response.statusText, data: null };   
                    });
        };

        function signup(pData) {
            var url = API_URL + '/crear_usuario.php';

            return requestService.create(url, pData).then(function(response) {
                       return response.data; 
                    },  
                    function(response) { 
                        return { status: false, message: response.statusText, data: null };   
                    });
        };

        function updatePassword(pData) {
            var url = API_URL + '/cambiar_password.php.php';

            return requestService.create(url, pData).then(function(response) {
                       return response.data; 
                    },  
                    function(response) { 
                        return { status: false, message: response.statusText, data: null };   
                    });
        };

        function deleteUser(pData) {
            var url = API_URL + '/eliminar_cuenta.php';

            return requestService.create(url, pData).then(function(response) {
                       return response.data; 
                    },  
                    function(response) { 
                        return { status: false, message: response.statusText, data: null };   
                    });
        };
		
        return {
            login: function(pData) {
                return login(pData);             
            },
            signup: function(pData) {
                return signup(pData);             
            },
            updatePassword: function(pData) {
                return updatePassword(pData);             
            },
            deleteUser: function(pData) {
                return deleteUser(pData);             
            }     
        };   
    };

})();