import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Router.extend({
  routes: {
    'about': 'about'
  },

  about() {
    $('#app').html("You're viewing the about page. It is full of graphics");
  }
});
