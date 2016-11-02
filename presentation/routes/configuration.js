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

    function routes($stateProvider, $urlRouterProvider) { console.log('routes');
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
		    .state('no-logged', {
			    abstract: true,
			    url: '',
			    templateUrl: '/presentation/components/layout/noLogged/views/noLogged.html',
			    controller: 'noLoggedCtl as vm'
            })
            .state('login', {
                url: '/', 
                parent: 'no-logged',
                templateUrl:'/presentation/components/login/views/login.html',
                controller: 'loginCtl as vm'
            })
            .state('about',{
                url: '/about', 
                parent: 'no-logged',
                templateUrl: '/presentation/components/about/views/about.html'
            });

    };

})();