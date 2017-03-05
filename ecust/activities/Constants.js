/**
 * Created by fisher at 11:05 AM on 1/29/17.
 */

'use strict';

const LovecustConstants = require('./../../Constants');

exports.PATH_ECUST_ACTIVITIES = LovecustConstants.PATH_ECUST + '/activities';
exports.URL_API_ACTIVITIES = exports.PATH_ECUST_ACTIVITIES;

/**
 * Generate resource url.
 */
const getActivityPath = exports.getActivityPath = (activityID) => `${exports.URL_API_ACTIVITIES}/${activityID}`;
// Images
exports.getActivityImagesPath = (activityID) => `${getActivityPath(activityID)}/images`;
exports.getActivityImagePath = (activityID, imageID) => `${exports.getActivityImagesPath(activityID)}/${imageID}`;
// Members.
exports.getActivityMembersPath = (activityID) => `${getActivityPath(activityID)}/members`;
exports.getActivityMemberPath = (activityID, memberID) => `${exports.getActivityMembersPath(activityID)}/${memberID}`;
