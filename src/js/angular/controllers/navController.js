app.controller('navController', ['$scope', function($scope) {
    //set the language select options

    $('.options').flagStrap({
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

}]);