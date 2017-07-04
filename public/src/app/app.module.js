'use strict';
import angular from 'angular';
/** Style Dependency */
import '../assets/sass/style.scss';
import $scriptjs from 'scriptjs';
import $ from 'jquery';

window.jQuery = $;
/** Dependencies modules imports */
import root from './modules/root.module';

function loadScript(bundle) {
  return new Promise(resolve => $scriptjs(bundle, resolve));
}

loadScript([
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js'
]).then(startApp);

function startApp() {
  const app = angular.module('appobook', [
    root
  ]).name;

  angular.element(() => angular.bootstrap(document, [app]));
};
