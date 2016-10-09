app.directive('navigationMenu', [function () {
    // set the navigationMenu directive
    return {
        restrict: 'E',
        scope: {
            nav: '='         
        },
        
        templateUrl: 'parts/navigationMenu.html'        
    };
}]); 