import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Router.extend({
  routes: {
    'heavy(/:heavy_param)': 'heavy',
  },

  heavy(heavy_param) {
    $('#app').html(`You're viewing that heavy app, heavy param from the URL is: ${heavy_param}`);
  },
});
