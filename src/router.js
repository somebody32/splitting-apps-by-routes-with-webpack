
import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Router.extend({
  routes: {
    '': 'home',
    'main_app_part': 'mainAppPart',
    '*handleMissingRoute': 'handle404',
  },

  home() {
    $('#app').html("You're on the home page");
  },

  mainAppPart() {
    $('#app').html("You're viewing a part of the main app, it is lightweight and very actively used");
  },

  handle404() {
    alert('404');
  }
});
