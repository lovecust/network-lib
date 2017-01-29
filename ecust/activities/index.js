/**
 * Created by fisher at 11:05 AM on 1/29/17.
 */

'use strict';

let Constants = require('./Constants');
let Utils = require('./../Utils');

/**
 * Activities list.
 */
exports.activitiesList = () => {
	return Utils.doGET(Constants.URL_API_ACTIVITIES);
};

/**
 * Post an activities.
 */
exports.postActivity = (activity) => {
	return Utils.doPOST(Constants.URL_API_ACTIVITIES, activity);
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

