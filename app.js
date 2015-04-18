'use strict';

(function(){
    var app = angular.module('jp-website', []);

    app.controller('NavigationController', function() {
        this.activePage = 1;
        this.setActivePage = function(page) {
            this.activePage = page;
        };
        this.isActivePage = function(page) {
            return this.activePage === page;
        };
    });

    app.directive('navTop', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/nav-top.html'
        };
    });

    app.directive('navBottom', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/nav-bottom.html'
        };
    });

    app.directive('socialIcon', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/social-icon.html',
            scope: {
                href: '@',
                icon: '@'
            }
        };
    });

    app.directive('page', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/page.html',
            transclude: true
        };
    });

    app.directive('pageHeader', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/page-header.html',
            scope: {
                title: '@',
                subtitle: '@'
            }
        };
    });

    app.directive('pageBlog', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/page-blog.html'
        };
    });

    app.directive('pageProjects', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/page-projects.html'
        };
    });

    app.directive('projectList', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/project-list.html',
            transclude: true
        };
    });

    app.directive('project', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/project.html',
            transclude: true,
            scope: {
                title: '@'
            }
        };
    });

    app.directive('pageDownloads', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/page-downloads.html'
        };
    });

    app.directive('downloadCategory', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/download-category.html',
            transclude: true,
            scope: {
                title: '@'
            }
        };
    });

    app.directive('downloadCategoryDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/download-category-description.html',
            transclude: true
        };
    });

    app.directive('downloadList', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/download-list.html',
            transclude: true
        };
    });

    app.directive('download', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/download.html',
            transclude: true
        };
    });

    app.directive('downloadLink', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/download-link.html',
            scope: {
                title: '@',
                href: '@'
            }
        };
    });
})();