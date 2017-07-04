'use strict';

import navbar from './navbar/navbar.module';
import profile from './profile/profile.module';

import template from './root.html';

const root = angular.module('root', [
  navbar,
  profile
]).component('root', { template }).name;
export default root;
