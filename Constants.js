/**
 * Created by fisher at4:33 PM on 1/7/17.
 *
 * Lovecust.Network module Constant fields.
 */

'use strict';

/**
 * Server address.
 */
let address = exports.SERVER_ADDRESS = 'http://www.onecust.site:39358';
if (-1 < location.href.indexOf('localtest.me')) {
	// For local test usage.
	address = exports.SERVER_ADDRESS = 'http://api.localtest.me:39358';
}

/**
 * API paths.
 */
exports.PATH_ECUST = `${address}/ecust`;
exports.PATH_USERS = `${address}/users`;
