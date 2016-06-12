angular.module('app.routes', [])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/movies/upcoming');

  $stateProvider

  .state('app', {
    abstract: true,
    url: '',
    views: {
      nav: {
        templateUrl: 'nav.html'
      },
      content: {
        template: '<div ui-view></div>'
      }
    }
  })

  .state('app.movies', {
    url: '/movies/:type',
    templateUrl: 'movies.html',
    controller: 'MoviesController',
    resolve: {
      movies: function (MoviesApi, $stateParams) {
        return MoviesApi.get({ type: $stateParams.type.replace('-', '_') })
        .then(function (movies) {
            return movies;
          });
      }
    }
  })

  .state('app.dvds', {
    url: '/dvds/:type',
    templateUrl: 'movies.html',
    controller: 'MoviesController',
    resolve: {
      movies: function (RentalsApi, $stateParams) {
        return RentalsApi.get({ type: $stateParams.type.replace('-', '_') })
          .then(function (movies) {
            return movies;
          });
      }
    }
  });
});
