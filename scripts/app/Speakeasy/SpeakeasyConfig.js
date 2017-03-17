(function () {
    'use strict';
    angular
        .module('speakeasy')
        .config(config);
        function config($stateProvider, $urlRouterProvider){
            //removed , $locationProvider
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/views/home/landingpage.html',
        controller: 'landingPageController as lp',
        title: 'SpeakEasy | Home'
    })

    .state('chooseYourAdventure', {
        url: '/ChooseYourAdventure',
        templateUrl: 'Adventures/chooseYourAdventure.html',
        controller: 'adventureController as quiz',
        title: 'SpeakEasy | Choose Your Adventure'
    })

    .state('courseDashboard', {
        url: '/Courses',
        templateUrl: 'Courses/coursedashboard.html',
        controller: 'courseDashController as course',
        title: 'SpeakEasy | Courses'
    })

    .state('BlogYourAdventure', {
        url: '/BlogYourAdventure',
        templateUrl: 'Blogs/BlogYourAdventure.html',
        controller: 'userBlogController as blog',
        title: 'SpeakEasy | User Blogs'
    })

    .state('BlogYourAdventure.blogForm', {
        url: '/blog',
        templateUrl: 'Blogs/blogForm.html',
        controller: 'userBlogController as blog',
        title: 'SpeakEasy | User Blogs'
                    
    })


    .state('FrenchSingleCourse', {
        url: '/FrenchCourse',
        templateUrl: 'Courses/FrenchSingleCourse.html',
        controller: 'courseController as french',
        title: 'SpeakEasy | French Course'
    })
    .state('MexicanCuisine', {
        url: '/MexicanCuisine',
        templateUrl: '/views/courses/MexicanCuisine.html',
        title: 'SpeakEasy | Mexican Cuisine: A Journey to the Yucatan'
    })

    .state('Login', {
        url: '/SignIn',
        templateUrl: 'UserandAdminProfiles/logIn.html',
        controller: "loginController as login",
        title: 'SpeakEasy | Login'
    })

    .state('FAQ', {
        url: '/FAQs',
        templateUrl: 'home/faq.html',
        controller: 'faqsController as displayFaq',
        title: 'SpeakEasy | FAQs'
    })

    .state('Dashboard', {
        url: '/UserDashboard',
        templateUrl: 'Dashboard/Dashboard.html',
        controller: 'userDashController as dashboard',
        title: 'SpeakEasy | User Dashboard',
        data: sessionStorage.getItem('user')

            })

    .state('Account', {
        url: '/Account',
        templateUrl: 'UserandAdminProfiles/acct.html',
        title: 'SpeakEasy | Create Account'
    })

    .state('Connect', {
        url: '/ConnectWithNeabyUsers',
        templateUrl: 'UserandAdminProfiles/ConnectWithNearbyUsers.html',
        controller: 'connectController as profile',
        title: 'SpeakEasy | Connect'
    })

    .state('Admin', {
        url: '/Admin',
        templateUrl: 'UserandAdminProfiles/admin.html',
        controller: 'AdminController as admin',
        title: 'SpeakEasy | Admin',
         data: sessionStorage.getItem("user")
    })

    .state('UserProfile', {
        url: '/Profile',
        templateUrl: 'UserandAdminProfiles/userprofile.html',
        controller: 'ProfileController as profile',
        title: 'SpeakEasy | Profile',
        data: sessionStorage.getItem("user")


    })

  //  $locationProvider.html5Mode(true);

        }
})();