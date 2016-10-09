app.controller('mainController', ['$scope', '$state', 'gamesService', 'stateService', function($scope, $state, gamesService, stateService) {

    // call game service to get the list of games
    gamesService.success(function(data) {
        $scope.games = data;
    });

    // set the featured games as a filter of the first 3  (featuredNumber) from the games list
    $scope.featuredNumber = 3;

    // set the maximum star rating
    $scope.maxRate = 5;

    //set the language select options
    $('#options').flagStrap({
        countries: {
            "US": "English (US)",
            "FR": "Français",
            "ES": "Español",
            "NL": "Nederlands",
            "DE": "Deutsch",
            "RU": "Русский",
            "JP": "日本語",
            "PL": "Polski",
            "TR": "Türkçe",
            "IT": "Italiano",
            "RO": "Română",
            "PT": "Português (PT)",
            "BR": "Português (BR)",
            "CN": "简体中文"
        },
        buttonSize: "btn-sm",
        buttonType: "btn-info",
        labelMargin: "10px",
        scrollable: false,
        scrollableHeight: "350px"
    });

    // set carousel settings
    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;

    // function to return $scope, to use inside ng-repeat
    $scope.getMyCtrlScope = function() {
        return $scope;
    }

    // create and link to game page
    $scope.gameLink = function(st, url, templ, seoKeywords, description, categoryIds, tags, id) {

        // call state provider to create a new state, adds the seoKeywords and go there       

        stateService.addState(st, url, templ, seoKeywords, description);
        $state.go(st);
        
        // !!!!!!! uncoment the window location and coment the stateservice and state go 
        // to get external link to game!!!
        
        //window.location.replace(templ);
        
        
        // set the tooltip
        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

    };




}]);