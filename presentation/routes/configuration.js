/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Initialize the app module and define app routes
 */
 
'use strict';
angular
    .module('yulok', [
        'ui.router',
        'ui-notification',
        'ui.bootstrap'
    ]);

(function() {
    'use strict';
    angular
        .module('yulok')
        .config(routes);
    
    routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
		    .state('no-logged', {
			    abstract: true,
			    url: '',
			    templateUrl: '/presentation/views/no-logged.html',
			    controller: 'noLoggedCtl as vm'
            })
            .state('home', {
                url: '/', 
                parent: 'no-logged',
                templateUrl:'/presentation/views/login.html',
                controller: ' as vm'
            })

    };

})();