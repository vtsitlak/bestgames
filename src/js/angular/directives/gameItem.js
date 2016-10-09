app.directive('gameItem', [function () {
    // set the gameItem directive
    return {
        restrict: 'E',
        scope: {
            game: '=',
            cs:  '='
        },
        
        templateUrl: 'parts/gameItem.html'        
    };
}]); 