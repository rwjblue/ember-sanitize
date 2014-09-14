import { sanitize } from 'addons/utils/sanitize';

module('SanitizeHelper');

test('sanitizes with the defaults', function() {
  var result = sanitize("some <b>html</b> here");
  equal("some html here", result);
});
