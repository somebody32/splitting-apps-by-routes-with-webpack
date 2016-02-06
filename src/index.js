import Backbone from 'backbone';
import $ from 'jquery';

import Router from './router';
import AboutApp from './apps/about/';
import HeavyApp from './apps/heavy/';

$(() => {
  new Router();
  AboutApp();
  HeavyApp();

  Backbone.history.start();
});
