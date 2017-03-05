/**
 * Created by fisher at 11:05 AM on 1/29/17.
 */

'use strict';

const Constants = require('./Constants');
const Utils = require('./../../Utils');

const getActivityPath = Constants.getActivityPath;

/**
 * Activities list.
 */
exports.activitiesList = () => {
	return Utils.doGET(Constants.URL_API_ACTIVITIES);
};

/**
 * Get my draft activities.
 */
exports.getMyDraftActivities = () => {
	return Utils.doGET(`${Constants.URL_API_ACTIVITIES}?draft=true`);
};

/**
 * Get my published activities.
 */
exports.getMyPublishedActivities = () => {
	return Utils.doGET(`${Constants.URL_API_ACTIVITIES}?published=true`);
};

/**
 * Get my first draft activity.
 */
exports.getMyFirstDraftActivity = () => {
	return Utils.doGET(`${Constants.URL_API_ACTIVITIES}?draft=true`).then(
		activities => activities[0]
	);
};

/**
 * Get the specific Activity detail or draft activity.
 */
exports.getSpecifiedOrDraftActivity = (activityID) => {
	if (!activityID) {
		return exports.getMyFirstDraftActivity();
	} else {
		return exports.getActivityDetail(activityID);
	}
};

/**
 * Get the specific Activity detail.
 */
exports.getActivityDetail = (activityID) => {
	return Utils.doGET(getActivityPath(activityID));
};

/**
 * Update the specific activity.
 */
exports.updateActivity = (activityID, activityPatch) => {
	return Utils.doPATCH(getActivityPath(activityID), activityPatch);
};

/**
 * Remove the specific activity.
 */
exports.removeActivity = (activityID) => {
	return Utils.doDELETE(getActivityPath(activityID));
};
