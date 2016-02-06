import _ from 'underscore';
import Backbone from 'backbone';

// all the routes from the mini-apps
const custom_apps_routes = {
  about: {
    'about': 'about',
  },
  heavy: {
    'heavy(/:heavy_param)': 'heavy',
  }
};

// we need to convert Backbone routes to plain RegExps
function routeToRegExp(route) {
  return Backbone.Router.prototype._routeToRegExp.call(null, route);
}

// Creating the index of routes' regexes
_.each(custom_apps_routes, (value, key) => {
  custom_apps_routes[key] = Object.keys(value).map(routeToRegExp);
});

export default path => {
  const matcher = route => route.test(path);
  return _.findKey(custom_apps_routes, routes => _.some(routes, matcher));
}
