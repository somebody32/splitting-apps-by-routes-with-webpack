
import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Router.extend({
  routes: {
    '': 'home',
    'main_app_part': 'mainAppPart',
    'about': 'about',
    'heavy(/:heavy_param)': 'heavy',
    '*handleMissingRoute': 'handle404',
  },

  home() {
    $('#app').html("You're on the home page");
  },

  mainAppPart() {
    $('#app').html("You're viewing a part of the main app, it is lightweight and very actively used");
  },

  about() {
    $('#app').html("You're viewing the about page. It is full of graphics");
  },

  heavy(heavy_param) {
    $('#app').html(`You're viewing that heavy app, heavy param from the URL is: ${heavy_param}`);
  },

  handle404() {
    alert('404');
  }
});
