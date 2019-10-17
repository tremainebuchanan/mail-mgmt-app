/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const app = angular.module('mail-app', ['ngRoute',
  'common-services',
  'login',
  'mail',
]);
app.config(($routeProvider) => {
  $routeProvider.when('/login', {
    template: '<login></login>',
  }).when('/mails', {
    template: '<mail-list></mail-list>',
  }).when('/mails/new', {
    template: '<mail-create></mail-create>',
  }).otherwise('/login');
});
