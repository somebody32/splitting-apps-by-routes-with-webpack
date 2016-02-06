import Backbone from 'backbone';
import $ from 'jquery';

import Router from './router';

$(() => {
  new Router();

  require.ensure([], require => {
    const AboutApp = require('./apps/about/').default;
    AboutApp();
  });

  require.ensure([], require => {
   const HeavyApp = require('./apps/heavy/').default;
   HeavyApp();
  });
  
  Backbone.history.start();
});
