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
 * Get the specific Member detail.
 */
exports.getMemberDetail = (activityID, memberID) => {
	return Utils.doGET(`${Constants.URL_API_ACTIVITIES}/${activityID}/members/${memberID}`);
};

/**
 * Update the specific member.
 */
exports.updateMember = (activityID, memberID, memberPatch) => {
	return Utils.doPATCH(`${Constants.URL_API_ACTIVITIES}/${activityID}/members/${memberID}`, memberPatch);
};

/**
 * Remove the specific member.
 */
exports.removeMember = (activityID, memberID) => {
	return Utils.doDELETE(`${Constants.URL_API_ACTIVITIES}/${activityID}/members/${memberID}`);
};

