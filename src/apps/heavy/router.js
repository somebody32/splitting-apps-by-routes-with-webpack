import Backbone from 'backbone';
import $ from 'jquery';

import routes from './routes';

export default Backbone.Router.extend({
  routes,

  heavy(heavy_param) {
    $('#app').html(`You're viewing that heavy app, heavy param from the URL is: ${heavy_param}`);
  },
});
