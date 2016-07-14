import Backbone from 'backbone';
import $ from 'jquery';

import AppFinder from './app_finder';

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

  handle404(path) {
    const mini_app = AppFinder(path);

    if (mini_app) {
      const handler = System.import(`./apps/${mini_app.name}/index.js`);
      handler.then(bundle => {
        const App = bundle.default;
        App();
        Backbone.history.loadUrl(); // just refreshing the current path, because we've added new paths that we can handle
      }).catch(() => alert("can't load the bundle"));
    } else {
      alert('404');
    }
  }
});
