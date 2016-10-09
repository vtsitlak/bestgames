app.directive('imageErrorDirective', function () {
    // this directive checks for errors on images source and return a default image on error
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element[0].onerror = function () {
                element[0].className = element[0].className + " image-error";
                element[0].src = 'images/noicon.png';
            };
        }
    }
})