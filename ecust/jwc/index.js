/**
 * Created by fisher at 18:15 on 2017-01-23.
 */

'use strict';

const Constants = require('./Constants');
const Utils = require('./../../Utils');

/**
 * JWC newses list.
 */
exports.newsesList = () => {
	return Utils.doGET(Constants.URL_API_JWC_NEWSES);
};
