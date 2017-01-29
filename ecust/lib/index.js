/**
 * Created by fisher at4:22 PM on 1/7/17.
 *
 * Lovecust.Ecust.Library module API library.
 */

'use strict';

require('whatwg-fetch');
let Utils = require('./../Utils');
let Constants = require('./Constants');

/**
 * Library current status.
 */
exports.status = () => {
	return Utils.doGET(Constants.URL_LIBRARY_STATUS)
};

/**
 * Library status history.
 */
exports.statusStatistics = () => {
	return Utils.doGET(Constants.URL_LIBRARY_STATUS_STATISTICS)
};

