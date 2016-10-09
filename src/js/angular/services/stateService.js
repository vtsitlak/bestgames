app.provider('stateService', ['$stateProvider', 'MetaTagsProvider', function($stateProvider, MetaTagsProvider) {
    // dynamicaly create if not exist a new state for ui-router to link to the gameLink
    this.$get = function($state) {
        return {
            addState: function(title, url, templatePrefix, seoKeywords, description, categoryIds, tags, id) {
                if (!$state.href(title)) {
                    $stateProvider.state(title, {
                        url: url,
                        // used 'http://cors.io/?' to prevet the No 'Access-Control-Allow-Origin' header error
                        templateUrl: 'http://cors.io/?' + templatePrefix
                            //templateUrl: templatePrefix 

                    });
                    if ($state.href(title)) {
                        console.log('state created!');
                        MetaTagsProvider
                            .when('title', {
                                title: 'Best Games:'+ title,
                                description: 'Cool',
                                keywords: seoKeywords,
                                description: description,
                                categoryIds: categoryIds,
                                tags: tags,
                                id: id
                            })

                    }
                } else {
                    console.log('state exist!');
                }

            }
        }
    }
}]);