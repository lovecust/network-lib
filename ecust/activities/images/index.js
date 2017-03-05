/**
 * Created by fisher at 23:14 on 2/10/17.
 */

'use strict';

const Constants = require('./../Constants');
const Utils = require('./../../../Utils');

const getImagesPath = Constants.getActivityImagesPath;
const getImagePath = Constants.getActivityImagePath;

/**
 * Activity images list.
 */
exports.imagesList = (activityID) => {
	return Utils.doGET(getImagesPath(activityID));
};

/**
 * Upload image to activity.
 */
exports.uploadImage = (activityID, name, file) => {
	let data = new FormData();
	data.append('image', file);
	data.append('name', name);
	return fetch(getImagesPath(activityID), {
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
	return Utils.doGET(getImagePath(activityID, imageID));
};

/**
 * Update the specific image.
 */
exports.updateImage = (activityID, imageID, imagePatch) => {
	return Utils.doPATCH(getImagePath(activityID, imageID), imagePatch);
};

/**
 * Remove the specific image.
 */
exports.removeImage = (activityID, imageID) => {
	return Utils.doDELETE(getImagePath(activityID, imageID));
};

