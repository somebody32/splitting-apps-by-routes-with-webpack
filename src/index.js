import Backbone from 'backbone';
import $ from 'jquery';

import Router from './router';

$(() => {
  new Router();

  Backbone.history.start();
});
