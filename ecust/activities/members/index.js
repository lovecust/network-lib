/**
 * Created by fisher at 11:41 AM on 1/29/17.
 */

'use strict';

let Constants = require('./../Constants');
let Utils = require('./../../Utils');

/**
 * Activity members list.
 */
exports.membersList = (activityID) => {
	return Utils.doGET(`${Constants.URL_API_ACTIVITIES}/${activityID}/members`);
};

/**
 * Enroll the activity.
 */
exports.enrollActivity = (activityID, member) => {
	return Utils.doPOST(`${Constants.URL_API_ACTIVITIES}/${activityID}/members`, member);
};

/**
 * Get the specific Activity detail.
 */
exports.getActivityDetail = (activityID) => {
	return Utils.doGET(`${Constants.URL_API_ACTIVITIES}/${activityID}`);
};

/**
 * Update the specific activity.
 */
exports.updateActivity = (activityID, activityPatch) => {
	return Utils.doPATCH(`${Constants.URL_API_ACTIVITIES}/${activityID}`, activityPatch);
};

/**
 * Remove the specific activity.
 */
exports.removeActivity = (activityID) => {
	return Utils.doDELETE(`${Constants.URL_API_ACTIVITIES}/${activityID}`);
};

