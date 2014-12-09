angular.module('firebase.config', [])
  .constant('FBURL', 'https://lost-paws.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');