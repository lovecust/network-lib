/**
 * Created by fisher at4:33 PM on 1/7/17.
 *
 * Lovecust.Network module Constant fields.
 */

'use strict';

/**
 * Server address.
 */
exports.SERVER_ADDRESS = 'http://api.lovecust.com';
if (-1 < location.href.indexOf('localtest.me')) {
	// For local test usage.
	exports.SERVER_ADDRESS = 'http://api.localtest.me';
}

/**
 * API paths.
 */
exports.PATH_ECUST = exports.SERVER_ADDRESS + '/ecust';
