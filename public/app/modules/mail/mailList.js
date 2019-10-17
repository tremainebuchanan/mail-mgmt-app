/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
angular.module('mail.index', []).component('mailList', {
  templateUrl: 'app/modules/mail/mail-list.html',
  controller: MailListController,
});

MailListController.$inject = ['$scope', 'commonService', 'mailService'];
/**
 * Component controller function.
 * @param {object} $scope - Angular scope variable.
 * @param {} commonService - Shared common service.
 * @param {} mailService - Mail Resource services.
 */
function MailListController($scope, commonService, mailService) {
  $scope.mail = {
    subject: '',
    sender: '',
    org: '',
    recipient: '',
  };
  $scope.toggleModal = toggleModal;
  $scope.createMail = createMail;
  activate();
  /**
   * 
   */
  function activate() {}
  /**
   * 
   */
  function createMail(isFormValid, modalId) {
    mailService.create($scope.mail).then(function (response) {
      console.log(response);
      commonService.toggleModal(modalId);
    });
  }
  /**
   * Toggles modal on screen.
   * @param {string} id - Id of modal.
   */
  function toggleModal(id) {
    commonService.toggleModal(id);
  }
}
