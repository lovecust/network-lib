/**
 * Created by fisher at 5:59 PM on 1/23/17.
 */

'use strict';

let fetch;
if ('undefined' === typeof window) {
	fetch = require('node-fetch');
} else {
	require('whatwg-fetch');
}

/**
 * Transfer JSON text to object.
 *
 * @param response{String} JSON string.
 * @return {Object} Transferred Object.
 */
const toJSON = (response) => response.json();

/**
 * Set up a json request.
 *
 * @param url{String} Requested URL.
 * @param method{String} Request method.
 * @param data{Object} Data to be send.
 * @returns {Promise.<JSON>} JSON response.
 */
const doRequest = (url, method, data) => {
	let options = {
		method: method,
		credentials: 'include',
	};
	if (data) {
		options.headers = {'Content-Type': 'application/json'};
		options.body = JSON.stringify(data);
	}
	return fetch(url, options).then(toJSON);
};

/**
 * Do simple GET request.
 *
 * @param url Requested URL.
 * @returns {Promise.<JSON>} JSON response.
 */
exports.doGET = (url) => {
	return doRequest(url, 'GET', null);
};

/**
 * Simple POST request.
 *
 * @param path{String} Requested URL.
 * @param data{JSON} Data to be send.
 * @returns {Promise.<JSON>} JSON response.
 */
exports.doPOST = (path, data) => {
	return doRequest(path, 'POST', data);
};

/**
 * Simple PUT request.
 *
 * @param path{String} Requested URL.
 * @param data{JSON} Data to be send.
 * @returns {Promise.<JSON>} JSON response.
 */
exports.doPUT = (path, data) => {
	return doRequest(path, 'PUT', data);
};
/**
 * Simple PATCH request.
 *
 * @param path{String} Requested URL.
 * @param data{JSON} Data to be send.
 * @returns {Promise.<JSON>} JSON response.
 */
exports.doPATCH = (path, data) => {
	return doRequest(path, 'PATCH', data);
};

/**
 * Simple DELETE request.
 *
 * @param path{String} Requested URL.
 * @returns {Promise.<JSON>} JSON response.
 */
exports.doDELETE = (path) => {
	return doRequest(path, 'DELETE', null);
};
