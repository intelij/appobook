'use strict';

import template from './navbar.html';

function controller() {
  const vm = this;
  vm.$onInit = onInit;

  function onInit() {
    console.log('Initializing component');
  }
};

export default { template, controller };
