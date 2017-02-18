/**
 * Created by fisher at 23:14 on 2/10/17.
 */

'use strict';

let Constants = require('./../Constants');
let Utils = require('./../../Utils');

/**
 * Activity images list.
 */
exports.imagesList = (activityID) => {
	return Utils.doGET(Constants.getActivityImagesPath(activityID));
};

/**
 * Upload image to activity.
 */
exports.uploadImage = (activityID, name, file) => {
	let data = new FormData();
	data.append('image', file);
	data.append('name', name);
	return fetch(Constants.getActivityImagesPath(activityID), {
		method: 'POST',
		credentials: 'include',
		body: data
	}).then(res => res.json());
	// return Utils.doPOST(Constants.getActivityImagesPath(activityID), image);
};

/**
 * Get the specific Image detail.
 */
exports.getImageDetail = (activityID, imageID) => {
	return Utils.doGET(Constants.getActivityImagePath(activityID, imageID));
};

/**
 * Update the specific image.
 */
exports.updateImage = (activityID, imageID, imagePatch) => {
	return Utils.doPATCH(Constants.getActivityImagePath(activityID, imageID), imagePatch);
};

/**
 * Remove the specific image.
 */
exports.removeImage = (activityID, imageID) => {
	return Utils.doDELETE(`${Constants.URL_API_ACTIVITIES}/${activityID}/images/${imageID}`);
};

