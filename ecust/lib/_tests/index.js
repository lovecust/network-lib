/**
 * Created by fisher at 9:08 PM on 3/14/17.
 */

'use strict';

const assert = require('assert');
const Library = require('./../index');

/**
 * Make sure today's number is positive.
 * Make sure 6 floors.
 * Make sure each floor have the expected seats.
 *
 * @param status{Object} Library Status.
 * @return {*|boolean} Whether the library status is valid.
 */
let isStatusValid = function (status) {
	return (
		status &&
		0 <= status.today &&
		6 === status.available.length && 6 === status.occupied.length &&
		status.available[0] + status.occupied[0] === 36 &&
		status.available[1] + status.occupied[1] === 322 &&
		status.available[2] + status.occupied[2] === 461 &&
		status.available[3] + status.occupied[3] === 372 &&
		status.available[4] + status.occupied[4] === 349 &&
		status.available[5] + status.occupied[5] === 56 &&
		0 <= status.minutes && 1440 >= status.minutes
	);
};

Library.status().then(status => {
	assert(isStatusValid(status), 'Unexpected library status.' + JSON.stringify(status));
}).catch(err => {
	assert(!err, err);
});
