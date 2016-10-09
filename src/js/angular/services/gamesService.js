app.factory('gamesService', ['$http', function($http) {
    //read the json file and return the data
    return $http.get('data/games.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);