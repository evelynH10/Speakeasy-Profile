(function (){

    'use strict';
    angular
    .module('speakEasy') 
    .config (config);
        
        function config ($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise ('');

        $stateProvider
            .state('home',{
                url: '/BlogYourAdventure',
                templateUrl: '/views/blogHome.html',
                controller: "homeController as home"
            })

            .state('blogForm', {
                    url: '/blog',
                    templateUrl: '/views/blogForm.html',
                    controller: 'userBlogController as blog'
                    
                })
             .state('blogForm.nest',{
                    url: '/backhome',
                    templateUrl: '/BlogYourAdventure.html',

        })


    }
    

})();





// function config ($stateProvider, $urlRouterProvider) {
//             $urlRouterProvider.otherwise('/home');

//             $stateProvider
//                 .state('home', {
//                     url: '/home',
//                     templateUrl: 'partial-home-Example.html'
//                 })

//                 .state('home.list', {
//                     url: 'list',
//                     templateUrl: 'partial-home-list-Example.html',
//                     controller: MusicController
//                 })