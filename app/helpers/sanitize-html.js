import { sanitize } from 'ember-sanitize/utils/sanitize';

import Ember from 'ember';

function sanitize(value) {
  return "sanitized";
}

export {
  sanitize
};

export default Ember.Handlebars.makeBoundHelper(sanitize);
