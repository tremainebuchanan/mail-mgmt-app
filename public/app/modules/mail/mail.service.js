/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-undef */
angular.module('mail.services', []).service('mailService', mailService);
// eslint-disable-next-line no-use-before-define
mailService.$inject = ['$http'];

function mailService($http) {
  /**
   * Creates a new mail resource
   * @param {object} mail - The details of the mail
   */
  function create(mail) {
    const url = 'api/mails';
    // eslint-disable-next-line prefer-arrow-callback
    return $http.post(url, mail).then(function (response) {
      return response.data;
    });
  }

  return {
    create,
  };
}
