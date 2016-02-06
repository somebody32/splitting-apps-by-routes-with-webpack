import _ from 'underscore';
import Backbone from 'backbone';

const custom_apps_registry = {};
const custom_apps_routes = {};
const custom_apps_context = require.context('./apps', true, /metadata\.js$/);

// Creating the index of metadata which holds {app_name: {metadata}} pairs.
custom_apps_context.keys().reduce((collector, routes_file) => {
  const app_metadata = custom_apps_context(routes_file).default;
  collector[app_metadata.name] = app_metadata;
  return collector;
}, custom_apps_registry);

// we need to convert Backbone routes to plain RegExps
function routeToRegExp(route) {
  return Backbone.Router.prototype._routeToRegExp.call(null, route);
}

// Creating the index of routes' regexes
_.each(custom_apps_registry, (value, key) => {
  custom_apps_routes[key] = Object.keys(value.routes).map(routeToRegExp);
});

export default path => {
  const matcher = route => route.test(path);
  const app_name = _.findKey(custom_apps_routes, routes => _.some(routes, matcher));
  return custom_apps_registry[app_name];
}
