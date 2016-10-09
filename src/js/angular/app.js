var app = angular.module('bestGames', ['ui.bootstrap', 'ngTouch', 'ngAnimate', 'ui.router', 'metatags', 'angular-rating', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {


    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");


    $stateProvider

        .state('main', {
        url: '/',
        controller: 'mainController',
        templateUrl: 'parts/main.html',

    })


    .state('mygames', {
        url: '/mygames',
        templateUrl: 'parts/mygames.html'
    })

    .state('join', {
        url: '/join',
        templateUrl: 'parts/join.html'
    })

});