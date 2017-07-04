'use strict';

import profileComponent from './profile.component';
import profileConfig from './profile.config';

const profile = angular
  .module('profile', [])
  .component('profile', profileComponent)
  .config(profileConfig)
  .name;

export default profile;
