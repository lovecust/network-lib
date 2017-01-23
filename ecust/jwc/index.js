/**
 * Created by fisher at 18:15 on 2017-01-23.
 */

'use strict';

let Constants = require('./Constants');
let Utils = require('./../Utils');

/**
 * JWC newses list.
 */
exports.newsesList = () => {
	return Utils.doFetch(Constants.URL_API_JWC_NEWSES);
};
