/**
 * Created by fisher at 11:41 AM on 1/29/17.
 */

'use strict';

const Constants = require('./../Constants');
const Utils = require('./../../../Utils');

const getMembersPath = Constants.getActivityMembersPath;
const getMemberPath = Constants.getActivityMemberPath;

/**
 * Activity members list.
 */
exports.membersList = (activityID) => {
	return Utils.doGET(getMembersPath(activityID));
};

/**
 * Enroll the activity.
 */
exports.enrollActivity = (activityID, member) => {
	return Utils.doPOST(getMembersPath(activityID), member);
};

/**
 * Get the specific Member detail.
 */
exports.getMemberDetail = (activityID, memberID) => {
	return Utils.doGET(getMemberPath(activityID, memberID));
};

/**
 * Update the specific member.
 */
exports.updateMember = (activityID, memberID, memberPatch) => {
	return Utils.doPATCH(getMemberPath(activityID, memberID), memberPatch);
};

/**
 * Remove the specific member.
 */
exports.removeMember = (activityID, memberID) => {
	return Utils.doDELETE(getMemberPath(activityID, memberID));
};

