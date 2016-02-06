import Backbone from 'backbone';
import $ from 'jquery';

import routes from './routes';

export default Backbone.Router.extend({
  routes,

  about() {
    $('#app').html("You're viewing the about page. It is full of graphics");
  }
});
