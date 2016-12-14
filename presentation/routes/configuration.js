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
        'ui.bootstrap',
        'jkuri.gallery',
        'ngSanitize'
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
                templateUrl: '/presentation/components/layout/noLogged/views/noLogged.html',
                controller: 'noLoggedCtl as vm'
            })
            .state('home', {
                url: '/', 
                parent: 'no-logged',
                templateUrl:'/presentation/components/home/views/home.html',
                controller: 'homeCtl as vm'
            })
            .state('search', {
                url: '/search/:value', 
                parent: 'no-logged',
                templateUrl:'/presentation/components/search/views/search.html',
                controller: 'searchCtl as vm'
            })
            .state('team',{
                    url: '/team', 
                    parent: 'no-logged',
                    templateUrl: '/presentation/components/team/views/team.html',
                    controller: 'teamCtl as vm'
            })    
            .state('signup', {
                url: '/signup', 
                parent: 'no-logged',
                templateUrl:'/presentation/components/signup/views/signup.html',
                controller: 'signupCtl as vm'
            })
            .state('login', {
                url: '/login', 
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