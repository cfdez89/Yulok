/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Service to get data from api
 */

(function() {
    'use strict';

    angular
        .module('yulok')
        .service('requestService', requestService);

    requestService.$inject = ['$http'];

    function requestService($http) {
		
        return {
            create: function(pUrl, pData) {
                return $http({
                    method: "POST",
                    url: pUrl,
                    data: pData,
                    headers: { 'Content-Type': 'application/json' } 
                });
            },
            retrieve: function(pUrl) {
                return $http({
                    method: "GET",
                    url: pUrl,
                    headers: { 'Content-Type': 'application/json' }
                });
            },
            update: function(pUrl, pData) {
                return $http({
                    method: "PUT",
                    url: pUrl,
                    data: pData,
                    headers: { 'Content-Type': 'application/json' }
                });
            },
            delete: function(pUrl) {
                return $http({
                    method: "DELETE",
                    url: pUrl,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        };   
    };
	
})();